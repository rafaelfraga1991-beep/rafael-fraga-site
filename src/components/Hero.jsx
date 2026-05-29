'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(id);
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" style={{
      minHeight:   '100vh',
      display:     'flex',
      alignItems:  'center',
      position:    'relative',
      overflow:    'hidden',
      paddingTop:  '64px',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.016) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-160px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,125,139,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '5%', right: '-120px',
        width: '440px', height: '440px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(144,164,174,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="section-inner" style={{ width: '100%', paddingTop: '40px', paddingBottom: '64px' }}>
        {/* ── Mobile: column layout; Desktop: grid ── */}
        <div className="hero-layout">

          {/* Photo — appears ABOVE text on mobile, RIGHT on desktop */}
          <div className="hero-photo-wrap" style={{
            opacity:    loaded ? 1 : 0,
            transition: 'opacity 1s ease 0.3s',
          }}>
            <div className="hero-photo-inner">
              {/* Gradient ring */}
              <div style={{
                position: 'absolute', inset: '-3px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(96,125,139,0.85), rgba(236,239,241,0.65), rgba(96,125,139,0.35))',
                padding: '2px', zIndex: 0,
              }}>
                <div style={{ width:'100%', height:'100%', background:'#0a0a0a', borderRadius:'18px' }} />
              </div>
              {/* Photo */}
              <div style={{
                position:'absolute', inset:'3px', borderRadius:'17px',
                overflow:'hidden', zIndex:1,
                background:'linear-gradient(180deg,#1a1a1a 0%,#0d0d0d 100%)',
              }}>
                  <Image
                  src="/images/profile-photo.png"
                  alt="Rafael Fraga"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                  priority
                  sizes="(max-width: 900px) 160px, 340px"
                />
              </div>
              {/* Floating badge — desktop only */}
              <div className="hero-badge" style={{
                position:'absolute', bottom:'20px', right:'-18px', zIndex:2,
                padding:'10px 16px', borderRadius:'12px',
                background:'rgba(7,7,7,0.95)',
                border:'1px solid rgba(176,190,197,0.35)',
                backdropFilter:'blur(12px)',
                boxShadow:'0 8px 32px rgba(0,0,0,0.6)',
                animation:'float 5s ease-in-out infinite',
              }}>
                <div style={{ fontSize:'0.65rem', color:'#B0BEC5', fontWeight:700, letterSpacing:'0.06em' }}>EXECUTIVO DE TECNOLOGIA</div>
                <div style={{ fontSize:'0.75rem', color:'#e0e0e0', fontWeight:600, marginTop:'2px', whiteSpace:'nowrap' }}>15+ anos · SaaS & Produto</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="hero-text" style={{
            opacity:    loaded ? 1 : 0,
            transform:  loaded ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 14px', borderRadius: '100px',
              border: '1px solid rgba(176,190,197,0.3)',
              background: 'rgba(96,125,139,0.08)',
              marginBottom: '20px',
            }}>
              <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#B0BEC5', boxShadow:'0 0 8px rgba(176,190,197,0.8)', display:'block' }} />
              <span style={{ fontSize:'0.72rem', fontWeight:600, color:'#B0BEC5', letterSpacing:'0.06em' }}>
                {t.hero.greeting}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 7vw, 5rem)',
              fontWeight: 900, lineHeight: 1.05,
              marginBottom: '14px', letterSpacing: '-0.02em',
            }}>
              <span style={{ color:'#f0f0f0' }}>Rafael </span>
              <span style={{
                background:'linear-gradient(135deg,#607D8B 0%,#ECEFF1 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>Fraga</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
              fontWeight: 600, color: '#c8c8c8',
              marginBottom: '10px', lineHeight: 1.4,
            }}>{t.hero.headline}</p>

            <p style={{
              fontSize: 'clamp(0.88rem, 1.8vw, 1rem)',
              color: '#666', lineHeight: 1.75,
              maxWidth: '540px', marginBottom: '32px',
            }}>{t.hero.subheadline}</p>

            {/* CTAs */}
            <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'40px' }}>
              <button className="btn-primary" onClick={() => scrollTo('journey')}>
                {t.hero.cta1} →
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('projects')}>
                {t.hero.cta2}
              </button>
              <button className="btn-ghost" onClick={() => scrollTo('contact')}>
                {t.hero.cta3}
              </button>
            </div>

            {/* Metrics */}
            <div className="metrics-grid">
              {t.hero.metrics.map((m, i) => (
                <div key={i} style={{
                  padding:      '12px 10px',
                  borderRadius: '10px',
                  border:       '1px solid rgba(255,255,255,0.07)',
                  background:   'rgba(255,255,255,0.025)',
                  textAlign:    'center',
                  opacity:      loaded ? 1 : 0,
                  transform:    loaded ? 'none' : 'translateY(16px)',
                  transition:   `opacity 0.6s ease ${0.25 + i * 0.07}s, transform 0.6s ease ${0.25 + i * 0.07}s`,
                }}>
                  <div style={{
                    fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontWeight:800,
                    background:'linear-gradient(135deg,#607D8B,#ECEFF1)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                    lineHeight:1.1, marginBottom:'3px',
                  }}>{m.value}</div>
                  <div style={{ fontSize:'0.62rem', color:'#666', lineHeight:1.3, fontWeight:500 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Mobile-first: stacked, photo on top */
        .hero-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .hero-text {
          width: 100%;
          text-align: center;
        }
        .hero-text p { margin-left: auto; margin-right: auto; }
        .hero-text > div:first-child { justify-content: center; }
        .hero-text > div[style*="flex-wrap"] { justify-content: center; }

        .hero-photo-wrap { order: -1; flex-shrink: 0; }
        .hero-photo-inner {
          position: relative;
          width: 160px;
          height: 200px;
        }
        .hero-badge { display: none; }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        /* Tablet: slightly larger photo */
        @media (min-width: 641px) {
          .hero-photo-inner { width: 200px; height: 250px; }
          .metrics-grid { grid-template-columns: repeat(5, 1fr); }
        }

        /* Desktop: side-by-side layout */
        @media (min-width: 900px) {
          .hero-layout {
            display: grid;
            grid-template-columns: minmax(0,1fr) auto;
            align-items: center;
            gap: 56px;
          }
          .hero-text { text-align: left; order: 0; }
          .hero-text p { margin-left: 0; margin-right: 0; }
          .hero-text > div:first-child { justify-content: flex-start; }
          .hero-text > div[style*="flex-wrap"] { justify-content: flex-start; }

          .hero-photo-wrap { order: 0; }
          .hero-photo-inner { width: 340px; height: 420px; }
          .hero-badge { display: flex; flex-direction: column; }

          .metrics-grid { grid-template-columns: repeat(5, 1fr); gap: 10px; }
        }
      `}</style>
    </section>
  );
}
