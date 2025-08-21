import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabbedMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = {
  appetizers: [
    {
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Bruschetta",
      description: "Fresh tomatoes, basil, garlic on toasted bread",
      price: "$8.50"
    },
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Caesar Salad",
      description: "Crisp romaine, parmesan, croutons, Caesar dressing",
      price: "$12.00"
    }
  ],
  mains: [
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil, olive oil",
      price: "$16.50"
    },
    {
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Spaghetti Carbonara",
      description: "Eggs, bacon, parmesan, black pepper",
      price: "$18.00"
    }
  ],
  drinks: [
    {
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "House Wine",
      description: "Red, white, or rosé by the glass",
      price: "$8.00"
    },
    {
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Signature Cocktail",
      description: "Ask your server about today's special",
      price: "$12.00"
    }
  ],
  desserts: [
    {
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Tiramisu",
      description: "Classic Italian dessert with mascarpone",
      price: "$7.50"
    },
    {
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100&q=80",
      title: "Gelato",
      description: "Three scoops of seasonal flavors",
      price: "$6.00"
    }
  ]
};

export default function TabbedMenuModal({ isOpen, onClose }: TabbedMenuModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">Bella Vista Restaurant</DialogTitle>
          <p className="text-brand-muted mt-2">Organized tabbed menu perfect for full-service restaurants</p>
        </DialogHeader>
        
        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
            <TabsTrigger value="mains">Main Courses</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>
          
          {Object.entries(menuCategories).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg" 
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-dark">{item.title}</h4>
                      <p className="text-sm text-brand-muted">{item.description}</p>
                      <span className="text-brand-red font-bold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
