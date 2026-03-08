import styles from './Ticker.module.css'

const SKILLS = [
  'Figma','React','User Research','HTML & CSS','JavaScript',
  'Prototyping','Design Systems','React Native','Interaction Design','REST APIs',
  'Node.js','Express','MongoDB','MERN Stack','Full Stack Development',
]

export default function Ticker() {
  const items = [...SKILLS, ...SKILLS] // duplicate for seamless loop
  return (
    <div className={styles.ticker}>
      <div className={styles.label}>Skills</div>
      <div className={styles.track}>
        {items.map((s, i) => (
          <span key={i} className={styles.item}>{s}</span>
        ))}
      </div>
    </div>
  )
}
