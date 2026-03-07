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
  // Scroll reveal — global observer for .reveal elements
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    const attach = () => document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    attach()
    // Reattach on any DOM mutation (sections render async)
    const mo = new MutationObserver(attach)
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
