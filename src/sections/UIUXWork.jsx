import { useEffect, useRef } from 'react'
import styles from './UIUXWork.module.css'

/* ── Phone mockup components ───────────────────────────────── */
function FinFlowPhone({ scrollRef }) {
  return (
    <div className={styles.ph}>
      <div className={styles.phNotch} />
      <div className={styles.phLbl}>Total Balance</div>
      <div className={styles.phBal}>$24,680</div>
      <div className={styles.phChg}>↑ +12.4% this month</div>
      <div className={styles.phScreen}>
        <div className={styles.phScreenInner} ref={scrollRef}>
          <div>
            <div className={styles.phBars}>
              {[38,56,80,60,95,72,48].map((h,i) => (
                <div key={i} className={`${styles.phB} ${i===2||i===4 ? styles.lit : ''}`} style={{height:`${h}%`}} />
              ))}
            </div>
            <div className={styles.phDiv} />
            <div className={styles.phRow}><span>Netflix</span><span className={styles.phNeg}>−$15.99</span></div>
            <div className={styles.phRow}><span>Salary</span><span className={styles.phPos}>+$3,200</span></div>
            <div className={styles.phRow}><span>Groceries</span><span className={styles.phNeg}>−$84.30</span></div>
          </div>
          <div className={styles.phScreen2}>
            <div className={styles.phCard}>
              <div className={styles.phCardRow}><span>Monthly Spend</span></div>
              <div className={styles.phCardVal}>$1,842</div>
              <div className={styles.phCardSub}>↓ 8% vs last month</div>
            </div>
            <div className={styles.phCard}>
              <div className={styles.phCardRow}><span>Savings Rate</span></div>
              <div className={styles.phCardVal}>34%</div>
              <div className={styles.phCardSub}>↑ On track</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VitalPhone({ scrollRef }) {
  return (
    <div className={styles.vph}>
      <div className={styles.vphNotch} />
      <div className={styles.vphGreet}>Good morning 👋</div>
      <div className={styles.vphRingWrap}>
        <div className={styles.vphRing} />
        <div className={styles.vphScore}>87</div>
      </div>
      <div className={styles.vphMood}>Excellent today 🎯</div>
      <div className={styles.vphScreen}>
        <div className={styles.vphScreenInner} ref={scrollRef}>
          <div className={styles.vphGrid}>
            {[['8.2k','STEPS'],['7.5h','SLEEP'],['2.1L','WATER'],['🔥 6','STREAK']].map(([v,k]) => (
              <div key={k} className={styles.vphCell}>
                <div className={styles.vphCv}>{v}</div>
                <div className={styles.vphCk}>{k}</div>
              </div>
            ))}
          </div>
          <div className={styles.vphScreen2}>
            {[['Morning run','✓ 32 min'],['Meditation','✓ 10 min'],['Hydration','84%'],['Calories','1,840 kcal']].map(([l,r]) => (
              <div key={l} className={styles.vphRow}><span>{l}</span><span>{r}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ShopPhone({ scrollRef }) {
  return (
    <div className={styles.eph}>
      <div className={styles.ephImg}>👟</div>
      <div className={styles.ephBody}>
        <div className={styles.ephScreen}>
          <div className={styles.ephScreenInner} ref={scrollRef}>
            <div>
              <div className={styles.ephName}>Air Runner Pro</div>
              <div className={styles.ephSub}><span>Limited Edition</span><span>Sizes 7–12</span></div>
              <div className={styles.ephPr}>
                <div className={styles.ephPrice}>$129</div>
                <div className={styles.ephBadge}>3 LEFT</div>
              </div>
              <div className={styles.ephStars}>★★★★★ 4.8 (238)</div>
              <button className={styles.ephBtn}>Add to Cart</button>
            </div>
            <div className={styles.ephScreen2}>
              {[['★★★★★','"Perfect fit, fast shipping"','J.K.'],['★★★★★','"Best runners I\'ve owned"','M.R.'],['★★★★☆','"Great quality overall"','A.L.']].map(([s,t,a]) => (
                <div key={a} className={styles.ephRatingRow}>
                  <span className={styles.ephStarCol}>{s}</span>
                  <span>{t}</span>
                  <span className={styles.ephAuth}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Scroll animation hook ─────────────────────────────────── */
function usePhoneScroll(height, delay) {
  const innerRef = useRef(null)
  const cardRef  = useRef(null)
  useEffect(() => {
    const inner = innerRef.current
    const card  = cardRef.current
    if (!inner || !card) return
    let timer
    let scrolled = false
    const start = () => {
      const tick = () => {
        scrolled = !scrolled
        inner.style.transform = scrolled ? `translateY(-${height}px)` : 'translateY(0)'
        timer = setTimeout(tick, scrolled ? 2800 : 3500)
      }
      timer = setTimeout(tick, delay)
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { start(); obs.unobserve(card) }
    }, { threshold: 0.5 })
    obs.observe(card)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [height, delay])
  return { innerRef, cardRef }
}

/* ── Main component ────────────────────────────────────────── */
export default function UIUXWork() {
  const fin  = usePhoneScroll(130, 2000)
  const vit  = usePhoneScroll(90,  2500)
  const shop = usePhoneScroll(100, 1800)

  return (
    <section id="uiux" className={styles.section}>
      <div className={`${styles.secHdr} reveal`}>
        <div className={styles.secLbl}>UI / UX Case Studies</div>
        <div className={styles.secCount}>03 Projects</div>
      </div>
      <h2 className={`${styles.title} reveal d1`}>
        Selected work<br /><em className={styles.titleEm}>in design.</em>
      </h2>

      <div className={styles.bento}>

        {/* FINFLOW */}
        <div className={`${styles.bc} ${styles.bcFin} reveal`} ref={fin.cardRef}>
          <div className={styles.bv}>
            <FinFlowPhone scrollRef={fin.innerRef} />
          </div>
          <div className={styles.bi}>
            <div>
              <div className={styles.biIdx}>Case Study · 01</div>
              <div className={styles.biTitle}>FinFlow<br />Banking App</div>
              <div className={styles.biSub}>Fintech · Mobile · Research-led</div>
              <div className={styles.biTags}>
                {['Figma','Mobile','User Research','Fintech'].map(t => <span key={t} className={styles.biTag}>{t}</span>)}
              </div>
              <div className={styles.biDesc}>Redesigned a legacy banking app suffering from 68% session abandonment. Led 24 user interviews, identified 2 distinct mental models, and rebuilt hierarchy around one dominant action per screen.</div>
            </div>
            <div>
              <div className={styles.biMetrics}>
                {[['34%','Task Speed'],['91%','Completion'],['8.4/10','Satisfaction']].map(([v,l]) => (
                  <div key={l}><div className={styles.bmVal}>{v}</div><div className={styles.bmLbl}>{l}</div></div>
                ))}
              </div>
              <a className={styles.biCta} href="case-finflow.html" target="_blank">View Case Study →</a>
            </div>
          </div>
        </div>

        {/* VITALPULSE */}
        <div className={`${styles.bc} ${styles.bcVit} reveal d1`} ref={vit.cardRef}>
          <div className={`${styles.bv} ${styles.bvVit}`}>
            <VitalPhone scrollRef={vit.innerRef} />
          </div>
          <div className={`${styles.bi} ${styles.biVit}`}>
            <div className={styles.biIdx} style={{color:'#9b7fd4'}}>Case Study · 02</div>
            <div className={styles.biTitle} style={{color:'#2d2040'}}>VitalPulse<br />Health Tracker</div>
            <div className={styles.biSub} style={{color:'#9b7fd4'}}>Wellness · iOS · Emotion-led</div>
            <div className={styles.biTags}>
              {['Research','Mobile','Health'].map(t => <span key={t} className={`${styles.biTag} ${styles.biTagVit}`}>{t}</span>)}
            </div>
            <div className={styles.biDesc} style={{color:'#4a3d6b'}}>Fitness apps overwhelming users with data that created anxiety, not motivation. 2-week diary study revealed users respond emotionally before rationally — redesigned around that insight.</div>
            <div className={`${styles.biMetrics} ${styles.biMetricsVit}`}>
              {[['4×','Week-3 Retention'],['9.1/10','Satisfaction']].map(([v,l]) => (
                <div key={l}><div className={`${styles.bmVal} ${styles.bmValVit}`}>{v}</div><div className={`${styles.bmLbl} ${styles.bmLblVit}`}>{l}</div></div>
              ))}
            </div>
            <a className={`${styles.biCta} ${styles.biCtaVit}`} href="case-vitalpulse.html" target="_blank">View Case Study →</a>
          </div>
        </div>

        {/* SHOPRIFT */}
        <div className={`${styles.bc} ${styles.bcShop} reveal d2`} ref={shop.cardRef}>
          <div className={`${styles.bv} ${styles.bvShop}`}>
            <ShopPhone scrollRef={shop.innerRef} />
          </div>
          <div className={`${styles.bi} ${styles.biShop}`}>
            <div>
              <div className={styles.biIdx} style={{color:'rgba(255,255,255,.25)'}}>Case Study · 03</div>
              <div className={styles.biTitle} style={{color:'#fff'}}>ShopRift E-Commerce</div>
              <div className={styles.biSub} style={{color:'rgba(255,255,255,.35)'}}>Conversion · Web · Data-driven</div>
              <div className={styles.biTags}>
                {['Web App','E-commerce','CRO','Mobile'].map(t => <span key={t} className={`${styles.biTag} ${styles.biTagShop}`}>{t}</span>)}
              </div>
              <div className={styles.biDesc} style={{color:'rgba(255,255,255,.5)'}}>40k monthly visitors, only 2.1% conversion. Heatmap analysis revealed 3 hidden drop-off barriers. Repositioning social proof and simplifying mobile checkout lifted revenue by $28k/month.</div>
            </div>
            <div className={styles.shopBottom}>
              <div className={`${styles.biMetrics} ${styles.biMetricsShop}`}>
                {[['+81%','Conversion'],['$28k','Monthly Rev'],['-67%','Drop-off']].map(([v,l]) => (
                  <div key={l}><div className={styles.bmVal}>{v}</div><div className={`${styles.bmLbl} ${styles.bmLblShop}`}>{l}</div></div>
                ))}
              </div>
              <a className={`${styles.biCta} ${styles.biCtaShop}`} href="case-shoprift.html" target="_blank">View Case Study →</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
