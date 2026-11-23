/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import type { ServiceId } from './data/studioData';

export default function App() {
  const [preselectedService, setPreselectedService] =
    useState<ServiceId | null>(null);
  const [prefillNote, setPrefillNote] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookConsultation = () => {
    scrollToSection('consultation');
  };

  const handleViewProjects = () => {
    scrollToSection('portfolio');
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setPreselectedService(serviceId);
    scrollToSection('consultation');
  };

  const handleRequestReferences = () => {
    setPrefillNote(
      'I would like to request verified local client references during my design consultation.'
    );
    scrollToSection('consultation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#162C4E]">
      <Navbar onBookConsultation={handleBookConsultation} />

      <main className="flex-1">
        <Hero
          onBookConsultation={handleBookConsultation}
          onViewProjects={handleViewProjects}
        />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <PortfolioSection onEnquireSimilar={handleSelectService} />
        <ProcessSection onBookConsultation={handleBookConsultation} />
        <WhyChooseUsSection />
        <ReviewsSection onRequestReferences={handleRequestReferences} />
        <ConsultationSection
          preselectedService={preselectedService}
          prefillNote={prefillNote}
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
