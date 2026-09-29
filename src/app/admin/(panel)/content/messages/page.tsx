import { readMessages } from "@/lib/admin/content";
import { missingDatabaseEnv } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  if (missingDatabaseEnv().length) return <h1>Messages</h1>;
  const messages = await readMessages();

  return (
    <>
      <h1>Messages</h1>
      {messages.length === 0 ? (
        <p className="admin-hint">No contact messages yet.</p>
      ) : (
        <ul className="admin-messages">
          {messages.map((message) => (
            <li key={message.id}>
              <p>
                <strong>{message.name}</strong> · {message.email}
              </p>
              <p className="admin-hint">{new Date(message.created_at).toLocaleString()}</p>
              <p>{message.message}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
