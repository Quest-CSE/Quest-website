import { useParams, Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import { ArrowLeft, User, IndianRupee, Clock, ListChecks, BookOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      <div className="pt-16 section-padding text-center">
        <h1 className="text-2xl font-display font-bold">Workshop not found</h1>
        <Link to="/workshops" className="text-primary mt-4 inline-block">← Back to workshops</Link>
      </div>
    );
  }

  return (
    // <div className="pt-16">
    //   <section className="section-padding">
    //     <div className="container-narrow max-w-3xl">
    //       <Link
    //         to="/workshops"
    //         className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
    //       >
    //         <ArrowLeft size={16} /> Back to workshops
    //       </Link>

    //       <ScrollReveal>
    //         <div className="rounded-2xl overflow-hidden card-shadow mb-8">
    //           <img src={workshop.image} alt={workshop.title} className="w-full aspect-[2/1] object-cover" />
    //         </div>
    //       </ScrollReveal>

    //       <ScrollReveal delay={0.1}>
    //         {workshop.badge && (
    //           <span className="inline-block gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
    //             {workshop.badge}
    //           </span>
    //         )}
    //         <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{workshop.title}</h1>

    //         {/* Mentor section */}
    //         <div className="flex items-center gap-4 bg-secondary rounded-xl p-5 mb-8">
    //           <img
    //             src={workshop.mentorImage}
    //             alt={workshop.mentor}
    //             className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
    //           />
    //           <div>
    //             <div className="flex items-center gap-2 text-primary mb-1">
    //               <User size={16} />
    //               <span className="font-semibold text-sm">Mentor</span>
    //             </div>
    //             <p className="font-medium">{workshop.mentor}</p>
    //           </div>
    //         </div>

    //         <p className="text-muted-foreground leading-relaxed mb-8">{workshop.description}</p>

    //         {/* Info grid */}
    //         <div className="grid sm:grid-cols-2 gap-4 mb-8">
    //           <div className="bg-secondary rounded-xl p-5">
    //             <div className="flex items-center gap-2 text-primary mb-2">
    //               <Clock size={18} />
    //               <span className="font-semibold text-sm">Duration</span>
    //             </div>
    //             <p className="text-sm">{workshop.duration}</p>
    //           </div>
    //           <div className="bg-secondary rounded-xl p-5">
    //             <div className="flex items-center gap-2 text-primary mb-2">
    //               <IndianRupee size={18} />
    //               <span className="font-semibold text-sm">Fee</span>
    //             </div>
    //             <p className="text-sm">{workshop.fee}</p>
    //           </div>
    //         </div>

    //         {/* Topics */}
    //         {workshop.topics && workshop.topics.length > 0 && (
    //           <div className="bg-secondary rounded-xl p-5 mb-8">
    //             <div className="flex items-center gap-2 text-primary mb-3">
    //               <BookOpen size={18} />
    //               <span className="font-semibold text-sm">Topics Covered</span>
    //             </div>
    //             <ul className="space-y-2">
    //               {workshop.topics.map((t, i) => (
    //                 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
    //                   <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
    //                   {t}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}

    //         {/* Prerequisites */}
    //         {workshop.prerequisites && workshop.prerequisites.length > 0 && (
    //           <div className="bg-secondary rounded-xl p-5 mb-8">
    //             <div className="flex items-center gap-2 text-primary mb-3">
    //               <ListChecks size={18} />
    //               <span className="font-semibold text-sm">Prerequisites</span>
    //             </div>
    //             <ul className="space-y-2">
    //               {workshop.prerequisites.map((p, i) => (
    //                 <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
    //                   <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
    //                   {p}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}

    //         <a
    //           href={workshop.registrationLink}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
    //           style={{ boxShadow: "var(--shadow-button)" }}
    //         >
    //           Register Now <ExternalLink size={16} />
    //         </a>
    //       </ScrollReveal>
    //     </div>
    //   </section>
    // </div>

    <div className="pt-16">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to workshops
          </Link>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden card-shadow mb-8">
              <img src={workshop.image} alt={workshop.title} className="w-full aspect-[2/1] object-cover" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {workshop.badge && (
              <span className="inline-block gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                {workshop.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{workshop.title}</h1>

            <h2 className="text-3x md:text-4x  font-display font-bold mb-6">Comming Soon..</h2>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WorkshopDetail;