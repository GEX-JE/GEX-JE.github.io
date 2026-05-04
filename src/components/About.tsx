export default function About() {
  return (
    <section id="about" className="py-32 bg-bg2 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-accent3 text-xs font-bold tracking-[3px] uppercase mb-4 reveal">Hakkımda</div>
        <h2 className="text-4xl md:text-5xl font-black mb-16 reveal">Ben Kimim?</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-text-muted leading-relaxed reveal">
            <p>
              Merhaba! Ben <strong className="text-white">İbrahim Emir Akman</strong>. Burdur Mehmet Akif Ersoy Üniversitesi'nde Bilişim Sistemleri ve Teknolojileri lisans eğitimi alıyorum.
            </p>
            <p>
              Web geliştirme, yazılım mühendisliği ve dijital çözümler üzerine projeler üretiyorum. Hem backend hem frontend tarafında çalışıyor; aynı zamanda oyun geliştirme ve donanım projeleriyle ilgileniyorum.
            </p>
            <p>
              GitHub Pro rozetiyle aktif olarak open-source projelere katkı sağlıyor ve öğrenmeye devam ediyorum.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { label: 'Repo', val: '6' },
              { label: 'Dil & Env', val: '10+' },
              { label: 'Rozet', val: 'Pro' },
              { label: 'Alan', val: 'Full Stack' },
            ].map(s => (
              <div key={s.label} className="bg-bg3 border border-white/5 p-6 rounded-iphone-sm hover:-translate-y-1 hover:border-accent2 transition-all">
                <div className="text-4xl font-black grad-text mb-2">{s.val}</div>
                <div className="text-xs text-text-muted font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
