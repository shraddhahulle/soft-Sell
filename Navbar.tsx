
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-gradient-to-r from-softsell-blue to-softsell-purple"></div>
                <span className="ml-2 text-lg font-bold">SoftSell</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="/#why-choose-us" className="text-sm font-medium hover:text-primary">Why Choose Us</a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
            <a href="/#contact" className="text-sm font-medium hover:text-primary">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/guide">
              <Button variant="outline" size="sm">Resources</Button>
            </Link>
            <Link to="/support">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="h-8 w-8">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              variant="ghost" 
              size="icon"
              className="h-8 w-8"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a 
              href="/#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              How It Works
            </a>
            <a 
              href="/#why-choose-us" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              Why Choose Us
            </a>
            <a 
              href="/#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              Testimonials
            </a>
            <a 
              href="/#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              Contact
            </a>
            <Link 
              to="/guide" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              Resources
            </Link>
            <Link 
              to="/support" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={closeMenu}
            >
              Support
            </Link>
            <div className="pt-2">
              <Link to="/support" onClick={closeMenu}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
