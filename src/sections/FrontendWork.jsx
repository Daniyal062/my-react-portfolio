import styles from './FrontendWork.module.css'

const projects = [
  {
    id: 'dash',
    type: 'React · Data Visualization',
    name: 'Databoard',
    desc: 'Analytics dashboard with custom SVG charts, live data mode, dark/light theme, CSV export — zero chart libraries.',
    techs: [{ label: 'React', cls: 'r' }, { label: 'ES6+', cls: 'j' }, { label: 'SVG Charts', cls: 'g' }, { label: 'useEffect', cls: '' }],
    demo: 'databoard/index.html',
    github: 'https://github.com/daniyalmaqsood/databoard',
    preview: 'databoard',
  },
  {
    id: 'chat',
    type: 'React · Real-time App',
    name: 'SyncRoom',
    desc: 'Multi-room chat with emoji reactions, pinned messages, typing indicators and simulated real-time bot replies.',
    techs: [{ label: 'React', cls: 'r' }, { label: 'useReducer', cls: 'j' }, { label: 'Hooks', cls: 'g' }, { label: 'State Mgmt', cls: '' }],
    demo: 'syncroom/index.html',
    github: 'https://github.com/daniyalmaqsood/syncroom',
    preview: 'syncroom',
  },
  {
    id: 'travel',
    type: 'Vanilla JS · Zero Dependencies',
    name: 'Wayfarer',
    desc: 'Travel discovery app in pure Vanilla JS. Debounced search, multi-filter, price range, wishlist with localStorage.',
    techs: [{ label: 'Vanilla JS', cls: 'j' }, { label: 'localStorage', cls: 'g' }, { label: 'CSS Animations', cls: '' }],
    demo: 'wayfarer/index.html',
    github: 'https://github.com/daniyalmaqsood/wayfarer',
    preview: 'wayfarer',
  },
]

function DataboardPreview() {
  return (
    <div className={`${styles.prev} ${styles.prevDash}`}>
      <div className={styles.pvdRow}>
        <span className={styles.pvdTitle}>Databoard</span>
        <span className={styles.pvdLive}>Live</span>
      </div>
      <div className={styles.pvdKpis}>
        {[['$94k','Revenue','↑ 14%'],['12.4k','Users','↑ 8%'],['3.8%','Conv.','↑ 0.4%']].map(([v,l,d]) => (
          <div key={l} className={styles.pvdKpi}>
            <div className={styles.pvdKv}>{v}</div>
            <div className={styles.pvdKl}>{l}</div>
            <div className={styles.pvdKd}>{d}</div>
          </div>
        ))}
      </div>
      <div className={styles.pvdChart}>
        {[42,64,78,54,95,68,58,83].map((h,i) => (
          <div key={i} className={`${styles.pvdCol} ${i===4||i===7 ? styles.pvdColB : i===2 ? styles.pvdColB2 : ''}`} style={{height:`${h}%`}} />
        ))}
      </div>
    </div>
  )
}

function SyncRoomPreview() {
  return (
    <div className={`${styles.prev} ${styles.prevChat}`} style={{flexDirection:'column'}}>
      <div className={styles.pvcHdr}>
        <div className={styles.pvcAva} />
        <span className={styles.pvcName}># design · 3 online</span>
        <div className={styles.pvcDot} />
      </div>
      <div style={{display:'flex',flex:1,overflow:'hidden'}}>
        <div className={styles.pvcRooms}>
          {['# general','# design','# fullstack','# random'].map((r,i) => (
            <div key={r} className={`${styles.pvcRoom} ${i===0 ? styles.pvcRoomAct : ''}`}>{r}</div>
          ))}
        </div>
        <div className={styles.pvcMsgs}>
          <div className={`${styles.pvcMsg} ${styles.pvcMsgT}`}>Can you check the mockups?</div>
          <div className={`${styles.pvcMsg} ${styles.pvcMsgM}`}>On it! 🔥</div>
          <div className={`${styles.pvcMsg} ${styles.pvcMsgT}`}>Dashboard looks great.</div>
          <div className={`${styles.pvcMsg} ${styles.pvcMsgM}`}>Updated spacing too ✓</div>
        </div>
      </div>
      <div className={styles.pvcInp}><div className={styles.pvcInpBar} /></div>
    </div>
  )
}

function WayfarerPreview() {
  return (
    <div className={`${styles.prev} ${styles.prevTravel}`} style={{flexDirection:'column',justifyContent:'space-between'}}>
      <div>
        <div className={styles.pvtLbl}>Discover</div>
        <div className={styles.pvtTitle}>Explore<br />The World</div>
        <div className={styles.pvtSub}>9 curated destinations</div>
      </div>
      <div className={styles.pvtCards}>
        {[['Tokyo','Japan · Asia','$740'],['Lisbon','Portugal · EU','$620']].map(([city,country,price]) => (
          <div key={city} className={styles.pvtCard}>
            <div className={styles.pvtCity}>{city}</div>
            <div className={styles.pvtCountry}>{country}</div>
            <div className={styles.pvtPrice}>{price}</div>
            <div className={styles.pvtPriceLbl}>from/person</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const previews = { databoard: DataboardPreview, syncroom: SyncRoomPreview, wayfarer: WayfarerPreview }

export default function FrontendWork() {
  return (
    <section id="fullstack" className={styles.section}>
      <div className={`${styles.secHdr} reveal`}>
        <div className={styles.secLbl}>Full Stack Development</div>
        <div className={styles.secCount}>03 Projects</div>
      </div>
      <h2 className={`${styles.title} reveal d1`}>
        Built &amp; shipped<br /><em className={styles.titleEm}>in code.</em>
      </h2>

      <div className={styles.grid}>
        {projects.map((p, i) => {
          const Preview = previews[p.preview]
          return (
            <div key={p.id} className={`${styles.card} ${styles[p.id]} reveal${i > 0 ? ` d${i}` : ''}`}>
              <Preview />
              <div className={styles.info}>
                <div className={styles.type}>{p.type}</div>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.desc}>{p.desc}</div>
                <div className={styles.techs}>
                  {p.techs.map(t => (
                    <span key={t.label} className={`${styles.tech} ${t.cls ? styles[`tech${t.cls.toUpperCase()}`] : ''}`}>{t.label}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a className={`${styles.lnk} ${styles.lnkP}`} href={p.demo} target="_blank" rel="noreferrer">Live Demo →</a>
                  <a className={`${styles.lnk} ${styles.lnkS}`} href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
