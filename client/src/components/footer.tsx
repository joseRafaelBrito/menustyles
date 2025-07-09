import { Utensils } from "lucide-react";
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Utensils className="text-brand-red text-2xl mr-3" />
              <span className="text-xl font-bold">MenuTech Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming restaurant experiences with innovative digital menu solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Digital Menu Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">QR Code Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MenuTech Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
