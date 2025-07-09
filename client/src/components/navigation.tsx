import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Utensils } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Utensils className="text-brand-red text-2xl mr-3" />
            <span className="text-xl font-bold text-brand-dark">MenuTech Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-brand-gray hover:text-brand-red transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-brand-gray hover:text-brand-red transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demos')}
              className="text-brand-gray hover:text-brand-red transition-colors"
            >
              Demos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-gray hover:text-brand-red transition-colors"
            >
              Contact
            </button>
            <Button 
              className="bg-brand-red text-white hover:bg-red-600"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-red"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-red"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demos')}
              className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-red"
            >
              Demos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-red"
            >
              Contact
            </button>
            <Button 
              className="w-full bg-brand-red text-white hover:bg-red-600 mt-2"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
