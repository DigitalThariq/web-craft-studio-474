import { Search, ChevronRight } from "lucide-react";
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
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Global Trade" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Unlimited classifications,<br />
          <span className="text-primary">instant compliance.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
          Classify products instantly with AI. Accurate HS codes for 150+ countries.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative flex-1 w-full">
              <Input
                type="text"
                placeholder="Describe your product (e.g., wireless headphones)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-14 md:h-16 px-6 text-lg bg-black/60 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary/50 focus-visible:border-primary rounded-md backdrop-blur-sm w-full"
                disabled={isLoading}
              />
            </div>
            <Button 
              onClick={onSearch}
              disabled={isLoading || !searchQuery.trim()}
              className="h-14 md:h-16 px-8 bg-primary hover:bg-primary/90 text-white text-xl font-bold rounded-md min-w-[200px] shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⚡</span> Processing
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Get Started <ChevronRight className="w-6 h-6" />
                </span>
              )}
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <span className="uppercase tracking-widest text-xs font-semibold">Trending:</span>
            <button onClick={() => setSearchQuery("Electric Vehicle Battery")} className="hover:text-white hover:underline transition-colors">EV Batteries</button>
            <span className="text-gray-700">•</span>
            <button onClick={() => setSearchQuery("Cotton T-Shirt")} className="hover:text-white hover:underline transition-colors">Textiles</button>
            <span className="text-gray-700">•</span>
            <button onClick={() => setSearchQuery("Smartphone")} className="hover:text-white hover:underline transition-colors">Electronics</button>
          </div>
        </div>
      </div>
    </section>
  );
};
