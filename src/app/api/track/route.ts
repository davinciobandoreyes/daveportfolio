import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import {
  analyticsCookie,
  parseTrackBody,
  readSessionId,
  referrerHost,
} from "@/lib/track";

export async function POST(request: Request) {
  let json: unknown;
  try {
    const text = await request.text();
    if (text.length > 2000) {
      return NextResponse.json({ error: "Payload too large" }, { status: 400 });
    }
    json = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const event = parseTrackBody(json);
  if (!event) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  const sessionId =
    readSessionId(request.headers.get("cookie")) ?? crypto.randomUUID();
  if (!rateLimit(`track:${sessionId}`, 120, 60_000)) {
    return NextResponse.json({ error: "Too many events" }, { status: 429 });
  }

  const admin = getSupabaseAdmin();
  const response = NextResponse.json({ ok: true, stored: Boolean(admin) });
  if (!request.headers.get("cookie")?.includes(`${analyticsCookie.name}=`)) {
    response.cookies.set(analyticsCookie.name, sessionId, analyticsCookie.options);
  }

  if (!admin) return response;

  const { error } = await admin.from("analytics_events").insert({
    type: event.type,
    path: event.path,
    event_name: event.event_name,
    referrer_host: referrerHost(event.referrer ?? null),
    utm_source: event.utm_source,
    utm_medium: event.utm_medium,
    utm_campaign: event.utm_campaign,
    session_id: sessionId,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }

  return response;
}
