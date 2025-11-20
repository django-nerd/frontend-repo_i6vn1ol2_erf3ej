import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // Mock submit for now
    setStatus('Tack! Vi återkommer inom kort.');
    e.currentTarget.reset();
  }

  return (
    <section id="kontakt" className="bg-[#0b1b33] text-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Kontakt</h2>
          <p className="mt-3 text-slate-300">Hör av dig för bokning, offert eller frågor.</p>

          <div className="mt-6 space-y-4 text-slate-300">
            <div className="flex items-center gap-3"><Phone size={18} className="text-blue-300"/> <a href="tel:+46123456789" className="hover:text-white">+46 12 345 67 89</a></div>
            <div className="flex items-center gap-3"><Mail size={18} className="text-blue-300"/> <a href="mailto:info@arrowvision.se" className="hover:text-white">info@arrowvision.se</a></div>
            <div className="flex items-center gap-3"><MapPin size={18} className="text-blue-300"/> Sverige</div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0d203d] p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Namn</label>
              <input name="name" required className="w-full rounded-md bg-[#0b1b33] border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Ditt namn"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">E-post</label>
                <input type="email" name="email" required className="w-full rounded-md bg-[#0b1b33] border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="namn@exempel.se"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Telefon</label>
                <input name="phone" className="w-full rounded-md bg-[#0b1b33] border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="+46 ..."/>
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Ämne</label>
              <select name="subject" className="w-full rounded-md bg-[#0b1b33] border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Drönartjänster</option>
                <option>Entreprenad & Snickeri</option>
                <option>Kaptenstjänster</option>
                <option>Konsultuppdrag</option>
                <option>Övrigt</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Meddelande</label>
              <textarea name="message" rows="5" required className="w-full rounded-md bg-[#0b1b33] border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Beskriv ditt uppdrag"/>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition">Boka uppdrag</button>
              <button type="submit" className="inline-flex items-center px-5 py-2.5 rounded-md border border-white/20 text-slate-100 hover:border-white/40 transition">Begär offert</button>
            </div>
            {status && <p className="text-green-300 text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
