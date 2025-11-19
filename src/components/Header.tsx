import { Ship, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Ship className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">HSClassify</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Search
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            API
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex bg-gradient-primary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <a href="#" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
              Search
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors">
              API
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors">
              Pricing
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors">
              Docs
            </a>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full bg-gradient-primary">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
