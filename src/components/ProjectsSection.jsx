'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { t } = useLang();
  const ref   = useScrollAnimation();

  return (
    <section id="projects" className="section" style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position:'absolute', bottom:'-100px', left:'-100px',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(176,190,197,0.04) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />

      <div className="section-inner">
        <div ref={ref} className="reveal" style={{ marginBottom:'64px' }}>
          <div className="neon-line" />
          <div className="section-label">{t.projects.label}</div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} id="projects-grid">
          {t.projects.items.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { #projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
