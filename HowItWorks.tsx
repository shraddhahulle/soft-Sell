
import { useState } from "react";
import { Upload, Search, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import LicenseUploadDialog from "./LicenseUploadDialog";
import ValuationDialog from "./ValuationDialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const PaymentDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment setup process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Payment info submitted",
        description: "We'll process your payment once your licenses are verified.",
      });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Set Up Payment Method</DialogTitle>
          <DialogDescription>
            Choose how you'd like to receive payment for your software licenses.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Label htmlFor="payment-method">Payment Method</Label>
              <select 
                id="payment-method" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                defaultValue="bank"
                required
              >
                <option value="bank">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </motion.div>
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Label htmlFor="account-name">Account Name</Label>
              <Input id="account-name" placeholder="Enter name on your account" required />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Label htmlFor="account-email">Account Email</Label>
              <Input id="account-email" type="email" placeholder="Enter email for payment notifications" required />
            </motion.div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Setting Up...
                  </>
                ) : "Set Up Payment"}
              </Button>
            </motion.div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const HowItWorks = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [valuationDialogOpen, setValuationDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-white" />,
      title: "Upload Your License",
      description: "Securely send us details about the licenses you want to sell.",
      action: () => setUploadDialogOpen(true),
      buttonText: "Upload License"
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Get a Valuation",
      description: "We'll give you a fair market quote, usually within minutes.",
      action: () => setValuationDialogOpen(true),
      buttonText: "Get Quote"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Get Paid",
      description: "Once approved, get paid fast — directly to your bank or PayPal.",
      action: () => setPaymentDialogOpen(true),
      buttonText: "Set Up Payment"
    }
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SoftSell Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turn your unused software licenses into cash in three simple steps.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-softsell-blue to-softsell-purple mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-center text-muted-foreground mb-4">{step.description}</p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={step.action}
                >
                  {step.buttonText}
                </Button>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-[150%]">
                  <div className="h-0.5 w-12 bg-border mt-8 ml-12"></div>
                  <div className="h-3 w-3 border-t border-r transform rotate-45 ml-24 -mt-1.5 border-border"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dialogs */}
      <LicenseUploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <ValuationDialog open={valuationDialogOpen} onOpenChange={setValuationDialogOpen} />
      <PaymentDialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen} />
    </section>
  );
};

export default HowItWorks;
