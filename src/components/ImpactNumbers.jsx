'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PALETTE = ['#B0BEC5', '#90A4AE', '#ff6b35'];

export default function ImpactNumbers() {
  const { t } = useLang();
  const ref   = useScrollAnimation();

  return (
    <section id="numbers" style={{
      padding:    '80px 0',
      background: 'rgba(255,255,255,0.012)',
      borderTop:  '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>{t.numbers.label}</div>
          <h2 className="section-title" style={{ margin: '0 auto 0', textAlign: 'center' }}>{t.numbers.title}</h2>
        </div>

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 '16px',
        }} id="numbers-grid">
          {t.numbers.items.map((item, i) => (
            <div key={i} className="glass-card reveal" style={{
              padding:   '28px 20px',
              textAlign: 'center',
              transitionDelay: `${i * 0.06}s`,
            }}>
              <div style={{
                fontSize:   'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 900,
                color:      PALETTE[i % PALETTE.length],
                textShadow: `0 0 28px ${PALETTE[i % PALETTE.length]}44`,
                marginBottom: '8px',
                lineHeight: 1,
              }}>{item.value}</div>
              <div style={{
                fontSize:  '0.8rem',
                color:     '#666',
                lineHeight: 1.4,
                fontWeight: 500,
              }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #numbers-grid { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 768px)  { #numbers-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { #numbers-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
