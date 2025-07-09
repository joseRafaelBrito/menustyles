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
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Bruschetta",
      description: "Fresh tomatoes, basil, garlic on toasted bread",
      price: "$8.50"
    },
    {
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Caesar Salad",
      description: "Crisp romaine, parmesan, croutons, Caesar dressing",
      price: "$12.00"
    }
  ],
  mains: [
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil, olive oil",
      price: "$16.50"
    },
    {
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Spaghetti Carbonara",
      description: "Eggs, bacon, parmesan, black pepper",
      price: "$18.00"
    }
  ],
  drinks: [
    {
      image: "https://images.unsplash.com/photo-1546195643-70db1fe30985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "House Wine",
      description: "Red, white, or rosé by the glass",
      price: "$8.00"
    },
    {
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Signature Cocktail",
      description: "Ask your server about today's special",
      price: "$12.00"
    }
  ],
  desserts: [
    {
      image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
      title: "Tiramisu",
      description: "Classic Italian dessert with mascarpone",
      price: "$7.50"
    },
    {
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=100",
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
