
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const guideContent = [
  {
    id: "selling",
    title: "Selling Licenses",
    content: [
      {
        title: "Step 1: Identify Eligible Licenses",
        description: "Not all software licenses can be transferred. Look for perpetual licenses or those with transfer rights explicitly stated in your agreement."
      },
      {
        title: "Step 2: Verify Transfer Rights",
        description: "Check your license agreement or contact the software vendor to confirm transferability."
      },
      {
        title: "Step 3: Gather Documentation",
        description: "Collect proof of purchase, license keys, and any other relevant documentation."
      },
      {
        title: "Step 4: List Your License",
        description: "Upload license details to our platform and set your asking price."
      },
      {
        title: "Step 5: Complete the Transfer",
        description: "Once matched with a buyer, follow our secure transfer process."
      }
    ]
  },
  {
    id: "buying",
    title: "Buying Licenses",
    content: [
      {
        title: "Step 1: Browse Available Licenses",
        description: "Search our marketplace for the software you need."
      },
      {
        title: "Step 2: Verify Compatibility",
        description: "Ensure the license version is compatible with your systems and meets your requirements."
      },
      {
        title: "Step 3: Purchase Securely",
        description: "Use our secure payment system to complete your purchase."
      },
      {
        title: "Step 4: License Transfer",
        description: "Follow the guided process to receive your license and documentation."
      },
      {
        title: "Step 5: Activate Your Software",
        description: "Use the provided instructions to register your newly acquired license."
      }
    ]
  },
  {
    id: "valuation",
    title: "License Valuation",
    content: [
      {
        title: "Understanding License Value",
        description: "License values are determined by several factors including software type, version, remaining subscription time, and market demand."
      },
      {
        title: "Using Our Valuation Tool",
        description: "Our automated tool analyzes current market conditions and similar listings to suggest an optimal price."
      },
      {
        title: "Factors Affecting Value",
        description: "Learn about the key factors that can increase or decrease your license's resale value."
      },
      {
        title: "Maximizing Your Return",
        description: "Tips for presenting your license to attract more buyers and achieve the best price."
      }
    ]
  }
];

const Guide = () => {
  const [currentTab, setCurrentTab] = useState("selling");
  
  useEffect(() => {
    document.title = "Guide - SoftSell";
    window.scrollTo(0, 0);
  }, []);

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
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Guide to Software License Trading</h1>
              <p className="text-xl mb-12">
                Everything you need to know about buying and selling software licenses on our platform.
              </p>

              {/* Featured Video */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">How SoftSell Works</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Complete Guide to Using SoftSell</p>
                      <p className="text-sm text-muted-foreground">Tutorial video about using the platform would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <Tabs value={currentTab} onValueChange={setCurrentTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    {guideContent.map(guide => (
                      <TabsTrigger key={guide.id} value={guide.id}>{guide.title}</TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {guideContent.map(guide => (
                    <TabsContent key={guide.id} value={guide.id}>
                      <div className="mt-6 space-y-8">
                        {guide.content.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border-l-4 border-primary pl-6 py-2"
                          >
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p>{step.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
                <p className="mb-6">
                  Our support team is always ready to assist you with any questions or issues.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/faq" className="text-primary font-medium hover:underline">Visit our FAQ</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/support" className="text-primary font-medium hover:underline">Contact Support</a>
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

export default Guide;
