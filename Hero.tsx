
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LicenseUploadDialog from "./LicenseUploadDialog";
import ValuationDialog from "./ValuationDialog";
import { motion } from "framer-motion";

const Hero = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [valuationDialogOpen, setValuationDialogOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-softsell-blue to-softsell-purple overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="md:text-left text-center md:order-1 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn Unused Software Into Profit
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-lg md:mx-0 mx-auto">
              SoftSell helps you sell your extra software licenses safely and quickly. Instant quotes, secure payments, zero hassle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-softsell-blue hover:bg-white/90"
                  onClick={() => setUploadDialogOpen(true)}
                >
                  Sell My Licenses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setValuationDialogOpen(true)}
                >
                  Get a Valuation
                </Button>
              </motion.div>
            </div>
            <p className="mt-4 text-white/70 text-sm">
              Trusted by 500+ companies worldwide
            </p>
          </motion.div>
          
          <motion.div 
            className="md:order-2 order-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl transform md:translate-y-0 -translate-y-4">
              <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-white/5 to-white/20 rounded-xl flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  {/* License illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 backdrop-blur rounded-xl border border-white/30 flex flex-col items-center justify-center p-4">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-white/30 mb-4 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/50"></div>
                      </motion.div>
                      <div className="w-3/4 h-2 bg-white/40 rounded-full mb-2"></div>
                      <div className="w-1/2 h-2 bg-white/40 rounded-full mb-4"></div>
                      <div className="w-2/3 h-8 bg-white/30 rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-0 right-0 w-12 h-12 bg-softsell-light-blue rounded-lg -translate-y-1/4 translate-x-1/4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-10 h-10 bg-softsell-light-purple rounded-full -translate-y-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dialogs */}
      <LicenseUploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <ValuationDialog open={valuationDialogOpen} onOpenChange={setValuationDialogOpen} />
    </section>
  );
};

export default Hero;
