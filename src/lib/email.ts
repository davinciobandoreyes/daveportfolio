import { Resend } from "resend";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function resendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;
  return new Resend(apiKey);
}

/** Notify inbox about a contact-form submission. No-op without RESEND_API_KEY. Soft-fails on API errors. */
export async function sendContactNotification(payload: ContactEmailPayload) {
  const resend = resendClient();
  if (!resend) return { skipped: true as const };

  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to =
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.ADMIN_EMAIL?.trim() ||
    "";

  if (!from || !to) {
    console.warn(
      "[contact-email] Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL/ADMIN_EMAIL",
    );
    return { skipped: true as const };
  }

  const { name, email, message } = payload;
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact-email]", error);
      return { ok: false as const, error };
    }

    return { ok: true as const };
  } catch (err) {
    console.error("[contact-email]", err);
    return { ok: false as const, error: err };
  }
}
