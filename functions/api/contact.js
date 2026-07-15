export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const subject = (data.subject || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return json({ error: "Name, email, and message are required." }, 400);
  }

  const toEmail = env.CONTACT_TO_EMAIL || "care@emmanuswellness.com";
  const fromEmail = env.CONTACT_FROM_EMAIL || "Emmanus Wellness <onboarding@resend.dev>";

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: subject ? `Contact form: ${subject}` : "New message from the website contact form",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendRes.ok) {
    return json({ error: "Failed to send message." }, 502);
  }

  return json({ ok: true }, 200);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
