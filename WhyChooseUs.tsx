
import { useState } from "react";
import { ShieldCheck, Zap, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-softsell-blue" />,
    title: "Fast Valuations",
    description: "Get a quote in minutes, not days.",
    details: "Our advanced algorithm analyzes current market rates and demand for software licenses to provide you with an accurate valuation within minutes. We track prices across multiple marketplaces and factor in variables such as license type, duration, and usage limits to ensure you get the best possible price."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-softsell-blue" />,
    title: "Secure Transactions",
    description: "All data is encrypted and handled with care.",
    details: "We use bank-level encryption (AES-256) to protect all sensitive information. License transfers occur through our secure platform with multiple verification steps. Your data is never sold to third parties, and we comply with GDPR, CCPA, and other relevant privacy regulations worldwide."
  },
  {
    icon: <Users className="h-10 w-10 text-softsell-blue" />,
    title: "Trusted by Companies Worldwide",
    description: "500+ businesses rely on us.",
    details: "From startups to Fortune 500 companies, over 500 organizations have trusted SoftSell to handle their software license transactions. Our platform has processed more than 10,000 licenses worth $15+ million in the last year alone, with a 98% satisfaction rating from our clients."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-softsell-blue" />,
    title: "No Hidden Fees",
    description: "Transparent process with zero surprise charges.",
    details: "We charge a simple, flat commission of 15% on successful sales. There are no listing fees, no valuation fees, and no payment processing fees. What you see is what you get - the price we quote is the amount you'll receive, minus our transparent commission."
  }
];

const WhyChooseUs = () => {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = (feature: typeof features[0]) => {
    setSelectedFeature(feature);
    setDialogOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've simplified the process of reselling software licenses while maintaining the highest standards of security and value.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className="border bg-card shadow-sm transition-all hover:shadow-md cursor-pointer h-full" 
                  onClick={() => handleCardClick(feature)}
                >
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-5"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Feature Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedFeature?.icon && (
                <motion.span 
                  className="scale-75"
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {selectedFeature.icon}
                </motion.span>
              )}
              {selectedFeature?.title}
            </DialogTitle>
            <DialogDescription>
              Learn more about this feature
            </DialogDescription>
          </DialogHeader>
          <motion.div 
            className="py-4"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{selectedFeature?.details}</p>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhyChooseUs;
