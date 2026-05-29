'use client';
import { useState } from 'react';
import Image from 'next/image';

const ACCENT = { green: '#B0BEC5', blue: '#90A4AE', orange: '#ff6b35' };

export default function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const accent = ACCENT[project.accent] || '#B0BEC5';

  return (
    <>
      <div
        className="glass-card reveal"
        style={{
          overflow: 'hidden',
          cursor: 'pointer',
          transitionDelay: `${index * 0.1}s`,
          borderColor: hover ? `${accent}40` : undefined,
          boxShadow: hover ? `0 16px 60px rgba(0,0,0,0.6), 0 0 0 1px ${accent}15` : undefined,
          transform: hover ? 'translateY(-5px)' : undefined,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Image area */}
        <div style={{
          position:   'relative',
          height:     '200px',
          background: `linear-gradient(160deg, ${accent}0d 0%, #0d0d0d 100%)`,
          overflow:   'hidden',
        }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            style={{ objectFit: 'cover', opacity: 0.5 }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 20%, rgba(7,7,7,0.92) 100%)`,
          }} />
          {/* Accent badge */}
          <div style={{
            position:     'absolute',
            top:          '16px',
            right:        '16px',
            padding:      '4px 12px',
            borderRadius: '100px',
            background:   `${accent}18`,
            border:       `1px solid ${accent}40`,
            color:        accent,
            fontSize:     '0.68rem',
            fontWeight:   700,
            letterSpacing:'0.08em',
          }}>PROJETO</div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 24px 28px' }}>
          <div style={{
            width: '32px', height: '3px',
            background: `linear-gradient(90deg, ${accent}, transparent)`,
            borderRadius: '2px',
            marginBottom: '14px',
          }} />
          <h3 style={{
            fontSize:   '1rem',
            fontWeight: 700,
            color:      '#f0f0f0',
            lineHeight: 1.4,
            marginBottom: '10px',
          }}>{project.title}</h3>
          <p style={{
            fontSize:   '0.84rem',
            color:      '#666',
            lineHeight: 1.7,
            marginBottom: '20px',
            display:    '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow:   'hidden',
          }}>{project.description}</p>

          {/* Results preview */}
          <div style={{
            padding:      '12px',
            borderRadius: '8px',
            background:   'rgba(255,255,255,0.03)',
            border:       '1px solid rgba(255,255,255,0.06)',
            marginBottom: '16px',
          }}>
            {project.results.slice(0, 2).map((r, i) => (
              <div key={i} style={{
                display: 'flex', gap: '8px', alignItems: 'flex-start',
                fontSize: '0.78rem', color: '#888', lineHeight: 1.5,
                paddingBottom: i < 1 ? '6px' : 0,
                marginBottom: i < 1 ? '6px' : 0,
                borderBottom: i < 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}>
                <span style={{ color: accent, flexShrink: 0 }}>✓</span>
                {r}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
            {project.skills.slice(0, 4).map(s => (
              <span key={s} className="tag" style={{ borderColor: `${accent}25`, color: '#666' }}>{s}</span>
            ))}
          </div>

          <button style={{
            background:   'none',
            border:       `1px solid ${accent}40`,
            color:        accent,
            padding:      '8px 16px',
            borderRadius: '6px',
            fontSize:     '0.78rem',
            fontWeight:   600,
            cursor:       'pointer',
            transition:   'all 0.2s ease',
          }}
          onMouseEnter={e => { e.target.style.background = `${accent}12`; }}
          onMouseLeave={e => { e.target.style.background = 'none'; }}
          >Ver detalhes →</button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div style={{
          position:   'fixed',
          inset:      0,
          zIndex:     2000,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding:    '24px',
          overflowY:  'auto',
        }} onClick={() => setModalOpen(false)}>
          <div style={{
            maxWidth:     '720px',
            width:        '100%',
            background:   '#0e0e0e',
            border:       `1px solid ${accent}35`,
            borderRadius: '20px',
            overflow:     'hidden',
            boxShadow:    `0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px ${accent}15`,
          }} onClick={e => e.stopPropagation()}>
            {/* Modal image */}
            <div style={{ position: 'relative', height: '220px', background: `linear-gradient(135deg, ${accent}12, #0d0d0d)` }}>
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover', opacity: 0.45 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 30%, #0e0e0e 100%)' }} />
              <button onClick={() => setModalOpen(false)} style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#aaa', width: '32px', height: '32px', borderRadius: '50%',
                cursor: 'pointer', fontSize: '1rem', display:'flex', alignItems:'center', justifyContent:'center',
              }}>×</button>
            </div>

            <div style={{ padding: '28px 32px 32px' }}>
              <div style={{ width:'32px',height:'3px', background:`linear-gradient(90deg,${accent},transparent)`, borderRadius:'2px', marginBottom:'12px' }} />
              <h2 style={{ fontSize:'1.25rem', fontWeight:800, color:'#f0f0f0', marginBottom:'12px', lineHeight:1.35 }}>{project.title}</h2>
              <p style={{ fontSize:'0.9rem', color:'#888', lineHeight:1.8, marginBottom:'12px' }}>{project.description}</p>
              <p style={{ fontSize:'0.88rem', color:'#666', lineHeight:1.8, marginBottom:'24px' }}>{project.details}</p>

              <div style={{ marginBottom:'20px' }}>
                <div style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.1em', color:accent, marginBottom:'10px' }}>RESULTADOS</div>
                {project.results.map((r, i) => (
                  <div key={i} style={{ display:'flex',gap:'10px',padding:'7px 0',fontSize:'0.86rem',color:'#aaa',lineHeight:1.5, borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color:accent, flexShrink:0 }}>✓</span>{r}
                  </div>
                ))}
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {project.skills.map(s => (
                  <span key={s} className="tag" style={{ borderColor:`${accent}30`, color:`${accent}cc` }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
