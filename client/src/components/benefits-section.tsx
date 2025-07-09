import { RefreshCw, Smartphone, Heart, TrendingUp, DollarSign, Globe } from "lucide-react";

const benefits = [
  {
    icon: RefreshCw,
    title: "Live Updates",
    description: "Update prices, availability, and menu items instantly without reprinting. Keep your menu current 24/7."
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Optimized for all devices. Customers can easily browse your menu on their smartphones or tablets."
  },
  {
    icon: Heart,
    title: "Customer Engagement",
    description: "Interactive features like photos, descriptions, and reviews increase customer satisfaction and orders."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track popular items, customer preferences, and ordering patterns to optimize your menu strategy."
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Eliminate printing costs and reduce waste. One-time setup pays for itself quickly."
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Serve international customers with multi-language support and dietary information."
  }
];

export default function BenefitsSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Why Choose Digital Menus?
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Discover the advantages of modern digital menu systems that enhance customer experience and streamline operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-red rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">{benefit.title}</h3>
              <p className="text-brand-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
