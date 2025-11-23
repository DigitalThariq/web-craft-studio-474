import { Ship, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:text-4xl font-bold text-primary tracking-tighter uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            HSClassify
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {/* Netflix doesn't usually have nav links here on landing, but we'll keep them subtle */}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-transparent font-medium text-sm hidden md:inline-flex">
            English
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-1 rounded-sm text-sm h-8 md:h-9">
            Sign In
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 absolute w-full">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Button className="w-full bg-primary text-white mt-2">Sign In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
