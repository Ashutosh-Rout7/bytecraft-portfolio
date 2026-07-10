import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

const words = ["Spring Boot Developer", "React Developer", "Microservices Engineer", "Full Stack Java Developer"];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0" style={{ transform: `translateY(${offset * 0.15}px)` }}>
        <div className="blob-a absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-3xl" />
        <div className="blob-b absolute top-40 right-0 h-[480px] w-[480px] rounded-full blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 pt-40 pb-24 md:pt-48">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Hi, I'm <span className="text-primary">Your Name</span>.
        </h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-muted-foreground md:text-3xl">
          <span className="caret text-foreground">{text}</span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I build production-grade full stack systems — from React interfaces to Spring Boot microservices to the databases underneath.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          3+ years building full stack systems with Java, Spring Boot, and React.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
