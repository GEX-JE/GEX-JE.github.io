import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const bar1Ref = useRef<HTMLDivElement>(null)
  const bar2Ref = useRef<HTMLDivElement>(null)
  const barWrapRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const c1Ref = useRef<HTMLDivElement>(null)
  const c2Ref = useRef<HTMLDivElement>(null)
  const c3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const c3 = c3Ref.current!
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const d = document.createElement('div')
        d.className = 'num'
        d.textContent = String(j)
        c3.appendChild(d)
      }
    }
    const last = document.createElement('div')
    last.className = 'num'
    last.textContent = '0'
    c3.appendChild(last)

    function animCounter(el: HTMLDivElement, dur: number, delay = 0) {
      const h = el.querySelector<HTMLDivElement>('.num')!.clientHeight
      const dist = (el.querySelectorAll('.num').length - 1) * h
      gsap.to(el, { y: -dist, duration: dur, delay, ease: 'power2.inOut' })
    }

    animCounter(c3, 5)
    animCounter(c2Ref.current!, 6)
    animCounter(c1Ref.current!, 2, 4)

    gsap.to(nameRef.current, { opacity: 1, duration: 1, delay: 1 })

    gsap.from(bar1Ref.current, { width: 0, duration: 6, ease: 'power2.inOut' })
    gsap.from(bar2Ref.current, { width: 0, delay: 1.9, duration: 2, ease: 'power2.inOut' })

    gsap.to([c1Ref.current, c2Ref.current, c3Ref.current], {
      top: '-150px',
      stagger: { amount: 0.25 },
      delay: 6,
      duration: 1,
      ease: 'power4.inOut',
    })

    gsap.to(barWrapRef.current, { background: 'none', delay: 6, duration: 0.1 })
    gsap.to(bar1Ref.current, { rotate: 90, y: -50, duration: 0.5, delay: 6 })
    gsap.to(bar2Ref.current, { x: -75, y: 75, duration: 0.5, delay: 6 })
    gsap.to(barWrapRef.current, { scale: 40, duration: 1, delay: 7, ease: 'power2.inOut' })
    gsap.to(barWrapRef.current, { rotate: 45, y: 500, x: 2000, duration: 1, delay: 7, ease: 'power2.inOut' })
    gsap.to(loaderRef.current, {
      opacity: 0, duration: 0.5, delay: 7.5, ease: 'power1.inOut',
      onComplete: onDone,
    })
  }, [onDone])

  return (
    <div className="loading-screen" ref={loaderRef}>
      <div className="loader-bar" ref={barWrapRef}>
        <div className="bar-1" ref={bar1Ref} />
        <div className="bar-2" ref={bar2Ref} />
      </div>
      <div className="counter">
        <div className="counter-1" ref={c1Ref}>
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2" ref={c2Ref}>
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3" ref={c3Ref}>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
      <div className="loader-name" ref={nameRef}>İbrahim Emir Akman</div>
    </div>
  )
}
