type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (clean(payload.website, 100)) {
    return Response.json({ ok: true });
  }

  const submission = {
    name: clean(payload.name, 80),
    phone: clean(payload.phone, 20),
    email: clean(payload.email, 120),
    message: clean(payload.message, 1000),
  };

  if (!submission.name || !submission.phone || !submission.message || !emailPattern.test(submission.email)) {
    return Response.json({ error: "Please complete all fields with a valid email address." }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.CONTACT_FORM_SECRET;
  if (!scriptUrl || !secret) {
    console.error("Contact form Google Sheets integration is not configured.");
    return Response.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  }

  try {
    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...submission, secret }),
      cache: "no-store",
    });
    const result = (await googleResponse.json()) as { ok?: boolean };

    if (!googleResponse.ok || !result.ok) throw new Error("Google Apps Script rejected the submission.");
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return Response.json({ error: "We could not send your message. Please try again." }, { status: 502 });
  }
}
