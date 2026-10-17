/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseStudyVillaSorensen } from './components/CaseStudyVillaSorensen';
import { CaseStudyTribecaLoft } from './components/CaseStudyTribecaLoft';
import { PortfolioView } from './components/PortfolioView';
import { StudioView } from './components/StudioView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { SampleBoxDrawer } from './components/SampleBoxDrawer';
import { CadInspectionModal } from './components/CadInspectionModal';
import { SpecimenDetailModal } from './components/SpecimenDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { PROJECTS, Specimen } from './data/projects';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('villa-sorensen');
  const [isSampleBoxOpen, setIsSampleBoxOpen] = useState<boolean>(false);
  const [isCadModalOpen, setIsCadModalOpen] = useState<boolean>(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // Default selected sample codes for Villa Sørensen
  const [selectedSpecimenCodes, setSelectedSpecimenCodes] = useState<string[]>([
    'M-01',
    'M-02',
    'M-03',
    'M-04',
    'M-05',
  ]);

  const villaSorensenProject = PROJECTS.find((p) => p.id === 'villa-sorensen') || PROJECTS[0];
  const tribecaLoftProject = PROJECTS.find((p) => p.id === 'tribeca-loft') || PROJECTS[1];

  // Scroll to top on navigation
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSpecimenCode = (code: string) => {
    setSelectedSpecimenCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  // Keyboard shortcut: Escape closes any modal or drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSampleBoxOpen(false);
        setIsCadModalOpen(false);
        setSelectedSpecimen(null);
        setIsConsultationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] font-body-md flex flex-col selection:bg-[#e5e2dc] selection:text-[#1c1c18]">
      {/* Top Bar Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSampleBox={() => setIsSampleBoxOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        sampleCount={selectedSpecimenCodes.length}
      />

      {/* Main Content Pane */}
      <main className="w-full pt-20 bg-[#fcf9f3] flex-1">
        {currentView === 'villa-sorensen' && (
          <CaseStudyVillaSorensen
            project={villaSorensenProject}
            onNavigate={handleNavigate}
            onOpenSampleBox={() => setIsSampleBoxOpen(true)}
            onOpenCadModal={() => setIsCadModalOpen(true)}
            onSelectSpecimen={(specimen) => setSelectedSpecimen(specimen)}
          />
        )}

        {currentView === 'tribeca-loft' && (
          <CaseStudyTribecaLoft
            project={tribecaLoftProject}
            onNavigate={handleNavigate}
            onOpenSampleBox={() => setIsSampleBoxOpen(true)}
            onSelectSpecimen={(specimen) => setSelectedSpecimen(specimen)}
          />
        )}

        {currentView === 'portfolio' && (
          <PortfolioView
            onSelectProject={handleNavigate}
            onOpenSampleBox={() => setIsSampleBoxOpen(true)}
          />
        )}

        {currentView === 'studio' && (
          <StudioView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenSampleBox={() => setIsSampleBoxOpen(true)}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenSampleBox={() => setIsSampleBoxOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Modal: Requisition Tactile Sample Box Drawer */}
      <SampleBoxDrawer
        isOpen={isSampleBoxOpen}
        onClose={() => setIsSampleBoxOpen(false)}
        specimens={villaSorensenProject.specimens}
        selectedCodes={selectedSpecimenCodes}
        onToggleCode={handleToggleSpecimenCode}
      />

      {/* Interactive Modal: Planimetric CAD Analysis High-Res Zoom */}
      <CadInspectionModal
        isOpen={isCadModalOpen}
        onClose={() => setIsCadModalOpen(false)}
        projectTitle={villaSorensenProject.title}
      />

      {/* Interactive Modal: Material Specimen Detail Inspection */}
      <SpecimenDetailModal
        specimen={selectedSpecimen}
        isOpen={selectedSpecimen !== null}
        onClose={() => setSelectedSpecimen(null)}
        onAddToSampleBox={handleToggleSpecimenCode}
        isInSampleBox={
          selectedSpecimen ? selectedSpecimenCodes.includes(selectedSpecimen.code) : false
        }
      />

      {/* Interactive Modal: Inquire / Consultation Protocol Intake */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
