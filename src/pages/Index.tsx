import { useState } from "react";
import { Search, Globe, TrendingUp, Shield, FileText, Download } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ClassificationResult } from "@/components/ClassificationResult";
import { Header } from "@/components/Header";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {!showResult ? (
        <>
          <HeroSection 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
          <StatsSection />
          
          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose HSClassify?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From product description to compliant classification in 3 seconds
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Search className="w-8 h-8" />}
                  title="AI-Powered Intelligence"
                  description="Natural language processing that understands product descriptions and maps to correct HS codes with 96% accuracy"
                />
                <FeatureCard
                  icon={<Globe className="w-8 h-8" />}
                  title="150+ Countries"
                  description="Automatic expansion from 6-digit HS to country-specific 8-10 digit codes for comprehensive global coverage"
                />
                <FeatureCard
                  icon={<TrendingUp className="w-8 h-8" />}
                  title="Confidence Scoring"
                  description="Transparent 0-100% confidence scores with alternative suggestions when uncertain"
                />
                <FeatureCard
                  icon={<Shield className="w-8 h-8" />}
                  title="Compliance Alerts"
                  description="Instant warnings for restricted items, required licenses, and import prohibitions"
                />
                <FeatureCard
                  icon={<FileText className="w-8 h-8" />}
                  title="Complete Documentation"
                  description="Required certificates, COO, inspection requirements by country all in one place"
                />
                <FeatureCard
                  icon={<Download className="w-8 h-8" />}
                  title="Export Ready"
                  description="Download classification reports in PDF, CSV, JSON, or Excel format"
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <ClassificationResult 
          query={searchQuery}
          onNewSearch={() => {
            setShowResult(false);
            setSearchQuery("");
          }}
        />
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default Index;
