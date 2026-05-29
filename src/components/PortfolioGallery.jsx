'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PortfolioGallery() {
  const { t }    = useLang();
  const ref      = useScrollAnimation();
  const [active, setActive] = useState(null);
  const { portfolio } = t;

  return (
    <section id="portfolio" className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ marginBottom:'56px' }}>
          <div className="neon-line" />
          <div className="section-label">{portfolio.label}</div>
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-subtitle">{portfolio.subtitle}</p>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 '12px',
        }} id="gallery-grid">
          {portfolio.images.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {active !== null && (
        <div style={{
          position:'fixed', inset:0, zIndex:2000,
          background:'rgba(0,0,0,0.92)', backdropFilter:'blur(12px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding:'24px',
        }} onClick={() => setActive(null)}>
          <div style={{
            position:'relative', maxWidth:'900px', width:'100%',
            background:'#0d0d0d', borderRadius:'16px',
            border:'1px solid rgba(255,255,255,0.1)',
            overflow:'hidden',
            boxShadow:'0 32px 80px rgba(0,0,0,0.8)',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ position:'relative', height:'520px' }}>
              <Image
                src={portfolio.images[active].src}
                alt={portfolio.images[active].alt}
                fill
                style={{ objectFit:'cover' }}
                priority
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
            </div>

            <div style={{ padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ fontSize:'0.9rem', fontWeight:600, color:'#e0e0e0' }}>{portfolio.images[active].caption}</div>
              <div style={{ display:'flex', gap:'8px' }}>
                <button onClick={() => setActive(v => v > 0 ? v-1 : portfolio.images.length-1)}
                  style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'#ccc', width:'34px', height:'34px', borderRadius:'8px', cursor:'pointer', fontSize:'1rem' }}>‹</button>
                <button onClick={() => setActive(v => v < portfolio.images.length-1 ? v+1 : 0)}
                  style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'#ccc', width:'34px', height:'34px', borderRadius:'8px', cursor:'pointer', fontSize:'1rem' }}>›</button>
                <button onClick={() => setActive(null)}
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#aaa', width:'34px', height:'34px', borderRadius:'8px', cursor:'pointer', fontSize:'1rem' }}>×</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { #gallery-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 640px)  { #gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

function GalleryItem({ img, index, onClick }) {
  const [hover, setHover] = useState(false);
  const tall = index === 0 || index === 4;

  return (
    <div className="reveal" style={{
      gridRow:      tall ? 'span 2' : 'span 1',
      position:     'relative',
      borderRadius: '12px',
      overflow:     'hidden',
      cursor:       'pointer',
      aspectRatio:  tall ? '3/4' : '4/3',
      background:   'rgba(255,255,255,0.04)',
      border:       '1px solid rgba(255,255,255,0.07)',
      transition:   'all 0.3s ease',
      transitionDelay: `${index * 0.05}s`,
      transform:    hover ? 'scale(1.02)' : 'none',
      boxShadow:    hover ? '0 8px 32px rgba(0,0,0,0.6)' : 'none',
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={onClick}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        loading="lazy"
        style={{ objectFit:'cover', transition:'transform 0.4s ease', transform: hover ? 'scale(1.05)' : 'scale(1)' }}
      />
      {/* Hover overlay */}
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)',
        opacity: hover ? 1 : 0,
        transition:'opacity 0.3s ease',
        display:'flex', alignItems:'flex-end', padding:'14px',
      }}>
        <span style={{ fontSize:'0.78rem', fontWeight:600, color:'#e0e0e0' }}>{img.caption}</span>
      </div>
    </div>
  );
}
