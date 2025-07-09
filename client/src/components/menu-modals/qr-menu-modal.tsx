import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QrCode } from "lucide-react";

interface QRMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRMenuModal({ isOpen, onClose }: QRMenuModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">QR Code Menu Demo</DialogTitle>
          <p className="text-brand-muted mt-2">Contactless ordering with QR codes</p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-brand-dark mb-4">Scan to View Menu</h4>
            <div className="bg-brand-light p-8 rounded-xl">
              <div className="w-48 h-48 bg-white border-4 border-brand-dark mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="mx-auto h-16 w-16 text-brand-dark mb-2" />
                  <p className="text-xs text-brand-muted">SAMPLE QR CODE</p>
                </div>
              </div>
              <p className="text-brand-muted text-sm">Point your phone camera at this code</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-brand-dark mb-4">How it works:</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-brand-muted">Customer scans QR code with phone camera</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-brand-muted">Digital menu opens instantly in browser</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-brand-muted">Browse menu, add items to cart</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <p className="text-brand-muted">Order sent directly to kitchen</p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light p-4 rounded-lg">
              <h5 className="font-semibold text-brand-dark mb-2">Benefits:</h5>
              <ul className="text-sm text-brand-muted space-y-1">
                <li>• No app download required</li>
                <li>• Contactless and hygienic</li>
                <li>• Works on any smartphone</li>
                <li>• Instant menu updates</li>
                <li>• Order tracking included</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
