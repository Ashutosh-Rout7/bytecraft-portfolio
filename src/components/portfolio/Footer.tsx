export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Your Name. Built with React, TanStack Start & Spring Boot in spirit.</p>
        <p className="font-mono">Designed & developed with care.</p>
      </div>
    </footer>
  );
}
