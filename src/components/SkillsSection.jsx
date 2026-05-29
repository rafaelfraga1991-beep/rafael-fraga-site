'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const COLOR = { green: '#B0BEC5', blue: '#90A4AE', orange: '#ff6b35' };

export default function SkillsSection() {
  const { t } = useLang();
  const ref   = useScrollAnimation();

  return (
    <section id="skills" className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ marginBottom:'64px' }}>
          <div className="neon-line" />
          <div className="section-label">{t.skills.label}</div>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'24px' }} id="skills-grid">
          {t.skills.categories.map((cat, i) => {
            const accent = COLOR[cat.color] || '#B0BEC5';
            return (
              <div key={i} className="glass-card reveal" style={{ padding:'28px', transitionDelay:`${i*0.1}s` }}>
                {/* Header */}
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px' }}>
                  <div style={{
                    width:'40px', height:'40px', borderRadius:'10px',
                    background:`${accent}15`, border:`1px solid ${accent}30`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'1.2rem',
                  }}>{cat.icon}</div>
                  <div>
                    <div style={{ fontSize:'0.68rem', color:accent, fontWeight:700, letterSpacing:'0.1em', marginBottom:'2px' }}>
                      {['01','02','03','04'][i]}
                    </div>
                    <h3 style={{ fontSize:'0.95rem', fontWeight:700, color:'#f0f0f0' }}>{cat.name}</h3>
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {cat.items.map(item => (
                    <span key={item} style={{
                      padding:      '5px 13px',
                      borderRadius: '100px',
                      fontSize:     '0.75rem',
                      fontWeight:   500,
                      border:       `1px solid ${accent}25`,
                      color:        '#999',
                      background:   `${accent}08`,
                      transition:   'all 0.2s ease',
                      cursor:       'default',
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = accent;
                      e.target.style.background = `${accent}15`;
                      e.target.style.borderColor = `${accent}50`;
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = '#999';
                      e.target.style.background = `${accent}08`;
                      e.target.style.borderColor = `${accent}25`;
                    }}
                    >{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
