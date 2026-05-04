export default function Contact() {
  const links = [
    { name: 'E-posta', val: 'iemirakman@icloud.com', href: 'mailto:iemirakman@icloud.com' },
    { name: 'GitHub', val: '@GEX-JE', href: 'https://github.com/GEX-JE' },
    { name: 'LinkedIn', val: 'i-emir-akman', href: 'https://www.linkedin.com/in/i-emir-akman/' },
    { name: 'Instagram', val: '@iemirakman', href: 'https://www.instagram.com/iemirakman' },
    { name: 'Twitch', val: 'GEXJE', href: 'https://www.twitch.tv/GEXJE' },
    { name: 'YouTube', val: '@GEXJE', href: 'https://www.youtube.com/@GEXJE' },
  ]

  return (
    <section id="contact" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-accent3 text-xs font-bold tracking-[3px] uppercase mb-4 reveal">İletişim</div>
        <h2 className="text-4xl md:text-5xl font-black mb-16 reveal">Bana Ulaş</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((v, i) => (
            <a key={i} href={v.href} target="_blank" className="flex items-center gap-4 bg-bg3 border border-white/5 p-6 rounded-iphone-sm hover:border-accent2 hover:-translate-y-1 transition-all reveal">
              <div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">{v.name}</div>
                <div className="text-sm font-medium">{v.val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
