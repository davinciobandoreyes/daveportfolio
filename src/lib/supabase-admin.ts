import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function missingDatabaseEnv() {
  return [
    !process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
      ? "NEXT_PUBLIC_SUPABASE_URL"
      : null,
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
      ? "NEXT_PUBLIC_SUPABASE_ANON_KEY"
      : null,
    !process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
      ? "SUPABASE_SERVICE_ROLE_KEY"
      : null,
  ].filter((item): item is string => Boolean(item));
}

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) return null;

  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return client;
}
