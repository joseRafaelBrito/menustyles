import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese, special sauce",
    price: "$9.99"
  },
  {
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Loaded Nachos",
    description: "Crispy chips, cheese, jalapeños, sour cream, salsa",
    price: "$7.99"
  },
  {
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Fish Tacos",
    description: "Grilled fish, cabbage slaw, chipotle mayo, lime",
    price: "$8.99"
  }
];

export default function CarouselMenuModal({ isOpen, onClose }: CarouselMenuModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">Food Truck Express</DialogTitle>
          <p className="text-brand-muted mt-2">Mobile-optimized carousel menu</p>
        </DialogHeader>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-brand-light p-6 rounded-xl text-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4" 
                      loading="lazy"
                    />
                    <h4 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h4>
                    <p className="text-brand-muted text-sm mb-4">{item.description}</p>
                    <span className="text-2xl font-bold text-brand-red">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {menuItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-brand-red' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
