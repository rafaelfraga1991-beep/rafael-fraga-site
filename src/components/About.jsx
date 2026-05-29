'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { t } = useLang();
  const ref   = useScrollAnimation();

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-inner">
        <div ref={ref} className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} id="about-grid">
          {/* Left */}
          <div>
            <div className="neon-line" />
            <div className="section-label">{t.about.label}</div>
            <h2 className="section-title">{t.about.title}</h2>

            {t.about.paragraphs.map((p, i) => (
              <p key={i} style={{
                color:        i === 0 ? '#c0c0c0' : '#777',
                lineHeight:   1.8,
                marginBottom: i < t.about.paragraphs.length - 1 ? '18px' : 0,
                fontSize:     i === 0 ? '1.05rem' : '0.95rem',
              }}>{p}</p>
            ))}
          </div>

          {/* Right — decorative */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display:       'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:           '16px',
            }}>
              {t.about.stats.map((item, i) => (
                <div key={i} className="glass-card" style={{
                  padding:   '24px 20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize:   '2rem',
                    fontWeight: 800,
                    color:      item.color,
                    textShadow: `0 0 20px ${item.color}55`,
                    marginBottom: '6px',
                  }}>{item.value}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e0e0e0', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555' }}>{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Vertical tag list */}
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['SaaS', 'Cloud', 'P&L', 'Leadership', 'Product', 'IA', 'TOTVS', 'Food Service', 'Hotelaria'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
