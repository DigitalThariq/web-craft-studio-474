import { ArrowLeft, CheckCircle, AlertTriangle, FileText, Download, Globe, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CountrySelector } from "@/components/CountrySelector";
import { useState } from "react";

interface ClassificationResultProps {
  query: string;
  onNewSearch: () => void;
}

export const ClassificationResult = ({ query, onNewSearch }: ClassificationResultProps) => {
  const [selectedCountry, setSelectedCountry] = useState("SG");

  // Mock data - in real app, this would come from API
  const result = {
    hsCode: "8518.30.00",
    countryCode: "8518.30.00.11",
    confidence: 96,
    description: "Headphones and earphones, whether or not combined with a microphone, and sets consisting of a microphone and one or more loudspeakers",
    category: "Electrical Machinery and Equipment",
    dutyRate: 0,
    vatRate: 9,
    estimatedDuty: 0,
    restrictions: [
      "No specific restrictions for Singapore",
      "Requires compliance with safety standards (IEC 62368-1)"
    ],
    requiredDocs: [
      "Commercial Invoice",
      "Bill of Lading",
      "Packing List",
      "Certificate of Origin (optional for duty-free under FTA)"
    ],
    alternatives: [
      { code: "8518.40.00", description: "Audio-frequency electric amplifiers", confidence: 78 },
      { code: "8517.62.00", description: "Machines for reception, conversion of voice", confidence: 72 }
    ]
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 90) return { variant: "default" as const, label: "High Confidence", color: "bg-success" };
    if (confidence >= 75) return { variant: "secondary" as const, label: "Medium Confidence", color: "bg-warning" };
    return { variant: "destructive" as const, label: "Low Confidence", color: "bg-destructive" };
  };

  const confidenceBadge = getConfidenceBadge(result.confidence);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onNewSearch}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          New Search
        </Button>

        {/* Query Display */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Classification Results</h2>
          <p className="text-muted-foreground">
            For: <span className="font-medium text-foreground">"{query}"</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Result Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-4xl font-bold text-primary">{result.hsCode}</h3>
                    <Badge className={`${confidenceBadge.color} text-white`}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {confidenceBadge.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Category: {result.category}</p>
                  <div className="flex items-center gap-2 text-2xl font-semibold text-foreground">
                    <span className="text-sm text-muted-foreground">Confidence:</span>
                    {result.confidence}%
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Description
                  </h4>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>

                <CountrySelector 
                  selectedCountry={selectedCountry}
                  onCountryChange={setSelectedCountry}
                  countryCode={result.countryCode}
                />
              </div>
            </Card>

            {/* Duty & Compliance */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Duty & Tax Calculation
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Import Duty</div>
                  <div className="text-2xl font-bold text-success">{result.dutyRate}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Under FTA</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">VAT/GST</div>
                  <div className="text-2xl font-bold text-foreground">{result.vatRate}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Standard rate</div>
                </div>
              </div>
            </Card>

            {/* Alternative Classifications */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4">Alternative Classifications</h4>
              <div className="space-y-3">
                {result.alternatives.map((alt, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground">{alt.code}</span>
                      <Badge variant="outline">{alt.confidence}%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alt.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Restrictions */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-warning" />
                Restrictions & Compliance
              </h4>
              <div className="space-y-3">
                {result.restrictions.map((restriction, index) => (
                  <div key={index} className="flex gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{restriction}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Required Documents */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Required Documents
              </h4>
              <div className="space-y-2">
                {result.requiredDocs.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Export Actions */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4">Export Report</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export as CSV
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export as JSON
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
