import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.tag}>
          UI/UX Designer &amp; Full Stack Developer &nbsp;·&nbsp;{' '}
          <span className={styles.tagAccent}>Pakistan</span>
        </div>
        <h1 className={styles.name}>
          Designing<br />
          <span className={styles.italic}>experiences,</span><br />
          building products.
        </h1>
      </div>

      <div className={styles.bottom}>
        <p className={styles.desc}>
          I'm <strong>Daniyal Maqsood</strong> — a designer who codes and a developer who
          obsesses over every pixel. I work across the full product stack: from early
          research and Figma prototypes to shipped React + Node.js products.
        </p>
        <div className={styles.meta}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statN}>1+</div>
              <div className={styles.statL}>Year</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statN}>6</div>
              <div className={styles.statL}>Projects</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statN}>3</div>
              <div className={styles.statL}>Disciplines</div>
            </div>
          </div>
          <div className={styles.ctas}>
            <a className={styles.btnDark} href="#uiux">View Work →</a>
            <a className={styles.btnGhost} href="#contact">Get in Touch</a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
