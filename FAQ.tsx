
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "What is SoftSell?",
        answer: "SoftSell is a platform that allows businesses and individuals to buy and sell unused software licenses. We provide a secure marketplace with verification processes to ensure legitimate transactions."
      },
      {
        question: "Is selling unused licenses legal?",
        answer: "Yes, in many cases. The legality depends on the specific terms of your license agreement. Many perpetual licenses can be transferred to new users, while subscription-based licenses may have different rules. We provide guidance on determining transferability."
      },
      {
        question: "How does SoftSell make money?",
        answer: "SoftSell charges a small commission on each successful transaction. We only get paid when you successfully sell your license, so our interests are aligned with yours."
      }
    ]
  },
  {
    category: "Selling Licenses",
    questions: [
      {
        question: "What types of licenses can I sell?",
        answer: "You can sell most perpetual licenses, as well as some subscription licenses with transferable rights. Enterprise agreements, OEM licenses, and educational licenses typically cannot be resold."
      },
      {
        question: "How do I determine if my license is transferable?",
        answer: "Check your license agreement for terms regarding transfer rights or assignment. Many perpetual licenses allow transfer to another entity. If you're unsure, you can also contact the software vendor directly."
      },
      {
        question: "How do you verify the licenses are legitimate?",
        answer: "We have a multi-step verification process that includes documentation review, license key validation, and in some cases, direct verification with the software vendor."
      },
      {
        question: "How long does it take to sell a license?",
        answer: "The timeframe varies based on demand for the specific software. Popular software licenses may sell within days, while more niche products might take longer. Our platform provides market demand indicators to help set expectations."
      }
    ]
  },
  {
    category: "Buying Licenses",
    questions: [
      {
        question: "Are these licenses genuine?",
        answer: "Yes, all licenses on our platform are verified for legitimacy before being listed. We have a strict verification process and guarantee the authenticity of every license sold."
      },
      {
        question: "What happens if I have issues with a purchased license?",
        answer: "Our platform offers a 30-day guarantee. If you encounter any issues with license activation or validity within this period, we'll work to resolve the issue or provide a full refund."
      },
      {
        question: "Can I get support from the software vendor after buying?",
        answer: "In most cases, yes. When a legitimate license transfer occurs, the new owner typically gains access to standard support options. However, premium support contracts may not transfer and would need to be purchased separately."
      }
    ]
  },
  {
    category: "Payments & Security",
    questions: [
      {
        question: "How does payment work?",
        answer: "We use an escrow system. Buyers pay SoftSell, and we hold the funds until the license transfer is successfully completed and verified. Once verified, the seller receives payment."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers in select countries. For larger enterprise transactions, we can also accommodate wire transfers."
      },
      {
        question: "Is my financial information secure?",
        answer: "Absolutely. We do not store any credit card information on our servers. All payment processing is handled through PCI-compliant payment processors with bank-level security encryption."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(faqItems);
  
  useEffect(() => {
    document.title = "FAQ - SoftSell";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredItems(faqItems);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = faqItems.map(category => {
      return {
        ...category,
        questions: category.questions.filter(
          item => 
            item.question.toLowerCase().includes(query) || 
            item.answer.toLowerCase().includes(query)
        )
      };
    }).filter(category => category.questions.length > 0);
    
    setFilteredItems(filtered);
  }, [searchQuery]);

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
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Frequently Asked Questions</h1>
              <p className="text-xl mb-10">
                Find answers to common questions about buying and selling software licenses on SoftSell.
              </p>

              {/* Featured Video */}
              <div className="mb-10">
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Common Questions About Software Licensing</p>
                      <p className="text-sm text-muted-foreground">Video explaining licensing concepts would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search frequently asked questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                  {searchQuery && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-2 top-2"
                      onClick={() => setSearchQuery("")}
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredItems.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          >
                            <AccordionItem value={`${categoryIndex}-${itemIndex}`}>
                              <AccordionTrigger className="text-left">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="py-2">
                                  {item.answer}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </motion.div>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                <p className="mb-6">
                  Our support team is ready to assist you with any additional questions.
                </p>
                <a href="/support">
                  <Button>Contact Support</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
