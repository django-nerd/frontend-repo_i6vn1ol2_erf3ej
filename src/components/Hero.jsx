import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="hem" className="relative min-h-[90vh] flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b33]/80 via-[#0b1b33]/70 to-[#0b1b33] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Precision, hantverk och sjöfart – samlat i ett uppdrag
          </h1>
          <p className="mt-6 text-lg text-slate-200/90 leading-relaxed">
            ArrowVision AB levererar drönartjänster, entreprenad & snickeri, kaptenstjänster och konsultuppdrag med fokus på säkerhet, kvalitet och effektivitet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition">Boka uppdrag</a>
            <a href="#kontakt" className="inline-flex items-center px-6 py-3 rounded-md border border-white/30 text-slate-100 hover:border-white/60 transition">Begär offert</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
