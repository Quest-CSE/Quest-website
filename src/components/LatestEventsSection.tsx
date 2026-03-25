import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { workshops } from "@/data/workshops";

const LatestEventsSection = () => {

  const events = [
    ...workshops.map((w) => ({
      id: w.id,
      title: w.title,
      shortDescription: w.shortDescription,
      image: w.image,
      date: w.duration,
      type: "Workshop",
      link: `/workshops/${w.id}`,
    })),
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const prev = () => {
    stopAutoScroll();
    setIndex((i) => (i === 0 ? events.length - 1 : i - 1));
  };

  const next = () => {
    stopAutoScroll();
    setIndex((i) => (i === events.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === events.length - 1 ? 0 : i + 1));
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [events.length]);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow max-w-3xl">

        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">
              Latest Updates
            </p>
            <h2 className="text-3xl font-display font-bold">
              Events & Contests
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-xl shadow-lg">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="min-w-full bg-background">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[230px] object-cover"
                  />

                  <div className="p-5">

                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                      {event.type === "Contest" && <Trophy size={14} />}
                      {event.type}
                    </span>

                    <h3 className="text-xl font-display font-bold mt-1">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {event.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                      <Calendar size={13} />
                      {event.date}
                    </div>

                    <Link
                      to={event.link}
                      className="inline-block mt-4 gradient-bg text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold"
                    >
                      View Details
                    </Link>

                  </div>
                </div>
              ))}
            </div>

            {/* arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/90 p-2 rounded-full shadow"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/90 p-2 rounded-full shadow"
            >
              <ArrowRight size={16} />
            </button>

          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-5">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopAutoScroll();
                  setIndex(i);
                }}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default LatestEventsSection;