
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const supportTopics = [
  { value: "account", label: "Account Issues" },
  { value: "selling", label: "Selling Licenses" },
  { value: "buying", label: "Buying Licenses" },
  { value: "payment", label: "Payment Problems" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other" }
];

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Support Center - SoftSell";
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Support request submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Support Center</h1>
              <p className="text-xl mb-12">
                We're here to help you with any questions or issues you may have.
              </p>

              {/* Featured Video */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Support Video Guides</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Resolving Common License Transfer Issues</p>
                      <p className="text-sm text-muted-foreground">Troubleshooting video would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="contact" className="mb-12">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                  <TabsTrigger value="selfhelp">Self Help</TabsTrigger>
                  <TabsTrigger value="status">System Status</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                      <p className="mb-6">
                        Fill out this form and our support team will get back to you as soon as possible.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                          </label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="topic" className="block text-sm font-medium mb-1">
                            Topic
                          </label>
                          <Select value={topic} onValueChange={setTopic} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select topic" />
                            </SelectTrigger>
                            <SelectContent>
                              {supportTopics.map((topic) => (
                                <SelectItem key={topic.value} value={topic.value}>
                                  {topic.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={5}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </form>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 6pm EST<br />
                          Saturday - Sunday: Closed
                        </p>
                        <p className="mt-2 text-sm">
                          We typically respond to inquiries within 24 business hours.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                        <p className="text-muted-foreground mb-4">
                          For urgent issues that require immediate attention:
                        </p>
                        <Button variant="outline" className="w-full">
                          Start Emergency Chat
                        </Button>
                      </div>
                      
                      <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Already have a case?</h3>
                        <Input placeholder="Enter case number" className="mb-4" />
                        <Button variant="outline" className="w-full">
                          Track Status
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="selfhelp" className="pt-6">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Quick Solutions</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <a href="/faq" className="p-4 border rounded-lg hover:border-primary transition-colors">
                          <h4 className="font-bold mb-2">Frequently Asked Questions</h4>
                          <p className="text-sm text-muted-foreground">
                            Browse our comprehensive FAQ section for answers to common questions.
                          </p>
                        </a>
                        <a href="/guide" className="p-4 border rounded-lg hover:border-primary transition-colors">
                          <h4 className="font-bold mb-2">User Guides</h4>
                          <p className="text-sm text-muted-foreground">
                            Step-by-step guides for using all features of our platform.
                          </p>
                        </a>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold mb-2">Troubleshooting Tools</h4>
                          <p className="text-sm text-muted-foreground">
                            Use our diagnostic tools to identify and fix common issues.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold mb-2">Video Tutorials</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual guides demonstrating how to use platform features.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4">Popular Articles</h3>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="flex items-center gap-2 hover:text-primary">
                            <span>•</span>
                            <span>How to verify a license is transferable</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 hover:text-primary">
                            <span>•</span>
                            <span>Troubleshooting license activation problems</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 hover:text-primary">
                            <span>•</span>
                            <span>Understanding payment processing times</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 hover:text-primary">
                            <span>•</span>
                            <span>How to maximize your license selling price</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 hover:text-primary">
                            <span>•</span>
                            <span>Account security best practices</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="status" className="pt-6">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold">System Status</h3>
                      <span className="text-green-500 font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                        All Systems Operational
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold">Website & User Interface</h4>
                          <span className="text-green-500">Operational</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last incident: None in the past 30 days
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold">Payment Processing</h4>
                          <span className="text-green-500">Operational</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last incident: None in the past 30 days
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold">License Verification System</h4>
                          <span className="text-green-500">Operational</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last incident: 14 days ago (resolved)
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold">API Services</h4>
                          <span className="text-green-500">Operational</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Last incident: None in the past 30 days
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Scheduled Maintenance</h3>
                      <div className="p-4 border rounded-lg">
                        <p className="text-muted-foreground">
                          No scheduled maintenance at this time. When maintenance is scheduled, it will be displayed here.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Community Support</h3>
                <p className="max-w-2xl mx-auto mb-6">
                  Connect with other SoftSell users to share experiences, tips, and solutions.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Join Community Forum</Button>
                  <Button variant="outline">View Knowledge Base</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
