import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const designSkills = [
  ['Figma / Prototyping', '88%'],
  ['User Research', '72%'],
  ['Design Systems', '78%'],
  ['Interaction Design', '82%'],
  ['Visual Design', '85%'],
]
const devSkills = [
  ['HTML / CSS', '92%'],
  ['JavaScript', '80%'],
  ['React', '76%'],
  ['React Native', '70%'],
  ['REST APIs', '74%'],
  ['Node.js', '78%'],
  ['Express', '72%'],
  ['MongoDB', '68%'],
]

function SkillGroup({ label, skills }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('[data-w]').forEach(b => { b.style.width = b.dataset.w })
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className={styles.skLbl}>{label}</div>
      {skills.map(([name, w]) => (
        <div key={name} className={styles.skRow}>
          <span className={styles.skName}>{name}</span>
          <div className={styles.skBarW}>
            <div className={styles.skBar} style={{ width: 0 }} data-w={w} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="reveal">
        <h2 className={styles.name}>Daniyal<em className={styles.nameEm}>Maqsood.</em></h2>
        <p className={styles.bio}>
          Freelance designer and full stack developer based in Pakistan. I work at the intersection
          of research and engineering — prototyping in Figma by day, building MERN stack
          products by night. Research-first, aesthetics-always.
        </p>
        <div className={styles.links}>
          <a className={styles.link} href="mailto:daniyalmaqsood025@gmail.com.com">Email ↗</a>
          <a className={styles.link} href="https://linkedin.com/in/daniyalmaqsood" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className={styles.link} href="https://github.com/Daniyal062" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <div className="reveal d1"><SkillGroup label="Design" skills={designSkills} /></div>
      <div className="reveal d2"><SkillGroup label="Development" skills={devSkills} /></div>
    </section>
  )
}
