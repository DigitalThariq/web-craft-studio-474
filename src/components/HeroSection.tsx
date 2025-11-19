import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

export const HeroSection = ({ searchQuery, setSearchQuery, onSearch, isLoading }: HeroSectionProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">AI-Powered HS Code Classification</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          From Description to<br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Compliant Code</span> in Seconds
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Instantly classify products with AI. Get accurate HS codes, duty calculations, and compliance requirements for 150+ countries.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative flex flex-col sm:flex-row gap-3 bg-card p-3 rounded-2xl shadow-lg border border-border">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder='e.g., "wireless bluetooth headphones with noise cancellation"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 h-14 text-base border-0 focus-visible:ring-0 bg-transparent"
                disabled={isLoading}
              />
            </div>
            <Button 
              onClick={onSearch}
              disabled={isLoading || !searchQuery.trim()}
              className="h-14 px-8 bg-gradient-primary hover:opacity-90 transition-opacity font-semibold"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⚡</span>
                  Classifying...
                </>
              ) : (
                "Classify Now"
              )}
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Try examples:</span>
            <button 
              onClick={() => setSearchQuery("stainless steel water bottle")}
              className="px-3 py-1 bg-muted hover:bg-secondary rounded-full transition-colors"
            >
              Water Bottle
            </button>
            <button 
              onClick={() => setSearchQuery("cotton bed sheets")}
              className="px-3 py-1 bg-muted hover:bg-secondary rounded-full transition-colors"
            >
              Bed Sheets
            </button>
            <button 
              onClick={() => setSearchQuery("laptop computer")}
              className="px-3 py-1 bg-muted hover:bg-secondary rounded-full transition-colors"
            >
              Laptop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
