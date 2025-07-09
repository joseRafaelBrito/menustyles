import { Button } from "@/components/ui/button";
import { Eye, MessageSquare } from "lucide-react";

interface MenuDemosSectionProps {
  onOpenModal: (modalType: string) => void;
}

const menuTypes = [
  {
    id: 'photo',
    title: 'Full-Screen Photo Menu',
    description: 'Perfect for upscale restaurants. High-quality images showcase dishes beautifully.',
    bestFor: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Preview',
    buttonIcon: Eye
  },
  {
    id: 'grid',
    title: 'Grid Menu with Icons',
    description: 'Clean, organized layout ideal for cafes and quick-service restaurants.',
    bestFor: 'Cafes & QSR',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Preview',
    buttonIcon: Eye
  },
  {
    id: 'tabbed',
    title: 'Tabbed Menu',
    description: 'Organized by categories: appetizers, mains, drinks, desserts. Easy navigation.',
    bestFor: 'Full-Service',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Preview',
    buttonIcon: Eye
  },
  {
    id: 'carousel',
    title: 'Carousel Menu',
    description: 'Interactive slider format optimized for mobile browsing and touch navigation.',
    bestFor: 'Mobile-First',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Preview',
    buttonIcon: Eye
  },
  {
    id: 'qr',
    title: 'QR Menu Demo',
    description: 'Contactless ordering with QR codes. Perfect for post-pandemic dining.',
    bestFor: 'Contactless',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Preview',
    buttonIcon: Eye
  },
  {
    id: 'custom',
    title: 'Custom Solution',
    description: 'Need something unique? We create custom digital menu experiences tailored to your brand.',
    bestFor: 'Unique Brands',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
    buttonText: 'Discuss',
    buttonIcon: MessageSquare
  }
];

export default function MenuDemosSection({ onOpenModal }: MenuDemosSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demos" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Choose Your Menu Style
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Explore our interactive menu designs. Each style is crafted for different restaurant types and customer experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuTypes.map((menuType) => (
            <div key={menuType.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={menuType.image} 
                alt={menuType.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{menuType.title}</h3>
                <p className="text-brand-muted mb-4">{menuType.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-red font-medium">Best for: {menuType.bestFor}</span>
                  <Button 
                    className="bg-brand-red text-white hover:bg-red-600"
                    onClick={() => {
                      if (menuType.id === 'custom') {
                        scrollToContact();
                      } else {
                        onOpenModal(menuType.id);
                      }
                    }}
                  >
                    <menuType.buttonIcon className="mr-2 h-4 w-4" />
                    {menuType.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
