export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} Alejandro Tatoo</div>
        <div>Bogotá · Colombia</div>
      </div>
    </footer>
  );
}
