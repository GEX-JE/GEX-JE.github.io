export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-bg2">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-accent3 text-xs font-bold tracking-[3px] uppercase mb-4 reveal">Projeler</div>
        <h2 className="text-4xl md:text-5xl font-black mb-16 reveal">Neler Yaptım?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Proje 1 */}
          <div className="bg-bg3 border border-white/5 p-10 rounded-iphone relative group hover:border-accent2 transition-all hover:-translate-y-2 reveal">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-black text-white/5 mb-6">01</div>
            <h3 className="text-2xl font-bold mb-4">Ven Grand Hotel</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              Tam entegre otel rezervasyon platformu. Gerçek zamanlı oda müsaitliği, mevsimsel fiyatlandırma, AI destekli chatbot ve çok dilli destek içeren kapsamlı bir sistem.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['WordPress', 'VikBooking', 'MySQL', 'Tidio AI', 'PHP'].map(t => (
                <span key={t} className="bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-[10px] font-bold text-accent3">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://ven-grand-hotel.page.gd/" target="_blank" className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-sm font-bold transition-colors">Demo</a>
              <a href="https://github.com/GEX-JE/ven-grand-hotel-websitesi-projesi" target="_blank" className="border border-white/10 hover:border-white/30 px-6 py-2 rounded-full text-sm font-bold text-text-muted transition-colors">GitHub</a>
            </div>
          </div>

          {/* Proje 2 */}
          <div className="bg-bg3 border border-white/5 p-10 rounded-iphone relative group hover:border-accent2 transition-all hover:-translate-y-2 reveal">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-black text-white/5 mb-6">02</div>
            <h3 className="text-2xl font-bold mb-4">VikBooking Türkçe Çeviri</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">
              WordPress VikBooking eklentisi için AI destekli Türkçe çeviri dosyası. Tüm online rezervasyon formları ve admin panelinin yerelleştirilmesi işlemi.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['WordPress', 'PO/MO', 'GNU Gettext', 'AI'].map(t => (
                <span key={t} className="bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-[10px] font-bold text-accent3">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/GEX-JE/vikbooking-turkce-ceviri-po-dosyasi" target="_blank" className="border border-white/10 hover:border-white/30 px-6 py-2 rounded-full text-sm font-bold text-text-muted transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
