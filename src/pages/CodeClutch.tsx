import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Trophy,
  IndianRupee,
  Calendar,
  MapPin,
  Users,
  ExternalLink
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
// import poster from "@/assets/Codeclutch poster (1).png";

const CodeClutch = () => {

  const rounds = [
    "Round 1 — 20 March 2026 (Online)", 
    "Round 2 — 23 March 2026 (10:30 AM)",
    "Round 3 — 23 March 2026 (02:30 PM)"
  ];

  const coordinators = [
    "Kamesh — 9550888175",
    "Rusheeshwar — 9110763829"
  ];

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to events
          </Link>

          <ScrollReveal>
            <img
              src={"https://res.cloudinary.com/dvvijlfio/image/upload/v1774430847/WhatsApp_Image_2026-03-25_at_2.57.07_PM_znkx04.jpg"}
              alt="CodeClutch Contest"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="inline-block gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              Coding Contest
            </span>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              CodeClutch 2026
            </h1>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              CodeClutch is a competitive coding contest conducted by the
              Department of Computer Science and Engineering at JNTUH as part
              of QUEST 2026. Participants will solve challenging problems
              through multiple rounds to compete for exciting prizes.
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">

              <div className="bg-secondary rounded-xl p-5">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Trophy size={18} />
                  <span className="font-semibold text-sm">Prize Pool</span>
                </div>
                <p className="text-sm">₹25,000 for Top 5</p>
              </div>

              <div className="bg-secondary rounded-xl p-5">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <IndianRupee size={18} />
                  <span className="font-semibold text-sm">Entry Fee</span>
                </div>
                <p className="text-sm">₹199 (Early Bird)</p>
              </div>

              <div className="bg-secondary rounded-xl p-5">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={18} />
                  <span className="font-semibold text-sm">Contest Rounds</span>
                </div>

                <ul className="text-sm space-y-1">
                  {rounds.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-xl p-5">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin size={18} />
                  <span className="font-semibold text-sm">Location</span>
                </div>
                <p className="text-sm">CSE Dept, JNTUH</p>
              </div>
            </div>

            {/* Coordinators */}
            <div className="bg-secondary rounded-xl p-5 mb-8">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Users size={18} />
                <span className="font-semibold text-sm">
                  Student Coordinators
                </span>
              </div>

              <ul className="space-y-2">
                {coordinators.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Register button */}
            <a
              href="https://forms.gle/Qy84NZVM2o2bLSXC7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              Register Now <ExternalLink size={16} />
            </a>

          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CodeClutch;
