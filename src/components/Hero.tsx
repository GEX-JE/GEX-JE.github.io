import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Particles
    const geo = new THREE.BufferGeometry()
    const count = 1500
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 15
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: '#555555', size: 0.03, transparent: true, opacity: 0.6 })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // Shapes
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2, 0.6, 16, 100),
      new THREE.MeshBasicMaterial({ color: '#888888', wireframe: true, transparent: true, opacity: 0.1 })
    )
    scene.add(torus)

    let mouseX = 0, mouseY = 0
    const handleMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.y += 0.001
      torus.rotation.x += 0.002
      torus.rotation.y += 0.001
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/15 border border-accent/20 text-accent3 text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8 reveal">
            Bilişim Sistemleri & Teknolojileri
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 reveal">
            İbrahim <br /> Emir <span className="grad-text">Akman</span>
          </h1>
          <p className="text-text-muted text-lg mb-10 reveal">
            Burdur Mehmet Akif Ersoy Üniversitesi öğrencisi • GitHub Pro
          </p>
          <div className="flex gap-4 reveal">
            <a href="#projects" className="bg-gradient-to-br from-accent to-accent2 px-8 py-4 rounded-iphone-xs font-bold shadow-lg shadow-accent/30 hover:-translate-y-1 transition-all">
              Projelerimi Gör
            </a>
            <a href="#contact" className="border border-white/10 px-8 py-4 rounded-iphone-xs font-bold hover:bg-white/5 transition-all">
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
