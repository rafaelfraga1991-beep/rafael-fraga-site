'use client';
import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

export default function Header() {
  const { t, lang, switchLang } = useLang();
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSection, setActive] = useState('home');

  const navLinks = [
    { id: 'home',       label: t.nav.home },
    { id: 'about',      label: t.nav.about },
    { id: 'journey',    label: t.nav.journey },
    { id: 'projects',   label: t.nav.projects },
    { id: 'skills',     label: t.nav.skills },
    { id: 'newsletter', label: t.nav.content },
    { id: 'portfolio',  label: t.nav.portfolio },
    { id: 'contact',    label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home','about','numbers','journey','projects','skills','education','newsletter','portfolio','manifesto','contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const actions = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
      {/* Language switcher */}
      <div style={{
        display: 'flex', gap: '2px', padding: '3px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {['pt-BR','en-US'].map(l => (
          <button key={l} onClick={() => switchLang(l)} style={{
            padding:      '6px 12px',
            borderRadius: '5px', border: 'none',
            cursor:       'pointer',
            fontSize:     '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
            background:   lang === l ? 'linear-gradient(135deg,#607D8B,#ECEFF1)' : 'transparent',
            color:        lang === l ? '#000' : '#777',
            transition:   'all 0.2s ease',
            minHeight:    '32px', minWidth: '38px',
          }}>{l === 'pt-BR' ? 'PT' : 'EN'}</button>
        ))}
      </div>

      {/* LinkedIn */}
      <a href="https://linkedin.com/in/rafaelfragadasilva" target="_blank" rel="noreferrer"
        title="LinkedIn"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '38px', height: '38px', borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#777', textDecoration: 'none',
          transition: 'all 0.2s ease', fontSize: '0.85rem',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ECEFF1'; e.currentTarget.style.borderColor = 'rgba(176,190,197,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#777'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
      >in</a>
    </div>
  );

  const nav = (
    <nav style={{ display: 'flex', gap: '2px', alignItems: 'center', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }} id="main-nav">
      {navLinks.map(({ id, label }) => (
        <button key={id} onClick={() => scrollTo(id)} style={{
          background:   'none', border: 'none', cursor: 'pointer',
          padding:      '8px 12px', borderRadius: '6px',
          fontSize:     '0.8rem',
          fontWeight:   activeSection === id ? 600 : 400,
          color:        activeSection === id ? '#ECEFF1' : '#aaa',
          transition:   'all 0.2s ease',
          minHeight:    '36px', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { if (activeSection !== id) e.target.style.color = '#f0f0f0'; }}
        onMouseLeave={e => { if (activeSection !== id) e.target.style.color = '#aaa'; }}
        >{label}</button>
      ))}
    </nav>
  );

  return (
    <>
      <header id="site-header" style={{
        position:       'fixed',
        top:            0, left: 0, right: 0,
        zIndex:         1000,
        transition:     'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        background:     scrolled ? 'rgba(7,7,7,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
        {/* Desktop: single row */}
        <div id="header-desktop" style={{
          display: 'none',
          alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', height: '64px',
        }}>
          <button onClick={() => scrollTo('home')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 0', minHeight: '44px', flexShrink: 0,
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
              background: 'linear-gradient(135deg, #607D8B, #ECEFF1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '0.88rem', color: '#000',
            }}>RF</div>
            <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#f0f0f0' }}>Rafael Fraga</span>
          </button>
          {nav}
          {actions}
        </div>

        {/* Mobile: two rows */}
        <div id="header-mobile" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Row 1: logo + actions */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px', height: '56px',
          }}>
            <button onClick={() => scrollTo('home')} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 0', minHeight: '44px', flexShrink: 0,
            }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '7px', flexShrink: 0,
                background: 'linear-gradient(135deg, #607D8B, #ECEFF1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '0.82rem', color: '#000',
              }}>RF</div>
              <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#f0f0f0' }}>Rafael Fraga</span>
            </button>
            {actions}
          </div>
          {/* Row 2: nav */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '0 8px 4px',
          }}>
            {nav}
          </div>
        </div>
      </header>

      <style>{`
        #main-nav::-webkit-scrollbar { display: none; }

        @media (min-width: 768px) {
          #header-desktop { display: flex !important; }
          #header-mobile  { display: none !important; }
        }
      `}</style>
    </>
  );
}
