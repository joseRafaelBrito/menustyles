import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = insertContactSubmissionSchema.extend({
  restaurantName: z.string().min(1, "Restaurant name is required"),
  contactName: z.string().min(1, "Your name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  restaurantType: z.string().min(1, "Please select restaurant type"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await submitMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  const restaurantType = watch("restaurantType");

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Ready to Transform Your Menu?
            </h2>
            <p className="text-xl text-brand-muted mb-8">
              Get started with MenuTech Pro today. Our team will help you create the perfect digital menu solution for your restaurant.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">Phone</h3>
                  <p className="text-brand-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">Email</h3>
                  <p className="text-brand-muted">hello@menutechpro.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                  <Clock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">Response Time</h3>
                  <p className="text-brand-muted">Within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-brand-dark mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center hover:bg-brand-red transition-colors">
                  <SiFacebook className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center hover:bg-brand-red transition-colors">
                  <SiX className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center hover:bg-brand-red transition-colors">
                  <SiInstagram className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center hover:bg-brand-red transition-colors">
                  <SiLinkedin className="text-white h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="bg-brand-light">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Restaurant Name</label>
                  <Input 
                    {...register("restaurantName")}
                    placeholder="Donatello's Pizza"
                    className="bg-white"
                  />
                  {errors.restaurantName && (
                    <p className="text-red-500 text-sm mt-1">{errors.restaurantName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Your Name</label>
                  <Input 
                    {...register("contactName")}
                    placeholder="John Smith"
                    className="bg-white"
                  />
                  {errors.contactName && (
                    <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Email</label>
                  <Input 
                    {...register("email")}
                    type="email"
                    placeholder="john@donatellospizza.com"
                    className="bg-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Phone</label>
                  <Input 
                    {...register("phone")}
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Restaurant Type</label>
                  <Select value={restaurantType} onValueChange={(value) => setValue("restaurantType", value)}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select restaurant type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fine Dining">Fine Dining</SelectItem>
                      <SelectItem value="Casual Dining">Casual Dining</SelectItem>
                      <SelectItem value="Fast Casual">Fast Casual</SelectItem>
                      <SelectItem value="Cafe">Cafe</SelectItem>
                      <SelectItem value="Food Truck">Food Truck</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.restaurantType && (
                    <p className="text-red-500 text-sm mt-1">{errors.restaurantType.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Message</label>
                  <Textarea 
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your digital menu needs..."
                    className="bg-white"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red text-white hover:bg-red-600 py-4"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
