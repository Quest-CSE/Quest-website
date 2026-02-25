import ScrollReveal from "./ScrollReveal";
import { MapPin } from "lucide-react";

const LocationSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          <span className="gradient-text">Location</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Find us at the campus
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="rounded-2xl overflow-hidden card-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.5779375298739!2d78.39238355348238!3d17.492995812754405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f32f65e683%3A0x573390fb42b04da5!2sCSE%20DEPARTMENT!5e0!3m2!1sen!2sin!4v1771761500445!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
          <MapPin size={16} />
          <span>CSE dept, JNTUH, Hyderabad</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default LocationSection;
