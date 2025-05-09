
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pressReleases = [
  {
    title: "SoftSell Raises $12M Series A to Expand Software License Marketplace",
    date: "March 15, 2025",
    excerpt: "Funding will accelerate growth and expand platform capabilities."
  },
  {
    title: "SoftSell Partners with Major Enterprise Software Providers",
    date: "February 22, 2025",
    excerpt: "New partnerships streamline license transfer process for customers."
  },
  {
    title: "SoftSell Announces Integration with Leading IT Asset Management Solutions",
    date: "January 10, 2025",
    excerpt: "New integrations help businesses identify monetizable software assets."
  }
];

const mediaFeatures = [
  {
    publication: "TechCrunch",
    title: "SoftSell is Disrupting the Software Resale Market",
    date: "April 2, 2025"
  },
  {
    publication: "Forbes",
    title: "10 Startups Changing How Businesses Manage Software Assets",
    date: "March 18, 2025"
  },
  {
    publication: "Business Insider",
    title: "How SoftSell Helps Companies Recover Software Expenses",
    date: "February 5, 2025"
  }
];

const Press = () => {
  useEffect(() => {
    document.title = "Press - SoftSell";
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
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Press & Media</h1>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Media Resources</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Brand Assets</h3>
                    <p className="mb-4 text-muted-foreground">Download logos, product screenshots, and other brand assets.</p>
                    <Button>Download Media Kit</Button>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Press Contacts</h3>
                    <p className="mb-4 text-muted-foreground">For media inquiries, please contact our press team.</p>
                    <Button>Contact Press Team</Button>
                  </div>
                </div>
              </div>

              {/* Featured Video */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Latest Demo Video</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">SoftSell Platform Demo</p>
                      <p className="text-sm text-muted-foreground">Video showcasing software license marketplace would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
                <div className="space-y-8">
                  {pressReleases.map((release, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b pb-8 last:border-b-0"
                    >
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{release.title}</h3>
                      <p className="mb-4">{release.excerpt}</p>
                      <a href="#" className="text-primary font-medium hover:underline">Read full release</a>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">In the Media</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {mediaFeatures.map((feature, index) => (
                    <motion.a 
                      key={index}
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="block p-6 border rounded-lg hover:shadow-md transition-all hover:border-primary"
                    >
                      <span className="text-lg font-bold">{feature.publication}</span>
                      <h3 className="text-xl font-medium mt-2 mb-1">{feature.title}</h3>
                      <span className="text-sm text-muted-foreground">{feature.date}</span>
                    </motion.a>
                  ))}
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

export default Press;
