import { Drone, Hammer, Ship, Briefcase } from "lucide-react";

const services = [
  {
    icon: Drone,
    title: "Drönartjänster",
    desc:
      "Inspektion, kartläggning, foto/film och termografi. Dokumentation med hög precision för bygg, energi och infrastruktur.",
    bullets: ["Inspektion & dokumentation", "Foto/film & redigering", "Termografi & mätdata"],
  },
  {
    icon: Hammer,
    title: "Entreprenad & Snickeri",
    desc:
      "Renovering, byggservice och specialsnickeri med fokus på hållbarhet, finish och tidshållning.",
    bullets: ["Renovering & montering", "Köks- och platsbygge", "Service & underhåll"],
  },
  {
    icon: Ship,
    title: "Sjöfart – Kaptenstjänster",
    desc:
      "Erfaren skeppare till charter, transporter och besiktningar. Säkerhet i första hand.",
    bullets: ["Charter & transporter", "Besiktning & rådgivning", "CE/hamnlogistik"],
  },
  {
    icon: Briefcase,
    title: "Konsultuppdrag",
    desc:
      "Teknisk projektledning, upphandling och rådgivning inom bygg, energi och marin verksamhet.",
    bullets: ["Projektledning", "Upphandling & kalkyl", "Teknisk rådgivning"],
  },
];

function Services() {
  return (
    <section id="tjanster" className="bg-[#0d203d] text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tjänster</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Vårt erbjudande spänner över luft, land och hav. Skräddarsytt för dina behov – alltid med kvalitet och tydlig kommunikation.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-[#0b1b33]/50 p-6 hover:border-blue-400/40 transition">
              <div className="h-12 w-12 rounded-md bg-blue-600/20 text-blue-300 flex items-center justify-center">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300/80 list-disc list-inside">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
