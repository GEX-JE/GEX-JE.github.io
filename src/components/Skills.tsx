export default function Skills() {
  const groups = [
    { title: 'Diller', items: ['C#', 'C++', 'Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'Rust', 'Swift', 'HTML5'] },
    { title: 'Framework & Platform', items: ['.NET', 'Next.js', 'Node.js', 'WordPress'] },
    { title: 'Cloud & Altyapı', items: ['Google Cloud', 'Cloudflare', 'GitHub Actions'] },
    { title: 'Veritabanı', items: ['Oracle', 'MS SQL Server', 'MySQL'] },
    { title: 'Araçlar & Tasarım', items: ['Git', 'Figma', 'Photoshop'] },
    { title: 'Donanım & Oyun', items: ['Raspberry Pi', 'Arduino', 'Unity', 'Unreal Engine'] },
  ]

  return (
    <section id="skills" className="py-32 bg-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-accent3 text-xs font-bold tracking-[3px] uppercase mb-4 reveal">Yetenekler</div>
        <h2 className="text-4xl md:text-5xl font-black mb-16 reveal">Tech Stack</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="bg-bg3 border border-white/5 p-8 rounded-iphone-sm hover:-translate-y-1 hover:border-accent2 transition-all reveal">
              <h3 className="text-accent3 text-sm font-bold uppercase tracking-wider mb-6">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full text-xs font-medium text-text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
