'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  const { t } = useLang();
  const ref   = useScrollAnimation();

  return (
    <section id="journey" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{
        position: 'absolute', top: '10%', right: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(144,164,174,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-inner">
        {/* Heading */}
        <div ref={ref} className="reveal" style={{ marginBottom: '64px' }}>
          <div className="neon-line" />
          <div className="section-label">{t.journey.label}</div>
          <h2 className="section-title">{t.journey.title}</h2>
          <p className="section-subtitle">{t.journey.subtitle}</p>
        </div>

        {/* Timeline items */}
        <div>
          {t.journey.items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
