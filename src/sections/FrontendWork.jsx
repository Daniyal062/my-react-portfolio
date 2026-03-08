import styles from './FrontendWork.module.css'

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
          <div key={i} className={`${styles.pvdCol} ${i===4||i===7?styles.pvdColB:i===2?styles.pvdColB2:''}`} style={{height:`${h}%`}} />
        ))}
      </div>
    </div>
  )
}

function SyncRoomPreview() {
  return (
    <div className={`${styles.prev} ${styles.prevChat} ${styles.pvcWrap}`}>
      <div className={styles.pvcHdr}>
        <div className={styles.pvcAva} />
        <span className={styles.pvcName}># design · 3 online</span>
        <div className={styles.pvcDot} />
      </div>
      <div className={styles.pvcBody}>
        <div className={styles.pvcRooms}>
          {['# general','# design','# frontend','# random'].map((r,i) => (
            <div key={r} className={`${styles.pvcRoom} ${i===0?styles.pvcRoomAct:''}`}>{r}</div>
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
    <div className={`${styles.prev} ${styles.prevTravel} ${styles.pvtWrap}`}>
      <div>
        <div className={styles.pvtLbl}>Discover</div>
        <div className={styles.pvtTitle}>Explore<br/>The World</div>
        <div className={styles.pvtSub}>9 curated destinations</div>
      </div>
      <div className={styles.pvtCards}>
        {[['Tokyo','Japan · Asia','$740'],['Lisbon','Portugal · EU','$620']].map(([city,ctry,price]) => (
          <div key={city} className={styles.pvtCard}>
            <div className={styles.pvtCity}>{city}</div>
            <div className={styles.pvtCountry}>{ctry}</div>
            <div className={styles.pvtPrice}>{price}</div>
            <div className={styles.pvtPriceLbl}>from/person</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'dash', cls: 'dash',
    type: 'MERN Stack · Full Stack App', name: 'Databoard',
    desc: 'Full stack analytics dashboard — React frontend with custom SVG charts, Node.js/Express REST API backend, MongoDB for data persistence, live update mode, CSV export.',
    techs: [{l:'React',c:'r'},{l:'Node.js',c:'n'},{l:'MongoDB',c:'m'},{l:'Express',c:'j'},{l:'REST API',c:'g'}],
    demo: 'databoard/index.html', github: 'https://github.com/daniyalmaqsood/databoard',
  },
  {
    id: 'chat', cls: 'chat',
    type: 'MERN Stack · Real-time App', name: 'SyncRoom',
    desc: 'Full stack chat platform — React frontend, Node.js/Express backend with Socket.io-ready architecture, MongoDB message storage, JWT auth flow, multi-room with live presence.',
    techs: [{l:'React',c:'r'},{l:'Node.js',c:'n'},{l:'MongoDB',c:'m'},{l:'Express',c:'j'},{l:'JWT Auth',c:'g'}],
    demo: 'syncroom/index.html', github: 'https://github.com/daniyalmaqsood/syncroom',
  },
  {
    id: 'travel', cls: 'travel',
    type: 'Full Stack · Travel Platform', name: 'Wayfarer',
    desc: 'Full stack travel discovery platform — Express REST API serving destination data, React frontend with debounced search, filters, price range, and user wishlist persisted to MongoDB.',
    techs: [{l:'React',c:'r'},{l:'Node.js',c:'n'},{l:'MongoDB',c:'m'},{l:'Express',c:'j'},{l:'REST API',c:'g'}],
    demo: 'wayfarer/index.html', github: 'https://github.com/daniyalmaqsood/wayfarer',
  },
]

const PreviewMap = { dash: DataboardPreview, chat: SyncRoomPreview, travel: WayfarerPreview }

export default function FrontendWork() {
  return (
    <section id="frontend" className={styles.section}>
      <div className={`${styles.secHdr} reveal`}>
        <div className={styles.secLbl}>Full Stack Development</div>
        <div className={styles.secCount}>03 Projects</div>
      </div>
      <h2 className={`${styles.title} reveal d1`}>
        Built &amp; shipped<br /><em className={styles.titleEm}>full stack.</em>
      </h2>
      <div className={styles.grid}>
        {projects.map((p, i) => {
          const Preview = PreviewMap[p.id]
          return (
            <div key={p.id} className={`${styles.card} ${styles[p.cls]} reveal${i>0?` d${i}`:''}`}>
              <Preview />
              <div className={styles.info}>
                <div className={styles.type}>{p.type}</div>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.desc}>{p.desc}</div>
                <div className={styles.techs}>
                  {p.techs.map(t => (
                    <span key={t.l} className={`${styles.tech} ${t.c?styles[`tech_${t.c}`]:''}`}>{t.l}</span>
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
