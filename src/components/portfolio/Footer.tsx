import { Github, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-violet)] text-[10px] font-bold text-background">UA</span>
          <span>© {new Date().getFullYear()} Umar Ali · Crafted with intent.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Umarali8627" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="mailto:myumarali12@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}