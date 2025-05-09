
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SoftSell made it easy to sell old licenses from a discontinued project. Highly recommended!",
    name: "Emily Tran",
    title: "IT Manager",
    company: "TechNova Inc."
  },
  {
    quote: "We turned unused licenses into budget savings. The process was super fast and smooth.",
    name: "Raj Mehta",
    title: "Operations Director",
    company: "FinScope Ltd."
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what companies and individuals have to say about their experience with SoftSell.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className="p-6 bg-gradient-to-br from-white to-secondary border shadow-sm dark:from-gray-800 dark:to-gray-900 h-full"
                >
                  <div className="flex flex-col h-full">
                    <motion.div 
                      className="mb-6"
                      animate={{ 
                        rotateY: [0, 20, 0], 
                        rotateZ: [0, 5, 0] 
                      }}
                      transition={{ 
                        duration: 5, 
                        ease: "easeInOut", 
                        repeat: Infinity, 
                        repeatDelay: 1 
                      }}
                    >
                      <svg className="h-8 w-8 text-softsell-purple opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"></path>
                      </svg>
                    </motion.div>
                    <p className="text-foreground mb-8 flex-grow">{testimonial.quote}</p>
                    <div className="mt-auto">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
