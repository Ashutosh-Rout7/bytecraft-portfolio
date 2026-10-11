import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import ignitronImg from "@/assets/project-ignitron.png";
import salonImg from "@/assets/project-salon.png";

type Project = {
  id: string;
  title: string;
  short: string;
  status: string;
  statusTone: "live" | "wip";
  image: string;
  description: string;
  features: string[];
  arch?: string[];
  tech: string[];
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: "ignitron",
    title: "Ignitron IMS",
    short: "College Event Management System",
    status: "Live · Deployed",
    statusTone: "live",
    image: ignitronImg,
    description:
      "A full-stack College Event Management System built for Ajay Binay Institute of Technology (ABIT), with 4 role-based panels (Admin, Organizer, Volunteer, Student).",
    features: [
      "JWT Authentication & Role-Based Access Control (RBAC)",
      "AI Chatbot using RAG, Gemini AI, and MongoDB Atlas Vector Search",
      "Stripe Payment Integration for pass purchases",
      "Real-Time Notifications using WebSocket",
      "PDF Ticket Generation and Verification System",
      "Email Verification and Password Reset using SendGrid",
      "Cloudinary Image Upload Integration",
      "Attendance Eligibility Validation",
    ],
    tech: ["Java 17", "Spring Boot", "Spring Security", "Spring AI", "React", "Tailwind CSS", "MongoDB Atlas", "Gemini AI", "Stripe", "Cloudinary", "WebSocket", "Render", "Vercel"],
    demo: "https://ignitron-user-panel-steel.vercel.app ",
    github: "https://github.com/Ashutosh-Rout7",
  },
  {
    id: "salon",
    title: "Salon Booking System",
    short: "Microservices Platform",
    status: "In Progress · Cloud Deployment Planned",
    statusTone: "wip",
    image: salonImg,
    description:
      "A production-grade, real-world salon booking platform built on a scalable microservices architecture, supporting customers, salon owners, and admins in one system.",
    features: [
      "Customer booking flow: search, filter, and book appointments",
      "Salon Owner dashboard to manage services and bookings",
      "Admin panel for platform-wide management",
      "Online payments via Stripe & Razorpay",
      "Real-time notifications using WebSockets",
      "Reviews and ratings system",
      "Secure authentication using OAuth2 & Keycloak",
    ],
    arch: [
      "API Gateway + Service Discovery (Eureka)",
      "9 independent microservices",
      "Asynchronous communication via RabbitMQ",
      "Secure APIs with JWT & OAuth2, centralized auth via Keycloak",
    ],
    tech: ["Spring Boot", "Spring Cloud", "JPA", "Hibernate", "RabbitMQ", "Eureka", "OpenFeign", "Keycloak", "JWT", "WebSockets", "Stripe", "Razorpay", "MySQL", "React", "Redux Toolkit", "Tailwind CSS", "Axios", "Docker", "Docker Compose"],
    github: "https://github.com/Ashutosh-Rout7",
  },
];

export function Projects() {
  const [hover, setHover] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isTouch, setIsTouch] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">03 — Projects</p>
          <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">Featured work.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Selected systems I've designed, built, and shipped end-to-end.
          </p>
        </Reveal>

        <div
          ref={listRef}
          className="relative mt-14 rounded-2xl border border-border"
          onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHover(null)}
        >
          {projects.map((p, i) => {
            const isOpen = !!expanded[p.id];
            return (
              <div
                key={p.id}
                className={`group relative ${i > 0 ? "border-t border-border" : ""}`}
                onMouseEnter={() => !isTouch && setHover(p.id)}
              >
                <Reveal delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setExpanded((s) => ({ ...s, [p.id]: !s[p.id] }))}
                    className="flex w-full items-start gap-6 px-6 py-8 text-left transition-colors hover:bg-card/50 md:items-center md:px-10 md:py-10"
                  >
                    <span className="hidden shrink-0 font-mono text-sm text-muted-foreground md:block">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">
                          {p.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                            p.statusTone === "live"
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-amber-400/40 bg-amber-400/10 text-amber-300"
                          }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${p.statusTone === "live" ? "bg-primary" : "bg-amber-300"}`} />
                          {p.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground md:text-base">{p.short} — {p.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 8).map((t) => (
                          <li key={t} className="rounded border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
                            {t}
                          </li>
                        ))}
                        {p.tech.length > 8 && (
                          <li className="rounded border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
                            +{p.tech.length - 8}
                          </li>
                        )}
                      </ul>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`mt-1 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </Reveal>

                {/* Mobile inline image on tap */}
                {isTouch && isOpen && (
                  <div className="px-6 pb-2 md:px-10">
                    <img src={p.image} alt={p.title} loading="lazy" width={1120} height={720} className="w-full rounded-lg border border-border" />
                  </div>
                )}

                {isOpen && (
                  <div className="grid gap-8 px-6 pb-10 md:grid-cols-3 md:px-10">
                    <div className="md:col-span-2">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key features</h4>
                      <ul className="space-y-2 text-sm text-foreground/90">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {p.arch && (
                        <div className="mt-6 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-4">
                          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">System Design</h4>
                          <ul className="space-y-1.5 text-sm text-foreground/90">
                            {p.arch.map((a) => (
                              <li key={a} className="flex gap-2">
                                <span className="font-mono text-primary">→</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Full stack</h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <li key={t} className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.demo ? (
                          <a href={p.demo} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground">
                            Deployment in progress
                          </span>
                        )}
                        {p.github && (
                          <a href={p.github} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold hover:bg-card">
                            <Github size={14} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating hover preview (desktop) */}
      {!isTouch && hover && (
        <div
          className="pointer-events-none fixed z-40 hidden transition-opacity duration-200 md:block"
          style={{
            left: Math.min(pos.x + 24, (typeof window !== "undefined" ? window.innerWidth : 1200) - 300),
            top: Math.max(80, pos.y - 100),
            width: 280,
          }}
        >
          {projects.map((p) => (
            <img
              key={p.id}
              src={p.image}
              alt=""
              width={1120}
              height={720}
              className={`absolute inset-0 h-auto w-full rounded-lg border border-border shadow-2xl shadow-primary/20 transition-opacity duration-200 ${
                hover === p.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
