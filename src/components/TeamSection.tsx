import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { teamSections } from "@/data/team";

const TeamSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          The <span className="gradient-text">Team</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          The people behind Quest 2026
        </p>
      </ScrollReveal>

      <div className="space-y-12">
        {teamSections.map((section, si) => (
          <ScrollReveal key={section.title} delay={si * 0.1}>
            <h3 className="text-lg font-display font-semibold text-muted-foreground mb-4 uppercase tracking-wider text-center">
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {section.members.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col items-center p-5 rounded-xl bg-secondary w-44 hover-lift"
                >
                  <div className="w-30 h-30 rounded-full  bg-primary/10 flex items-center justify-center mb-3">
                    {/* <User size={24} className="text-primary" /> */}
                    <div className="w-30 h-30 rounded-lg  flex items-center justify-center">
                      <img src={m.image} className="w-30 h-30 rounded-lg  flex items-center justify-center"/>
                    </div>
                  </div>
                  {
                    m.image !== "https://res.cloudinary.com/dvvijlfio/image/upload/v1771828692/IMG-20260221-WA0050_pwipcb.jpg" ? (
                      <>
                        <span className="font-semibold text-sm text-center">
                          {m.name}
                        </span>
                        <span className="text-xs text-muted-foreground text-center mt-1">
                          {m.role}
                        </span>
                      </>
                    ) : <>
                        <span className="font-semibold text-sm text-center mt-4">
                          {m.name}
                        </span>
                        <span className="text-xs text-muted-foreground text-center mt-1">
                          {m.role}
                        </span>
                      </>                      
                  }

                  {
                    m.phone &&  <>
                          <span className="font-semibold text-sm text-center mt-4">
                            Contact
                          </span>
                          <span className="font-semibold text-sm text-center mt-4">
                                  {m.phone}
                          </span>
                    </>
                  }

                  
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
