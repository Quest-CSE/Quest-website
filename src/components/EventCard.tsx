import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { EventItem } from "@/data/events";

const EventCard = ({ event }: { event: EventItem }) => (
  <Link
    to={`/events/${event.id}`}
    className="group block rounded-2xl overflow-hidden bg-card card-shadow hover-lift"
  >
    <div className="aspect-[3/2] overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {event.shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

export default EventCard;
