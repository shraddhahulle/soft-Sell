
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const blogPosts = [
  {
    title: "How to Maximize ROI on Unused Software Licenses",
    excerpt: "Learn strategies for identifying and monetizing unused licenses in your organization.",
    date: "April 15, 2025",
    category: "Business",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    title: "The Legal Framework of Software License Reselling",
    excerpt: "Understanding the legal aspects of transferring software licenses to new owners.",
    date: "April 8, 2025",
    category: "Legal",
    author: "Mark Chen",
    readTime: "7 min read"
  },
  {
    title: "Enterprise Guide to License Management",
    excerpt: "Best practices for tracking and managing software assets in large organizations.",
    date: "March 28, 2025",
    category: "Enterprise",
    author: "Priya Patel",
    readTime: "10 min read"
  },
  {
    title: "Future of Software Licensing: Trends to Watch",
    excerpt: "Subscription models, blockchain licensing, and other emerging trends reshaping software distribution.",
    date: "March 15, 2025",
    category: "Technology",
    author: "James Wilson",
    readTime: "8 min read"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - SoftSell";
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
            >
              <div className="max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">SoftSell Blog</h1>
                <p className="text-xl">
                  Insights, guides, and industry news on software license management and monetization.
                </p>
              </div>
              
              {/* Featured Video */}
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold mb-6">Featured Video</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Understanding Software License Types</p>
                      <p className="text-sm text-muted-foreground">Educational video about different software license types would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <div className="grid gap-8 md:gap-10">
                  {blogPosts.map((post, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card 
                        className="hover:shadow-md transition-shadow duration-200 overflow-hidden"
                      >
                        <a href="#" className="block p-6">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span>By {post.author}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </a>
                      </Card>
                    </motion.div>
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

export default Blog;
