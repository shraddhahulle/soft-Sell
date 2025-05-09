
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Sample questions and responses for the chat
const sampleQuestions = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How is the valuation determined?",
  "How quickly will I get paid?"
];

const chatResponses = {
  "how do i sell my license": "Simply fill out our contact form with details about your license, and our team will guide you through the process. You can also upload your license details directly through your account once registered.",
  "what types of licenses do you accept": "We accept a wide range of software licenses including Enterprise Software, SaaS Subscriptions, Desktop Applications, Cloud Services, and more. Most major software providers are covered by our service.",
  "how is the valuation determined": "Our proprietary algorithm analyzes current market demand, remaining license validity, original purchase price, and other factors to provide you with the best possible valuation. We match your license with buyers in our marketplace to maximize its value.",
  "how quickly will i get paid": "Once you accept our offer, payments are typically processed within 24-48 hours. We support multiple payment methods including direct bank transfer, PayPal, and cryptocurrency for your convenience.",
  "default": "Thank you for your question! One of our license specialists will get back to you shortly. In the meantime, feel free to explore our FAQ section or ask another question."
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi there! How can I help you with software license reselling today?", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { sender: "user", text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      // Generate response
      const userQuery = inputValue.toLowerCase();
      let responseText = chatResponses.default;
      
      // Check if the query matches any of our predefined responses
      Object.keys(chatResponses).forEach(key => {
        if (userQuery.includes(key)) {
          responseText = chatResponses[key];
        }
      });
      
      // Add bot response
      const botMessage = { sender: "bot", text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500); // Random delay between 1-1.5s for realism
  };
  
  const handleSampleQuestion = (question) => {
    setInputValue(question);
    handleSubmit({ preventDefault: () => {} });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button with animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full shadow-lg w-14 h-14 p-0 bg-softsell-blue hover:bg-softsell-blue/90",
            isOpen ? "bg-foreground hover:bg-foreground/90" : ""
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </motion.div>
      
      {/* Chat widget with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-background border rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-softsell-blue text-white p-4">
              <h3 className="font-semibold">SoftSell Support</h3>
              <p className="text-xs text-white/70">We typically reply within minutes</p>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-[350px]">
              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "flex",
                        message.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-lg p-3 max-w-[80%]",
                          message.sender === "user"
                            ? "bg-softsell-blue text-white"
                            : "bg-muted"
                        )}
                      >
                        <div>{message.text}</div>
                        <div className="text-xs mt-1 opacity-70 text-right">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted rounded-lg p-3 max-w-[80%] flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-foreground/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-foreground/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-foreground/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Sample questions */}
            {messages.length < 3 && (
              <div className="p-3 border-t bg-secondary/50">
                <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSampleQuestion(question)}
                      className="bg-secondary text-xs py-1 px-2 rounded hover:bg-secondary/70 border"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Input area */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="p-3 border-t flex items-center space-x-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" size="icon" className="h-9 w-9">
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
