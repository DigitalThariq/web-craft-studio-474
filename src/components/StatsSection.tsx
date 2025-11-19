export const StatsSection = () => {
  return (
    <section className="py-16 px-4 border-b border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by 10,000+ businesses worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="150+" label="Countries Supported" />
          <StatItem value="96%" label="Classification Accuracy" />
          <StatItem value="5,000+" label="HS Code Categories" />
          <StatItem value="3 sec" label="Average Response Time" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);
