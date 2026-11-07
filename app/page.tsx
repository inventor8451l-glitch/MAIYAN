'use client';
import { useState } from "react";
import { motion } from "framer-motion";
const villas = [
  ["The Acacia Villa", "Private sanctuary", "A quiet retreat framed by the colours and textures of Laikipia."],
  ["The Cedar Villa", "Garden residence", "A considered hideaway with generous spaces for unhurried days."],
  ["The Ridge Villa", "Panoramic residence", "Open views, soft light and a sense of being held by the land."],
  ["The Summit Villa", "Mountain residence", "A distinctive stay shaped by the mountain horizon."]
];
const experiences = [
  ["Outdoor pool", "A refreshing pause beneath the open Laikipia sky."],
  ["Spa & wellness", "Restorative rituals shaped around stillness and care."],
  ["Nature walks", "Discover the small wonders of the land at a gentler pace."],
  ["Dining under the stars", "Evenings gathered around fire, food and good company."]
];
const photos = [
  "photo-1510798831971-661eb04b3739",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600607687920-4e2a09cf159d",
  "photo-1600210492486-724fe5c67fb0"
];
const image = (id: string, w=1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export default function Home() {
  const [menu,setMenu] = useState(false);
  const [villa,setVilla] = useState<number|null>(null);
  return <main>
    <header className="nav">
      <a className="brand" href="#">MAIYAN<span>LAIKIPIA · KENYA</span></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?"CLOSE":"MENU"}</button>
      <nav className={menu?"links open":"links"}>{["The feeling","Villas","Experiences","The land"].map((x,i)=><a key={x} href={["#feeling","#villas","#experiences","#land"][i]} onClick={()=>setMenu(false)}>{x}</a>)}<a className="nav-book" href="#book" onClick={()=>setMenu(false)}>Enquire ↗</a></nav>
    </header>
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-copy"><p className="eyebrow">A SANCTUARY IN LAIKIPIA · 0°01′ S, 37°04′ E</p><motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:1.1}}>A blessing<br/><i>in every moment.</i></motion.h1><p className="hero-sub">An invitation to slow down, reconnect and find your own rhythm at the foot of Mt Kenya.</p><a className="light-button" href="#feeling">Discover MAIYAN <span>↓</span></a></div>
      <div className="hero-foot"><span>LAIKIPIA, KENYA</span><span>WHERE THE LAND MEETS THE SKY</span><span>SCROLL TO EXPLORE</span></div>
    </section>
    <section id="feeling" className="intro section">
      <p className="eyebrow">01 / THE MAIYAN FEELING</p><div className="intro-grid"><h2 className="display">A place to<br/><i>come back</i><br/>to yourself.</h2><div className="intro-text"><p className="lead">Some places ask you to do more. MAIYAN invites you to feel more.</p><p>Set in the extraordinary landscape of Laikipia, beneath the presence of Mt Kenya, MAIYAN is a retreat shaped by thoughtful hospitality, generous space and the quiet beauty of nature.</p><p><i>Maiyan</i> is a Maasai word meaning “God's blessing”. It is the spirit behind every detail and every welcome.</p></div></div>
    </section>
    <section id="villas" className="villas section">
      <div className="section-heading"><div><p className="eyebrow">02 / STAY AWHILE</p><h2 className="display">Space to <i>belong.</i></h2></div><p>Private spaces, considered details and room for the moments that matter.</p></div>
      <div className="villa-grid">{villas.map((v,i)=><button className="villa-card" key={v[0]} onClick={()=>setVilla(i)}><img src={image(photos[i])} alt={v[0]}/><span className="villa-number">0{i+1}</span><span className="villa-caption"><small>{v[1]}</small><strong>{v[0]}</strong></span><span className="villa-arrow">↗</span></button>)}</div>
      {villa!==null&&<div className="modal" role="dialog" aria-modal="true" onClick={()=>setVilla(null)}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setVilla(null)}>CLOSE ×</button><img src={image(photos[villa])} alt={villas[villa][0]}/><p className="eyebrow">A MAIYAN RESIDENCE</p><h3>{villas[villa][0]}</h3><p>{villas[villa][2]}</p><a className="dark-button" href="#book" onClick={()=>setVilla(null)}>Enquire about this villa ↗</a></div></div>}
    </section>
    <section id="experiences" className="experiences section"><p className="eyebrow">03 / MAKE THE MOMENT YOURS</p><div className="section-heading"><h2 className="display">Follow your <i>curiosity.</i></h2><p>Find stillness, movement, connection and the simple pleasure of being here.</p></div><div className="experience-grid">{experiences.map((x,i)=><article className="experience" key={x[0]} style={{backgroundImage:`linear-gradient(0deg,rgba(12,15,12,.78),transparent 70%),url(${image(photos[(i+1)%4],900)})`}}><span>0{i+1}</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></section>
    <section id="land" className="land section"><div><p className="eyebrow">04 / THE LAND</p><h2 className="display">Grounded by<br/><i>greatness.</i></h2><p className="land-text">At the foothills of Mt Kenya, Laikipia opens into a landscape of extraordinary skies, rich wildlife and a deep sense of space. Here, the horizon has room to breathe.</p><div className="land-tags"><span>LAIKIPIA</span><span>MT KENYA</span><span>KENYA</span></div></div></section>
    <section className="quote section"><p className="eyebrow">05 / THE SPIRIT OF MAIYAN</p><blockquote>“The greatest luxury is not having more. It is having the space to <i>feel everything.</i>”</blockquote><span>THE MAIYAN PHILOSOPHY</span></section>
    <section id="book" className="booking section"><div><p className="eyebrow">YOUR TIME IN LAIKIPIA</p><h2 className="display">Let the journey<br/><i>begin.</i></h2><p className="booking-copy">Tell us what you are dreaming of. Our team will help you shape a stay that feels entirely your own.</p></div><div className="booking-card"><p className="eyebrow">MAKE AN ENQUIRY</p><h3>We would love to welcome you.</h3><a className="dark-button" href="mailto:reservations@maiyan.example?subject=MAIYAN%20stay%20enquiry">Email reservations ↗</a><p className="fine">Please replace the example email with MAIYAN's verified booking contact before launch.</p></div></section>
    <footer><a className="brand" href="#">MAIYAN<span>GOD'S BLESSING, AT THE FOOT OF MT KENYA</span></a><div><span>LAIKIPIA · NANYUKI · KENYA</span><span>© {new Date().getFullYear()} MAIYAN</span></div></footer>
  </main>;
}