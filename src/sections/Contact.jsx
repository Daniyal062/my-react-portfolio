import styles from './Contact.module.css'

const links = [
  { name: 'Email',    meta: 'daniyal@example.com',        href: 'mailto:daniyal@example.com' },
  { name: 'LinkedIn', meta: 'Connect professionally',      href: 'https://linkedin.com/in/daniyalmaqsood' },
  { name: 'GitHub',   meta: 'See the code',                href: 'https://github.com/daniyalmaqsood' },
  { name: 'Dribbble', meta: 'Design work',                 href: 'https://dribbble.com/daniyalmaqsood' },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.inner}>
          <div className="reveal">
            <h2 className={styles.hl}>Let's build<br /><em className={styles.hlEm}>together.</em></h2>
            <p className={styles.sub}>Open to freelance projects in UI/UX design and full stack development. I keep my client list small so every project gets real attention.</p>
          </div>
          <div className={`${styles.list} reveal d1`}>
            {links.map(l => (
              <a key={l.name} className={styles.cl} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                <div>
                  <div className={styles.clName}>{l.name}</div>
                  <div className={styles.clMeta}>{l.meta}</div>
                </div>
                <span className={styles.clArr}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>© 2025 Daniyal Maqsood</span>
        <span>UI/UX · Frontend · Freelance · Pakistan</span>
      </footer>
    </>
  )
}
