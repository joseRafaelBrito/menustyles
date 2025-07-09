import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PhotoMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoMenuModal({ isOpen, onClose }: PhotoMenuModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">Donatello's Fine Dining</DialogTitle>
          <p className="text-brand-muted mt-2">Experience our full-screen photo menu perfect for upscale dining</p>
        </DialogHeader>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Gourmet appetizer plate with artistic presentation" 
              className="w-full h-64 object-cover rounded-lg shadow-lg" 
            />
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-brand-dark">Truffle Risotto</h4>
              <p className="text-brand-muted">Creamy arborio rice with black truffle, parmesan, and fresh herbs</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-brand-red">$28</span>
                <Button className="bg-brand-red text-white hover:bg-red-600">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-brand-dark">Grilled Salmon</h4>
              <p className="text-brand-muted">Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-brand-red">$32</span>
                <Button className="bg-brand-red text-white hover:bg-red-600">
                  Order Now
                </Button>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Premium grilled salmon with gourmet garnishes" 
              className="w-full h-64 object-cover rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
