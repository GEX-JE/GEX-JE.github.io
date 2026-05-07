import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-bg/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-iphone flex justify-between items-center z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover border border-white/20" />
        <span className="font-black text-lg grad-text tracking-widest hidden sm:block">GEXJE</span>
      </div>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
        <li><a href="#hero" className="hover:text-accent3 transition-colors">Ana Sayfa</a></li>
        <li><a href="#about" className="hover:text-accent3 transition-colors">Hakkımda</a></li>
        <li><a href="#skills" className="hover:text-accent3 transition-colors">Yetenekler</a></li>
        <li><a href="#projects" className="hover:text-accent3 transition-colors">Projeler</a></li>
        <li><a href="#contact" className="hover:text-accent3 transition-colors">İletişim</a></li>
      </ul>
    </nav>
  )
}
