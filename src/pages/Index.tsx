import HeroSection from "@/components/HeroSection";
import CounterSection from "@/components/CounterSection";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";
import LocationSection from "@/components/LocationSection";
import FeedbackSection from "@/components/FeedbackSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <>
    <HeroSection />

    {/* Dates highlight */}
    <section className="section-padding">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Dates to look forward to
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            April 9 – 10, 2026
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join us for two days packed with competitive events, hands-on workshops, 
            expert talks, and unforgettable experiences at our national-level technical symposium.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <CounterSection />
    <SponsorSection />
    <TeamSection />
    <LocationSection />
    <FeedbackSection />
  </>
);

export default Index;
