import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Section, SectionHeader } from "./Section";
import { Mail, MapPin, Github, Linkedin, Phone, ArrowUpRight, Check, Loader2 } from "lucide-react";

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = "service_beuxk3o";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_tkp31ah";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "ydmaGs7uz3dzfQJMC";   // e.g. "abcDEFghiJKL012"
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_email:     "myumarali12@gmail.com",
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let&rsquo;s build <span className="text-gradient">something.</span></>}
        description="Open to AI/ML roles, freelance contracts, and collaborations on GenAI, RAG, and computer-vision systems."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* ── Left: direct links ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-premium rounded-2xl p-7"
        >
          <h3 className="font-display text-xl font-semibold">Direct lines</h3>
          <p className="mt-1 text-sm text-muted-foreground">Reply within 24 hours.</p>
          <div className="mt-6 space-y-2">
            {[
              { icon: Mail,    label: "myumarali12@gmail.com",      href: "mailto:myumarali12@gmail.com" },
              { icon: Github,  label: "github.com/Umarali8627",      href: "https://github.com/Umarali8627" },
              { icon: Linkedin,label: "Connect on LinkedIn",         href: "https://www.linkedin.com/umarali8627" },
              { icon: Phone,   label: "+92 334 5005212",             href: "tel:+923345005212" },
              { icon: MapPin,  label: "Peshawar, Pakistan",          href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card/40 px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right: contact form ── */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-premium rounded-2xl p-7"
        >
          <h3 className="font-display text-xl font-semibold">Send a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">Project details, roles, or just say hi.</p>

          <div className="mt-6 space-y-4">
            <Field label="Name" required>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                disabled={status === "sending"}
                className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-card disabled:opacity-50"
              />
            </Field>

            <Field label="Email" required>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                disabled={status === "sending"}
                className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-card disabled:opacity-50"
              />
            </Field>

            <Field label="Message" required>
              <textarea
                required
                maxLength={1500}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role, project, or idea…"
                disabled={status === "sending"}
                className="w-full resize-none rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-card disabled:opacity-50"
              />
            </Field>

            {/* Error message */}
            {status === "error" && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-400">
                {errorMsg}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-violet)] px-5 py-3 text-sm font-semibold text-background shadow-[0_10px_30px_-10px_oklch(0.7_0.18_265_/_0.6)] transition hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "sending" && (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
              )}
              {status === "sent" && (
                <><Check className="h-4 w-4" /> Message sent!</>
              )}
              {(status === "idle" || status === "error") && (
                <>Send message <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>
              )}
            </button>

            {/* Success note */}
            {status === "sent" && (
              <p className="text-center text-xs text-muted-foreground">
                Thanks! I'll get back to you within 24 hours.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}