import { useState } from "react";
import { Search, Globe, TrendingUp, Shield, FileText, Download, ChevronRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ClassificationResult } from "@/components/ClassificationResult";
import { Header } from "@/components/Header";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {!showResult ? (
        <>
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />

          {/* Features Section - Styled like Netflix's "More Reasons to Join" */}
          <section className="py-16 px-4 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
                More Reasons to Join
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FeatureCard
                  icon={<Search className="w-8 h-8" />}
                  title="AI-Powered Intelligence"
                  description="Natural language processing that understands product descriptions with 96% accuracy."
                />
                <FeatureCard
                  icon={<Globe className="w-8 h-8" />}
                  title="150+ Countries"
                  description="Automatic expansion to country-specific 8-10 digit codes for global coverage."
                />
                <FeatureCard
                  icon={<TrendingUp className="w-8 h-8" />}
                  title="Confidence Scoring"
                  description="Transparent confidence scores with alternative suggestions when uncertain."
                />
                <FeatureCard
                  icon={<Shield className="w-8 h-8" />}
                  title="Compliance Alerts"
                  description="Instant warnings for restricted items, required licenses, and prohibitions."
                />
              </div>
            </div>
          </section>

          {/* FAQ or Additional Info Section could go here */}
          <section className="py-20 border-t border-gray-800 px-4 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to classify?</h2>
              <p className="text-gray-400 mb-8">Join thousands of traders using AI to streamline their compliance.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105"
              >
                Get Started
              </button>
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
  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 min-h-[280px] flex flex-col justify-end">
    <div className="absolute top-6 left-6 text-primary opacity-80 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ChevronRight className="text-primary w-6 h-6" />
    </div>
  </div>
);

export default Index;
