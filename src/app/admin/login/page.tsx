import { adminAuthConfig } from "@/lib/admin-session-server";
import { login } from "../actions";

const errors: Record<string, string> = {
  "1": "That email or password is not valid.",
  rate: "Too many attempts. Wait a few minutes and try again.",
  config: "Admin login is missing its environment variables.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const { missing } = adminAuthConfig();
  const message = params.error ? errors[params.error] : null;

  return (
    <main className="admin-login-wrap">
      <form className="admin-card admin-form" action={login}>
        <h1>Admin</h1>
        <p className="admin-hint">Sign in to view traffic and edit the site.</p>
        {missing.length > 0 && (
          <p className="form-status error" role="alert">
            Add {missing.join(", ")} to .env.local before signing in.
          </p>
        )}
        {message && (
          <p className="form-status error" role="alert">
            {message}
          </p>
        )}
        <label>
          Email
          <input name="email" type="email" autoComplete="username" required />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}
