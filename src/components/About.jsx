function About() {
  return (
    <section id="om-oss" className="bg-[#0b1b33] text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Om ArrowVision AB</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Vi kombinerar teknisk skärpa med hantverkskänsla. Med bakgrund inom bygg, sjöfart och teknik levererar vi uppdrag där noggrannhet, säkerhet och service är centralt.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Vårt arbetssätt är minimalistiskt och effektivt – tydliga processer, transparent kommunikation och resultat som håller.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0d203d] p-6">
          <dl className="grid grid-cols-2 gap-6">
            <div>
              <dt className="text-slate-400 text-sm">Grundat</dt>
              <dd className="text-white text-lg font-semibold">2024</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-sm">Säkerhetsfokus</dt>
              <dd className="text-white text-lg font-semibold">100%</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-sm">Områden</dt>
              <dd className="text-white text-lg font-semibold">Luft • Land • Hav</dd>
            </div>
            <div>
              <dt className="text-slate-400 text-sm">Bas</dt>
              <dd className="text-white text-lg font-semibold">Sverige</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
