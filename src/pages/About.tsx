import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Building, Cpu } from "lucide-react";

const sections = [
  {
    icon: Cpu,
    title: "About Quest",
    paragraphs: [
      "Quest is the flagship national-level technical symposium organized by the Department of Computer Science & Engineering. Since its inception, Quest has been a platform for students to showcase their technical prowess, learn from industry experts, and network with peers from across the country.",
      "The 2026 edition promises to be the biggest yet — with competitive events, expert-led workshops, inspiring talks, and opportunities to engage with cutting-edge technology.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Department of CSE",
    paragraphs: [
      "The Department of Computer Science & Engineering is one of the premier departments at the university, known for its strong curriculum, dedicated faculty, and vibrant student community.",
      "With state-of-the-art labs, active research groups, and robust industry connections, the department consistently produces graduates who excel in both academia and industry.",
    ],
  },
  {
    icon: Building,
    title: "Our College",
    paragraphs: [
      "University Engineering College is a prestigious institution committed to academic excellence and holistic development. With a sprawling green campus, modern infrastructure, and a legacy of producing outstanding engineers and researchers.",
      "The college is recognized nationally for its contributions to engineering education and research, and has been consistently ranked among the top engineering institutions in the region.",
    ],
  },
];

const milestones = [
  { year: "2021", event: "Quest inaugurated with 200+ participants" },
  { year: "2022", event: "Expanded to national level with 500+ participants" },
  { year: "2023", event: "Virtual edition with record online engagement" },
  { year: "2024", event: "Hybrid mode with industry partnerships" },
  { year: "2025", event: "1000+ participants, 30+ events and workshops" },
  { year: "2026", event: "Biggest edition yet — you're invited!" },
];

const About = () => (
  <div className="pt-16">
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="About"
          highlight="Us"
          subtitle="Learn about Quest, our department, and our institution."
        />

        <div className="space-y-16">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <s.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
                  {s.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading title="Our" highlight="Journey" />

        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 0.08}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-display font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground pt-2.5 leading-relaxed">{m.event}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
