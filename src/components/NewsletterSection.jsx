'use client';
import Image from 'next/image';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function NewsletterSection() {
  const { t }  = useLang();
  const ref    = useScrollAnimation();
  const { newsletter } = t;

  return (
    <section id="newsletter" className="section" style={{
      borderTop:  '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(0,0,0,0.3)',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* Background glows */}
      <div style={{
        position:'absolute', top:'10%', left:'-120px',
        width:'480px', height:'480px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(176,190,197,0.04) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />
      <div style={{
        position:'absolute', bottom:'10%', right:'-80px',
        width:'360px', height:'360px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(144,164,174,0.04) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />

      <div className="section-inner" style={{ position:'relative', zIndex:1 }}>
        {/* Section header */}
        <div ref={ref} className="reveal" style={{ marginBottom:'48px' }}>
          <div className="neon-line" />
          <div className="section-label">{newsletter.label}</div>
          <h2 className="section-title" style={{ maxWidth:'560px' }}>{newsletter.title}</h2>
        </div>

        {/* Newsletter card */}
        <div className="reveal glass-card" style={{
          overflow:    'hidden',
          marginBottom:'40px',
          maxWidth:    '960px',
        }}>
          <div style={{
            display:             'grid',
            gridTemplateColumns: '1fr',
          }} id="newsletter-card-grid">

            {/* Cover image panel */}
            <div style={{
              position:   'relative',
              minHeight:  '220px',
              background: 'linear-gradient(160deg, rgba(176,190,197,0.07) 0%, #0a0a0a 100%)',
              overflow:   'hidden',
            }} id="newsletter-cover">
              <Image
                src="/images/newsletter-code-core.jpg"
                alt="Code & Core — Newsletter Cover"
                fill
                style={{ objectFit:'cover', opacity:0.55 }}
                onError={e => { e.target.style.display='none'; }}
              />
              {/* Overlay */}
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(to bottom, transparent 30%, rgba(7,7,7,0.8) 100%)',
              }} />
              {/* Placeholder content when no image */}
              <div style={{
                position:'absolute', inset:0,
                display:'flex', flexDirection:'column',
                alignItems:'center', justifyContent:'center',
                gap:'12px', padding:'24px',
                textAlign:'center',
              }}>
                <div style={{
                  width:'64px', height:'64px', borderRadius:'16px',
                  background:'linear-gradient(135deg, rgba(176,190,197,0.12), rgba(144,164,174,0.12))',
                  border:'1px solid rgba(176,190,197,0.3)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'1.8rem',
                }}>✉</div>
                <div style={{
                  fontSize:'1rem', fontWeight:800, color:'#e0e0e0',
                  letterSpacing:'-0.01em', lineHeight:1.3,
                }}>Code & Core</div>
                <div style={{
                  fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em',
                  color:'#B0BEC5',
                }}>IA NA GESTÃO</div>
              </div>
            </div>

            {/* Content panel */}
            <div style={{ padding:'28px 28px 32px' }} id="newsletter-content">
              {/* Header */}
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'12px', flexWrap:'wrap', marginBottom:'16px' }}>
                <div>
                  <div style={{
                    display:'inline-flex', alignItems:'center', gap:'6px',
                    padding:'3px 10px', borderRadius:'100px',
                    background:'rgba(176,190,197,0.07)',
                    border:'1px solid rgba(176,190,197,0.25)',
                    marginBottom:'10px',
                  }}>
                    <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#B0BEC5', boxShadow:'0 0 6px rgba(176,190,197,0.6)', flexShrink:0 }} />
                    <span style={{ fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.1em', color:'#B0BEC5' }}>NEWSLETTER</span>
                  </div>
                  <h3 style={{
                    fontSize:'clamp(1.1rem,2.5vw,1.35rem)', fontWeight:800,
                    color:'#f0f0f0', lineHeight:1.25, marginBottom:'4px',
                  }}>{newsletter.name}</h3>
                  <p style={{ fontSize:'0.88rem', fontWeight:600, color:'#90A4AE', marginBottom:'8px' }}>
                    {newsletter.subtitle}
                  </p>
                  <p style={{ fontSize:'0.85rem', color:'#777', lineHeight:1.7 }}>
                    {newsletter.description}
                  </p>
                </div>
              </div>

              {/* Frequency badge only */}
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'20px' }}>
                <div style={{
                  display:'flex', alignItems:'center', gap:'8px',
                  padding:'10px 16px', borderRadius:'10px',
                  background:'rgba(144,164,174,0.06)',
                  border:'1px solid rgba(144,164,174,0.18)',
                }}>
                  <span style={{ fontSize:'0.85rem', fontWeight:700, color:'#90A4AE' }}>◷</span>
                  <span style={{ fontSize:'0.88rem', fontWeight:700, color:'#90A4AE' }}>{newsletter.frequency}</span>
                  <span style={{ fontSize:'0.72rem', color:'#555', fontWeight:600 }}>{newsletter.frequencyLabel}</span>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'24px' }}>
                {newsletter.tags.map(tag => (
                  <span key={tag} className="tag" style={{
                    borderColor:'rgba(176,190,197,0.2)',
                    color:'rgba(176,190,197,0.8)',
                  }}>{tag}</span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7428077320625872896"
                  className="btn-primary"
                  style={{ fontSize:'0.82rem', padding:'11px 22px' }}
                  target="_blank" rel="noreferrer"
                >
                  in {newsletter.cta1}
                </a>
                <a
                  href="https://linkedin.com/in/rafaelfragadasilva"
                  className="btn-secondary"
                  style={{ fontSize:'0.82rem', padding:'10px 20px' }}
                  target="_blank" rel="noreferrer"
                >
                  {newsletter.cta2}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Complementary text */}
        <div className="reveal" style={{
          maxWidth:'720px',
          padding:'24px 28px',
          borderRadius:'12px',
          background:'rgba(255,255,255,0.02)',
          border:'1px solid rgba(255,255,255,0.05)',
          borderLeft:'3px solid rgba(176,190,197,0.35)',
        }}>
          <p style={{
            fontSize:'0.92rem', color:'#666',
            lineHeight:1.85, fontStyle:'italic',
          }}>{newsletter.body}</p>
          <div style={{ marginTop:'12px', fontSize:'0.78rem', color:'#444', fontWeight:600 }}>
            — {newsletter.author}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          #newsletter-card-grid {
            grid-template-columns: 260px 1fr !important;
          }
          #newsletter-cover {
            min-height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
