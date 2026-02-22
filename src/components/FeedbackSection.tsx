import ScrollReveal from "./ScrollReveal";
import { MessageSquare } from "lucide-react";

const FeedbackSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow text-center">
      <ScrollReveal>
        <MessageSquare size={40} className="mx-auto text-primary mb-4" />
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          We Value Your <span className="gradient-text">Feedback</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Help us make Quest even better. Share your thoughts, suggestions, and experience.
        </p>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gradient-bg px-8 py-3 rounded-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
          style={{ boxShadow: "var(--shadow-button)" }}
        >
          Give Feedback
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FeedbackSection;
