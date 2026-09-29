import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
  verifySessionToken,
} from "./admin-session";

export function adminAuthConfig() {
  const email = process.env.ADMIN_EMAIL?.trim() ?? "";
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim() ?? "";
  const secret = process.env.ADMIN_SESSION_SECRET?.trim() ?? "";
  const missing = [
    !email ? "ADMIN_EMAIL" : null,
    !passwordHash ? "ADMIN_PASSWORD_HASH" : null,
    !secret ? "ADMIN_SESSION_SECRET" : null,
  ].filter((item): item is string => Boolean(item));

  return { email, passwordHash, secret, missing };
}

export async function getSession() {
  const { secret } = adminAuthConfig();
  if (!secret) return null;
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token, secret);
}

export async function setSession(email: string) {
  const { secret } = adminAuthConfig();
  if (!secret) throw new Error("Admin session is not configured");
  const token = await createSessionToken(email, secret);
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, sessionCookieOptions);
}

export async function clearSession() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", { ...sessionCookieOptions, maxAge: 0 });
}
