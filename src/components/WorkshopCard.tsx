import { Clock, ExternalLink } from "lucide-react";
import type { Workshop } from "@/data/workshops";

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => (
  <div className="group rounded-2xl overflow-hidden bg-card card-shadow hover-lift">
    <div className="aspect-[16/9] overflow-hidden relative">
      <img
        src={workshop.image}
        alt={workshop.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {workshop.badge && (
        <span className="absolute top-4 right-4 gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          {workshop.badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-display font-bold text-xl mb-1">{workshop.title}</h3>
      <p className="text-sm text-primary font-medium mb-3">by {workshop.mentor}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {workshop.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock size={14} /> {workshop.duration}</span>
          <span className="font-semibold text-foreground">{workshop.fee}</span>
        </div>
        <a
          href={workshop.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 gradient-bg text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg transition-transform hover:scale-105"
        >
          Register <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </div>
);

export default WorkshopCard;
