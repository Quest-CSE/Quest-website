import ScrollReveal from "./ScrollReveal";
import { sponsors } from "@/data/team";

const SponsorSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Previous <span className="gradient-text">Sponsors</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Trusted by leading companies
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <div
              key={s}
              className="bg-card rounded-xl p-6 flex items-center justify-center hover-lift card-shadow"
            >

              <div className="w-40 h-30 rounded-lg  flex items-center justify-center">
                {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
                <img src={s}/>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SponsorSection;
