"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      form.reset();
      setStatus("success");
      setMessage("Thank you! Your enquiry has been received.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Get in Touch</h3>
      <div className="formRow">
        <input name="name" aria-label="Name" placeholder="Your name" autoComplete="name" required maxLength={80} />
        <input name="phone" aria-label="Phone" placeholder="Your phone" autoComplete="tel" inputMode="tel" required maxLength={20} />
        <input name="email" type="email" aria-label="Email" placeholder="Your email" autoComplete="email" required maxLength={120} />
      </div>
      <textarea name="message" aria-label="Message" placeholder="Your message" required maxLength={1000} />
      <input className="contactHoneypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn gold" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
      <p className={`formStatus ${status}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
