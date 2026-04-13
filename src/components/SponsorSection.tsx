import ScrollReveal from "./ScrollReveal";
import { sponsors } from "@/data/team";

const SponsorSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Our <span className="gradient-text">Sponsors</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
              className="bg-card rounded-xl p-6 flex items-center justify-center hover-lift card-shadow"
            >

              <div className="w-40 h-30 rounded-lg  flex items-center justify-center flex-col">
                {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
                <h2 className="text-lg">Title Sponsor</h2>
                <img src={"https://res.cloudinary.com/dvvijlfio/image/upload/v1774460489/beinginfinity_logo-removebg-preview_nuuolv.png"}/>
              </div>
            </div>


            <div
              className="bg-card rounded-xl p-6 flex items-center justify-center hover-lift card-shadow"
            >

              <div className="w-40 h-30 rounded-lg  flex items-center justify-center flex-col">
                {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
                <h2 className="text-lg">Flashmob Sponsor</h2>
                <img src={"https://upload.wikimedia.org/wikipedia/en/8/83/Singareni_Logo.gif"}/>
              </div>
            </div>
            <div
              className="bg-card rounded-xl p-6 flex items-center justify-center hover-lift card-shadow"
            >

              <div className="w-40 h-30 rounded-lg  flex items-center justify-center flex-col">
                {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
                <h2 className="text-xl">Special Thanks</h2>
                <img src={"https://res.cloudinary.com/dvvijlfio/image/upload/v1775497620/WhatsApp_Image_2026-04-06_at_23.11.48-removebg-preview_jl3zgr.png"}/>
              </div>
            </div>
        </div>
      </ScrollReveal>
    </div>

    {/* <div className="container-narrow mt-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Previous <span className="gradient-text">Sponsors</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Trusted by leading companies
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <div
              key={s}
              className="bg-card rounded-xl p-6 flex items-center justify-center hover-lift card-shadow"
            >

              <div className="w-40 h-30 rounded-lg  flex items-center justify-center">
                <img src={s}/>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div> */}
  </section>
);

export default SponsorSection;
