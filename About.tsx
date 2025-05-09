
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "About Us - SoftSell";
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
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About SoftSell</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6">
                  Founded in 2021, SoftSell has revolutionized the way businesses and individuals monetize unused software licenses.
                </p>
                
                <div className="my-10">
                  <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-lg font-medium mb-2">Software License Management Video</p>
                        <p className="text-sm text-muted-foreground">Video about software license management would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
                <p>
                  At SoftSell, we're on a mission to reduce software waste and create a more sustainable digital ecosystem. 
                  By providing a secure marketplace for unused software licenses, we help businesses recoup costs and 
                  give others access to affordable software solutions.
                </p>
                
                <h2 className="text-2xl font-bold mt-10 mb-4">Our Story</h2>
                <p>
                  SoftSell began when our founders, all tech industry veterans, noticed a recurring problem: companies 
                  often purchased more software licenses than they needed, resulting in significant waste. Seeing an 
                  opportunity to solve this issue while creating value, they built the first version of our platform 
                  and quickly gained traction in the market.
                </p>
                
                <h2 className="text-2xl font-bold mt-10 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Integrity:</strong> We maintain the highest standards of honesty and transparency.</li>
                  <li><strong>Innovation:</strong> We continuously improve our platform to better serve our users.</li>
                  <li><strong>Sustainability:</strong> We're committed to reducing digital waste and promoting resource efficiency.</li>
                  <li><strong>Security:</strong> We prioritize the protection of our users' data and transactions.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
