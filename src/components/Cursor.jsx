import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    let frame
    const loop = () => {
      const { mx, my } = pos.current
      let { rx, ry } = pos.current
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      pos.current.rx = rx
      pos.current.ry = ry
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    const onOver = (e) => {
      if (e.target.closest('a, button')) {
        dotRef.current.style.background = 'var(--accent)'
        ringRef.current.style.width  = '44px'
        ringRef.current.style.height = '44px'
        ringRef.current.style.opacity = '.12'
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button')) {
        dotRef.current.style.background = 'var(--ink)'
        ringRef.current.style.width  = '28px'
        ringRef.current.style.height = '28px'
        ringRef.current.style.opacity = '.2'
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div id="c-dot"  ref={dotRef}  />
      <div id="c-ring" ref={ringRef} />
    </>
  )
}
