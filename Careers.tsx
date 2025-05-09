
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const careers = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    title: "Customer Success Specialist",
    department: "Customer Support",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time"
  }
];

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - SoftSell";
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
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h1>
              <p className="text-xl mb-12">
                We're building the future of software license management. If you're passionate about technology and sustainability, we'd love to have you on board.
              </p>
              
              <div className="my-10">
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Our Culture & Values Video</p>
                      <p className="text-sm text-muted-foreground">Video about our company culture would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-10 mb-6">Open Positions</h2>
              
              <div className="grid gap-6">
                {careers.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-muted-foreground mt-1">{job.department} • {job.location} • {job.type}</p>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-secondary/50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Don't see a role that fits?</h3>
                <p className="mb-6">
                  We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future openings.
                </p>
                <Button>Submit Your Resume</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
