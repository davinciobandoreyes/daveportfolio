export function SetupNotice({ missing }: { missing: string[] }) {
  if (!missing.length) return null;

  return (
    <section className="admin-card admin-notice">
      <h2>Database setup</h2>
      <p>
        Content edits and visit history are stored in Supabase. Add the missing
        values to <code>.env.local</code>, run migrations 001 through 004 in the
        SQL editor, then reload.
      </p>
      <ul>
        {missing.map((name) => (
          <li key={name}>
            <code>{name}</code>
          </li>
        ))}
      </ul>
    </section>
  );
}
