import { useEffect } from 'react'
import Cursor       from './components/Cursor'
import Nav          from './components/Nav'
import Hero         from './sections/Hero'
import Ticker       from './sections/Ticker'
import UIUXWork     from './sections/UIUXWork'
import FrontendWork from './sections/FrontendWork'
import About        from './sections/About'
import Contact      from './sections/Contact'

export default function App() {
  // Scroll reveal — content visible by default, JS adds animation class
  useEffect(() => {
    const attach = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (!el.classList.contains('animate')) el.classList.add('animate')
      })
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        }),
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
      return obs
    }
    const obs = attach()
    const mo = new MutationObserver(() => attach())
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { obs.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <UIUXWork />
      <About />
      <FrontendWork />
      <Contact />
    </>
  )
}
