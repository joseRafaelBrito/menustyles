import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Coffee, Cookie, Leaf, Ham, Apple } from "lucide-react";

interface GridMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    icon: Coffee,
    title: "Cappuccino",
    description: "Rich espresso with steamed milk foam",
    price: "$4.50"
  },
  {
    icon: Cookie,
    title: "Croissant",
    description: "Fresh buttery pastry, plain or almond",
    price: "$3.25"
  },
  {
    icon: Leaf,
    title: "Avocado Toast",
    description: "Smashed avocado on sourdough bread",
    price: "$8.75"
  },
  {
    icon: Ham,
    title: "Breakfast Wrap",
    description: "Eggs, bacon, cheese in flour tortilla",
    price: "$6.50"
  },
  {
    icon: Leaf,
    title: "Green Smoothie",
    description: "Spinach, banana, mango, coconut milk",
    price: "$5.95"
  },
  {
    icon: Apple,
    title: "Apple Pie",
    description: "Homemade with cinnamon and vanilla",
    price: "$4.25"
  }
];

export default function GridMenuModal({ isOpen, onClose }: GridMenuModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">Sunrise Cafe</DialogTitle>
          <p className="text-brand-muted mt-2">Clean grid layout perfect for cafes and quick-service restaurants</p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-brand-light p-6 rounded-xl text-center">
              <item.icon className="mx-auto h-12 w-12 text-brand-red mb-4" />
              <h4 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h4>
              <p className="text-brand-muted text-sm mb-4">{item.description}</p>
              <span className="text-xl font-bold text-brand-red">{item.price}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
