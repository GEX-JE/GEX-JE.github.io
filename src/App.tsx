import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="aleksa-bg"></div>
      <div
        className="glow-cursor"
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      {loading && <Preloader onDone={() => setLoading(false)} />}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="text-center py-10 bg-bg2 border-t border-white/5 text-text-muted text-sm">
          <p>© 2026 İbrahim Emir Akman. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </>
  )
}

export default App
