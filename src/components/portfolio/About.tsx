import { Reveal } from "./Reveal";
import { GlowCard } from "./GlowCard";

const facts = [
  { label: "Focus", value: "Java · Spring Boot · React" },
  { label: "Experience", value: "Fresher" },
  { label: "Location", value: "Cuttack, India" },
  { label: "Availability", value: "Open to opportunities", live: true },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">01 — About</p>
          <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
            A full stack developer who owns the whole system.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={80}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I work end-to-end — from crafting the UI, to designing REST APIs and event-driven microservices, down to the database schema and infrastructure.
              </p>
              <p>
                I've shipped production-grade platforms with Spring Boot, Spring Cloud, and React, including real-time features over WebSockets, AI-powered chat with RAG, and payment integrations that actually clear.
              </p>
              <p>
                I care about clean architecture, sensible boundaries, and code my future self can maintain.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={160}>
            <GlowCard className="p-6">
              <ul className="divide-y divide-border">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-muted-foreground">{f.label}</span>
                    <span className="flex items-center gap-2 text-right font-medium">
                      {f.live && (
                        <span className="live-dot inline-block h-2 w-2 rounded-full bg-primary" />
                      )}
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
