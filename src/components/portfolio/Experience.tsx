import { Reveal } from "./Reveal";

type Entry = { period: string; title: string; org: string; body: string };

const entries: Entry[] = [
  {
    period: "2024 — Present",
    title: "Full Stack Java Developer",
    org: "Freelance / Independent",
    body: "Building production-grade microservice systems with Spring Cloud, RabbitMQ, and React. Shipped Ignitron IMS and the Salon Booking platform.",
  },
  {
    period: "2023 — 2024",
    title: "Java Backend Intern",
    org: "Company Name",
    body: "Contributed REST APIs, JWT auth flows, and MySQL schema design to internal tooling. Migrated a legacy service to Spring Boot 3.",
  },
  {
    period: "2020 — 2024",
    title: "B.Tech, Computer Science",
    org: "Ajay Binay Institute of Technology (ABIT)",
    body: "Coursework in data structures, DBMS, operating systems, and distributed systems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">04 — Journey</p>
          <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">Experience & Education.</h2>
        </Reveal>

        <ol className="relative mt-14 ml-3 border-l border-border md:ml-6">
          {entries.map((e, i) => (
            <li key={i} className="relative pl-8 pb-12 last:pb-0 md:pl-12">
              <Reveal delay={i * 100}>
                <span className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                  <span className="relative h-3 w-3 rounded-full bg-primary" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">{e.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
