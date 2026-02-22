import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionHeading = ({ title, highlight, subtitle }: SectionHeadingProps) => (
  <ScrollReveal>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
      )}
    </div>
  </ScrollReveal>
);

export default SectionHeading;
