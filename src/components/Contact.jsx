'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { t } = useLang();
  const ref   = useScrollAnimation();
  const { contact } = t;

  return (
    <section id="contact" className="section" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div style={{
        position:'absolute', bottom:0, right:0,
        width:'400px', height:'400px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(144,164,174,0.04) 0%,transparent 70%)',
        pointerEvents:'none',
      }} />

      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ textAlign:'center', marginBottom:'64px' }}>
          <div className="neon-line" style={{ margin:'0 auto 20px' }} />
          <div className="section-label" style={{ justifyContent:'center', display:'flex' }}>{contact.label}</div>
          <h2 className="section-title" style={{ textAlign:'center', margin:'0 auto 16px' }}>{contact.title}</h2>
          <p className="section-subtitle" style={{ margin:'0 auto', textAlign:'center' }}>{contact.subtitle}</p>
        </div>

        {/* Contact cards */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px', maxWidth:'860px', margin:'0 auto',
        }} id="contact-grid">
          {/* LinkedIn */}
          <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer"
            className="glass-card"
            style={{ padding:'32px 24px', textAlign:'center', textDecoration:'none', display:'block' }}
          >
            <div style={{
              width:'52px', height:'52px', borderRadius:'14px',
              background:'rgba(144,164,174,0.1)', border:'1px solid rgba(144,164,174,0.25)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'1.6rem', margin:'0 auto 16px',
            }}>in</div>
            <div style={{ fontSize:'0.88rem', fontWeight:700, color:'#e0e0e0', marginBottom:'4px' }}>LinkedIn</div>
            <div style={{ fontSize:'0.75rem', color:'#555', marginBottom:'16px' }}>{contact.linkedin}</div>
            <span className="btn-secondary" style={{ fontSize:'0.78rem', padding:'7px 16px', borderColor:'rgba(144,164,174,0.35)', color:'#90A4AE' }}>
              {contact.cta1}
            </span>
          </a>

          {/* Email */}
          <a href={`mailto:${contact.email}`}
            className="glass-card"
            style={{ padding:'32px 24px', textAlign:'center', textDecoration:'none', display:'block' }}
          >
            <div style={{
              width:'52px', height:'52px', borderRadius:'14px',
              background:'rgba(176,190,197,0.07)', border:'1px solid rgba(176,190,197,0.25)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'1.4rem', margin:'0 auto 16px',
            }}>✉</div>
            <div style={{ fontSize:'0.88rem', fontWeight:700, color:'#e0e0e0', marginBottom:'4px' }}>E-mail</div>
            <div style={{ fontSize:'0.75rem', color:'#555', marginBottom:'16px', wordBreak:'break-all' }}>{contact.email}</div>
            <span className="btn-secondary" style={{ fontSize:'0.78rem', padding:'7px 16px' }}>
              {contact.cta2}
            </span>
          </a>

          {/* CV */}
          <a href="/rafael-fraga-cv.pdf" download
            className="glass-card"
            style={{ padding:'32px 24px', textAlign:'center', textDecoration:'none', display:'block' }}
          >
            <div style={{
              width:'52px', height:'52px', borderRadius:'14px',
              background:'rgba(255,107,53,0.08)', border:'1px solid rgba(255,107,53,0.25)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'1.4rem', margin:'0 auto 16px',
            }}>↓</div>
            <div style={{ fontSize:'0.88rem', fontWeight:700, color:'#e0e0e0', marginBottom:'4px' }}>Currículo</div>
            <div style={{ fontSize:'0.75rem', color:'#555', marginBottom:'16px' }}>PDF — Rafael Fraga</div>
            <span className="btn-secondary" style={{ fontSize:'0.78rem', padding:'7px 16px', borderColor:'rgba(255,107,53,0.35)', color:'#ff6b35' }}>
              {contact.cta3}
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { #contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
