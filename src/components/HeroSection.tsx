import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src="https://jntuhceh.ac.in//web/photogallery/cse.jpg" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero-bg opacity-20" />
    </div>

    <div className="relative z-10 container-narrow px-4 py-32 text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 text-sm mb-6">
          <CalendarDays size={16} />
          <span>April 9 – 10, 2026</span>
        </div> */}

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
          Quest<span className="opacity-50">.</span>2026
        </h1>

        <p>Proudly Presented By</p>
        <img  height={500} width={500} src = "https://res.cloudinary.com/dvvijlfio/image/upload/v1774460489/beinginfinity_logo-removebg-preview_nuuolv.png"/>

        {/* <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-8 max-w-lg">
          National Level Technical Symposium — where innovation meets excellence. 
          Two days of events, workshops, and knowledge sharing.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            Explore Events <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            Learn More
          </Link>
        </div> */}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
