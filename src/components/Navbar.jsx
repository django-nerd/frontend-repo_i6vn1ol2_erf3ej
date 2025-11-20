import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Hem", href: "#hem" },
    { label: "Tjänster", href: "#tjanster" },
    { label: "Om Oss", href: "#om-oss" },
    { label: "Referenser", href: "#referenser" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0b1b33]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#hem" className="flex items-center gap-3 group">
            <div className="h-8 w-24 bg-gradient-to-r from-blue-500 to-blue-300 rounded-sm shadow-inner" aria-hidden />
            <span className="text-white tracking-[0.2em] font-semibold text-sm sm:text-base group-hover:text-blue-200 transition-colors">ARROWVISION AB</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500 transition">Boka uppdrag</a>
              <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-md border border-white/20 text-slate-100 text-sm hover:border-white/40 transition">Begär offert</a>
            </div>
          </nav>

          {/* Actions mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+46000000000" className="text-slate-200 hover:text-white"><Phone size={20} /></a>
            <a href="mailto:info@arrowvision.se" className="text-slate-200 hover:text-white"><Mail size={20} /></a>
            <button onClick={() => setOpen(!open)} aria-label="Öppna meny" className="text-slate-200 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1b33]/95">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-3">
              <a href="#kontakt" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm">Boka uppdrag</a>
              <a href="#kontakt" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/20 text-slate-100 text-sm">Begär offert</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
