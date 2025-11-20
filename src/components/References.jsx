function References() {
  const refs = [
    {
      title: "Takinspektion med drönare",
      text: "Kartläggning och dokumentation av större takyta med termografi och foto.",
    },
    {
      title: "Kontorsrenovering",
      text: "Rivning, uppbyggnad och finfinish av kundmottagning och mötesrum.",
    },
    {
      title: "Charter & transport",
      text: "Kaptenstjänst för kustnära transporter och besiktning inför säsong.",
    },
  ];

  return (
    <section id="referenser" className="bg-[#0d203d] text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Referenser</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {refs.map((r) => (
            <div key={r.title} className="rounded-xl border border-white/10 bg-[#0b1b33] p-6">
              <h3 className="text-xl font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;
