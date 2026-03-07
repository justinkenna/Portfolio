"use client";

import { useActionState } from "react";
import { useState } from "react";
import { sendEmail, type FormState } from "../actions/sendEmail";

export default function ContactSection() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    sendEmail,
    null
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const canSubmit = name.trim() !== "" && email.trim() !== "" && subject.trim() !== "" && body.trim() !== "";

  return (
    <section className="bg-black px-8 py-24 md:px-16" id="contact">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — info */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#fe6500] mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#f6ece1]">
            Let&apos;s Work<br />Together
          </h2>
          <p className="mt-6 text-sm leading-7 text-white/80">
            Have a project in mind or just want to say hello?<br />
            Drop me a message and I&apos;ll get back to you.
          </p>
          <div className="mt-10 flex flex-col gap-4 text-sm">
            <a
              href="mailto:jkenna817@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fe6500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="text-[#f6ece1]">jkenna817@gmail.com</span>
            </a>
            <a
              href="tel:+14258760424"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fe6500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-[#f6ece1]">425.876.0424</span>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form action={action} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#fe6500]"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#fe6500]"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#fe6500]"
          />
          <textarea
            name="body"
            placeholder="Your message…"
            rows={6}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#fe6500] resize-none"
          />

          {state && (
            <p
              className={`text-sm font-medium ${
                state.success ? "text-green-700" : "text-red-600"
              }`}
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending || !canSubmit}
            className="self-start bg-[#fe6500] hover:bg-[#e05a00] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white font-medium px-8 py-3 rounded-full"
          >
            {pending ? "Sending…" : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}
