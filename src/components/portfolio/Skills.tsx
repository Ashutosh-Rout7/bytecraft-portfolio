import { Reveal } from "./Reveal";

const groups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", items: ["Java", "Spring Framework", "Spring Boot", "Spring Security", "Spring AI", "MySQL", "MongoDB", "Microservices", "RabbitMQ", "WebSocket", "Redis"] },
  { title: "Tools", items: ["Maven", "Postman", "IntelliJ IDEA", "Spring Tool Suite", "NetBeans", "Eclipse"] },
  { title: "DevOps", items: ["Git", "GitHub", "Docker"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">02 — Skills</p>
          <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">The stack I build with.</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div className="rounded-xl border border-border bg-card/40 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {g.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <li
                      key={s}
                      className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_var(--accent-glow)]"
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
