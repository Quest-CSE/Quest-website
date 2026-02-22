import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const Events = () => (
  <div className="pt-16">
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Technical"
          highlight="Events"
          subtitle="Compete, learn, and showcase your skills across a range of exciting events."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <ScrollReveal key={e.id} delay={i * 0.08}>
              <EventCard event={e} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Events;
