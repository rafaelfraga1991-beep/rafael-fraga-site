'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Manifesto() {
  const { t } = useLang();
  const ref   = useScrollAnimation();
  const { manifesto } = t;

  return (
    <section id="manifesto" style={{
      padding:    '120px 0',
      background: 'rgba(0,0,0,0.5)',
      borderTop:  '1px solid rgba(255,255,255,0.05)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse at 50% 50%, rgba(176,190,197,0.03) 0%, transparent 65%)',
        pointerEvents:'none',
      }} />
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize:'64px 64px',
        pointerEvents:'none',
      }} />

      <div className="section-inner" style={{ position:'relative', zIndex:1 }}>
        <div ref={ref} className="reveal" style={{ textAlign:'center', maxWidth:'800px', margin:'0 auto' }}>
          <div style={{
            fontSize:     '4rem',
            color:        'rgba(176,190,197,0.15)',
            lineHeight:   1,
            marginBottom: '8px',
            fontFamily:   'Georgia, serif',
          }}>"</div>

          <div className="section-label" style={{ justifyContent:'center', display:'flex', marginBottom:'24px' }}>
            {manifesto.label}
          </div>

          <blockquote style={{
            fontSize:     'clamp(1.15rem, 2.5vw, 1.5rem)',
            fontWeight:   600,
            color:        '#e0e0e0',
            lineHeight:   1.65,
            marginBottom: '28px',
            fontStyle:    'normal',
            letterSpacing:'-0.01em',
          }}>
            <span style={{
              background:             'linear-gradient(135deg, #f0f0f0 0%, #B0BEC5 100%)',
              WebkitBackgroundClip:   'text',
              WebkitTextFillColor:    'transparent',
              backgroundClip:         'text',
            }}>{manifesto.quote}</span>
          </blockquote>

          <div style={{
            width:  '48px',
            height: '2px',
            background: 'linear-gradient(90deg, #607D8B, #ECEFF1)',
            borderRadius: '2px',
            margin: '0 auto 28px',
          }} />

          <p style={{
            fontSize:   'clamp(0.9rem, 1.5vw, 1.05rem)',
            color:      '#666',
            lineHeight: 1.8,
          }}>{manifesto.complement}</p>
        </div>
      </div>
    </section>
  );
}
