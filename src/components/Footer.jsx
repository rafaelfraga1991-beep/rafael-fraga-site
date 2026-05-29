'use client';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const year  = new Date().getFullYear();

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer style={{
      padding:    '40px 24px',
      borderTop:  '1px solid rgba(255,255,255,0.06)',
      background: '#050505',
    }}>
      <div style={{
        maxWidth:        '1280px',
        margin:          '0 auto',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        flexWrap:        'wrap',
        gap:             '16px',
      }}>
        {/* Left */}
        <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
          <div style={{
            width:'30px', height:'30px', borderRadius:'7px',
            background:'linear-gradient(135deg,#607D8B,#ECEFF1)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontWeight:900, fontSize:'0.8rem', color:'#000',
          }}>RF</div>
          <div>
            <div style={{ fontSize:'0.82rem', fontWeight:700, color:'#d0d0d0' }}>Rafael Fraga</div>
            <div style={{ fontSize:'0.7rem', color:'#555' }}>{t.footer.tagline}</div>
          </div>
        </div>

        {/* Center */}
        <div style={{ fontSize:'0.72rem', color:'#444', textAlign:'center' }}>
          © {year} Rafael Fraga da Silva · {t.footer.rights}
        </div>

        {/* Right — back to top */}
        <button onClick={scrollTop} style={{
          background:   'rgba(255,255,255,0.05)',
          border:       '1px solid rgba(255,255,255,0.1)',
          color:        '#777',
          padding:      '8px 16px',
          borderRadius: '8px',
          cursor:       'pointer',
          fontSize:     '0.75rem',
          fontWeight:   600,
          transition:   'all 0.2s ease',
          display:      'flex',
          alignItems:   'center',
          gap:          '6px',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ECEFF1'; e.currentTarget.style.borderColor = 'rgba(176,190,197,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#777'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >↑ Topo</button>
      </div>
    </footer>
  );
}
