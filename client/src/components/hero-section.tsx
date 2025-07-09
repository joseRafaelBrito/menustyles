import { Button } from "@/components/ui/button";
import { Play, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-brand-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              Elevate Your Restaurant with{" "}
              <span className="text-brand-red">Interactive Menus</span>
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              Transform your dining experience with modern, responsive digital menus that engage customers and boost sales. Perfect for restaurants, cafes, and food service establishments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-red text-white hover:bg-red-600 px-8 py-4 text-lg"
                onClick={() => scrollToSection('demos')}
              >
                <Play className="mr-2 h-5 w-5" />
                View Live Demos
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern restaurant interior with digital displays" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
