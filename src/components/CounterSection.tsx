import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

const CounterSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={20} suffix="+" label="Events" />
          <Counter end={3} label="Expert Workshops" />
          <Counter end={5000} suffix="+" label="Expected Participants" />
          <Counter end={50} suffix="+" label="Colleges Invited" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CounterSection;
