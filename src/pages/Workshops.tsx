import { workshops } from "@/data/workshops";
import WorkshopCard from "@/components/WorkshopCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const Workshops = () => (
  <div className="pt-16">
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Expert"
          highlight="Workshops"
          subtitle="Intensive, hands-on sessions led by industry professionals and academics."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <ScrollReveal key={w.id} delay={i * 0.1}>
              <WorkshopCard workshop={w} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Workshops;
