import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import References from './components/References';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1b33]">
      {/* Background accents */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.08),transparent_40%)] pointer-events-none" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <References />
        <Contact />
        <footer className="bg-[#0b1b33] border-t border-white/10 text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} ArrowVision AB. Alla rättigheter förbehållna.</p>
            <div className="text-sm text-slate-400">Org.nr: 559000-0000 • info@arrowvision.se</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
