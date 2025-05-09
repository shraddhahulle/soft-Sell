
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email ? (
        /\S+@\S+\.\S+/.test(formData.email) ? "" : "Invalid email format"
      ) : "Email is required",
      company: formData.company ? "" : "Company is required",
      licenseType: formData.licenseType ? "" : "Please select a license type",
      message: formData.message ? "" : "Message is required"
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const sendConfirmationEmail = () => {
    // In a real implementation, this would call an API to send an email
    // For now, we're simulating this functionality
    console.log("Sending confirmation email to:", formData.email, "with data:", formData);
    
    // In a real application, you would integrate with an email service like SendGrid, 
    // MailChimp, or AWS SES through a backend API
    return new Promise(resolve => {
      // Simulate API delay
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Send confirmation email to user
        await sendConfirmationEmail();
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: ""
        });
        
        // Show success message
        toast.success("Your message has been sent! A confirmation has been emailed to you.");
      } catch (error) {
        toast.error("There was an issue sending your message. Please try again.");
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      licenseType: value
    }));
    
    // Clear error when user selects
    if (errors.licenseType) {
      setErrors(prev => ({
        ...prev,
        licenseType: ""
      }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-softsell-blue to-softsell-purple text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Turn Your Licenses Into Cash?</h2>
            <p className="mb-8 text-white/80">
              Fill out the form and one of our license specialists will get back to you within 24 hours with a valuation or any additional information you need.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/70">info@softsell-example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/70">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-white/70">123 Tech Avenue, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay-1">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 mt-1 ${
                      errors.name ? "border-red-400" : ""
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 mt-1 ${
                      errors.email ? "border-red-400" : ""
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-300 mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 mt-1 ${
                      errors.company ? "border-red-400" : ""
                    }`}
                    placeholder="Your company"
                  />
                  {errors.company && <p className="text-xs text-red-300 mt-1">{errors.company}</p>}
                </div>
                
                <div>
                  <Label htmlFor="licenseType">License Type</Label>
                  <Select 
                    value={formData.licenseType} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger 
                      id="licenseType" 
                      className={`bg-white/5 border-white/20 text-white mt-1 ${
                        errors.licenseType ? "border-red-400" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="microsoft">Microsoft Office</SelectItem>
                      <SelectItem value="adobe">Adobe</SelectItem>
                      <SelectItem value="autodesk">Autodesk</SelectItem>
                      <SelectItem value="saas">SaaS Subscription</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.licenseType && <p className="text-xs text-red-300 mt-1">{errors.licenseType}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 mt-1 min-h-[100px] ${
                      errors.message ? "border-red-400" : ""
                    }`}
                    placeholder="I'd like to know how much my old Autodesk licenses are worth."
                  />
                  {errors.message && <p className="text-xs text-red-300 mt-1">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-softsell-blue hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
