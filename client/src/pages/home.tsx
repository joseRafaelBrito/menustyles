import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import MenuDemosSection from "@/components/menu-demos-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import PhotoMenuModal from "@/components/menu-modals/photo-menu-modal";
import GridMenuModal from "@/components/menu-modals/grid-menu-modal";
import TabbedMenuModal from "@/components/menu-modals/tabbed-menu-modal";
import CarouselMenuModal from "@/components/menu-modals/carousel-menu-modal";
import QRMenuModal from "@/components/menu-modals/qr-menu-modal";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-brand-light">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <MenuDemosSection onOpenModal={openModal} />
      <ContactSection />
      <Footer />
      
      {/* Modals */}
      <PhotoMenuModal isOpen={activeModal === 'photo'} onClose={closeModal} />
      <GridMenuModal isOpen={activeModal === 'grid'} onClose={closeModal} />
      <TabbedMenuModal isOpen={activeModal === 'tabbed'} onClose={closeModal} />
      <CarouselMenuModal isOpen={activeModal === 'carousel'} onClose={closeModal} />
      <QRMenuModal isOpen={activeModal === 'qr'} onClose={closeModal} />
    </div>
  );
}
