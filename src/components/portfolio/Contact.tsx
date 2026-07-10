import { useState } from "react";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 2500);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">05 — Contact</p>
            <h2 className="text-4xl font-bold md:text-6xl">Let's build something.</h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Have a role, a project, or an interesting problem? I'd love to hear about it. I typically reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary">
                <Mail size={16} /> Email
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={submit} className="rounded-2xl border border-border bg-card/40 p-6 md:p-8">
              <Field label="Name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="Ada Lovelace"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                  placeholder="ada@example.com"
                />
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="input resize-none"
                  placeholder="Tell me about your project…"
                />
              </Field>
              <button
                type="submit"
                disabled={sent}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 disabled:opacity-70"
              >
                {sent ? (<><Check size={16} /> Sent — I'll get back to you</>) : (<><Send size={16} /> Send message</>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          padding: 0.7rem 0.9rem;
          border-radius: 0.5rem;
          font: inherit;
          transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .input::placeholder { color: var(--color-muted-foreground); opacity: 0.7; }
        .input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: color-mix(in oklab, var(--color-primary) 6%, transparent);
          box-shadow: 0 0 0 4px var(--accent-glow);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="mb-5 block">
      <span className="mb-1.5 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {error && <span className="text-destructive normal-case tracking-normal">{error}</span>}
      </span>
      {children}
    </label>
  );
}
