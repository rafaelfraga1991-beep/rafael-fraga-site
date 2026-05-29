'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LEVEL_BAR = { Nativo: 100, Native: 100, Avançado: 85, Advanced: 85, Intermediário: 60, Intermediate: 60 };

export default function EducationSection() {
  const { t }   = useLang();
  const ref     = useScrollAnimation();
  const { education } = t;

  return (
    <section id="education" className="section" style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(0,0,0,0.2)',
    }}>
      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ marginBottom:'64px' }}>
          <div className="neon-line" />
          <div className="section-label">{education.label}</div>
          <h2 className="section-title">{education.title}</h2>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', marginBottom:'40px',
        }} id="edu-grid">
          {education.items.map((item, i) => (
            <div key={i} className="glass-card reveal" style={{
              padding:'24px 24px',
              display:'flex', gap:'16px', alignItems:'flex-start',
              transitionDelay:`${i*0.08}s`,
            }}>
              <div style={{
                width:'46px', height:'46px', borderRadius:'12px',
                background:'rgba(176,190,197,0.08)',
                border:'1px solid rgba(176,190,197,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.5rem', flexShrink:0,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontSize:'0.68rem', color:'#B0BEC5', fontWeight:700, letterSpacing:'0.08em', marginBottom:'4px' }}>
                  {item.institution} · {item.year}
                </div>
                <div style={{ fontSize:'0.9rem', fontWeight:600, color:'#e0e0e0', lineHeight:1.4 }}>
                  {item.degree}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="glass-card reveal" style={{ padding:'28px 32px', maxWidth:'480px' }}>
          <div style={{ fontSize:'0.72rem', color:'#90A4AE', fontWeight:700, letterSpacing:'0.1em', marginBottom:'18px' }}>
            {education.languages.title.toUpperCase()}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {education.languages.items.map((l, i) => (
              <div key={i}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
                  <span style={{ fontSize:'0.88rem', fontWeight:600, color:'#d0d0d0' }}>{l.lang}</span>
                  <span style={{ fontSize:'0.78rem', color:'#777' }}>{l.level}</span>
                </div>
                <div style={{ height:'4px', background:'rgba(255,255,255,0.07)', borderRadius:'2px', overflow:'hidden' }}>
                  <div style={{
                    height:'100%',
                    width:`${LEVEL_BAR[l.level] || 70}%`,
                    background:'linear-gradient(90deg,#607D8B,#ECEFF1)',
                    borderRadius:'2px',
                    boxShadow:'0 0 8px rgba(176,190,197,0.3)',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
