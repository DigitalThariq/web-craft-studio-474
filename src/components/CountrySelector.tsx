import { Globe, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  countryCode: string;
}

const countries = [
  { code: "SG", name: "Singapore", flag: "🇸🇬", hsDigits: "10-digit" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", hsDigits: "10-digit" },
  { code: "US", name: "United States", flag: "🇺🇸", hsDigits: "10-digit" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", hsDigits: "10-digit" },
  { code: "AU", name: "Australia", flag: "🇦🇺", hsDigits: "8-digit" },
  { code: "IN", name: "India", flag: "🇮🇳", hsDigits: "8-digit" },
  { code: "CN", name: "China", flag: "🇨🇳", hsDigits: "10-digit" },
  { code: "AE", name: "UAE", flag: "🇦🇪", hsDigits: "8-digit" },
];

export const CountrySelector = ({ selectedCountry, onCountryChange, countryCode }: CountrySelectorProps) => {
  const currentCountry = countries.find(c => c.code === selectedCountry);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-primary" />
        <h4 className="font-semibold text-foreground">Country-Specific Code</h4>
      </div>
      
      <Select value={selectedCountry} onValueChange={onCountryChange}>
        <SelectTrigger className="w-full h-12 bg-muted border-border">
          <SelectValue>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{currentCountry?.flag}</span>
              <div className="text-left">
                <div className="font-medium text-foreground">{currentCountry?.name}</div>
                <div className="text-xs text-muted-foreground">{currentCountry?.hsDigits}</div>
              </div>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-3 py-1">
                <span className="text-2xl animate-pulse-slow">{country.flag}</span>
                <div>
                  <div className="font-medium">{country.name}</div>
                  <div className="text-xs text-muted-foreground">{country.hsDigits}</div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="text-sm text-muted-foreground mb-1">Expanded Code for {currentCountry?.name}</div>
        <div className="text-2xl font-bold text-primary font-mono">{countryCode}</div>
      </div>
    </div>
  );
};
