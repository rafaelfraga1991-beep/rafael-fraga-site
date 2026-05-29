'use client';
import { useLang } from '../context/LanguageContext';
import { useScrollAnimationAll } from '../hooks/useScrollAnimation';
import Header          from '../components/Header';
import Hero            from '../components/Hero';
import About           from '../components/About';
import ImpactNumbers   from '../components/ImpactNumbers';
import Timeline        from '../components/Timeline';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection   from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import NewsletterSection from '../components/NewsletterSection';
import PortfolioGallery from '../components/PortfolioGallery';
import Manifesto       from '../components/Manifesto';
import Contact         from '../components/Contact';
import Footer          from '../components/Footer';

export default function Home() {
  const { switching } = useLang();
  useScrollAnimationAll(); // observes every .reveal element on the page

  return (
    <div className={`lang-fade${switching ? ' switching' : ''}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <ImpactNumbers />
        <Timeline />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <NewsletterSection />
        <PortfolioGallery />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
