import { useParams, Link } from "react-router-dom";
import {
  events,
  type EventItem,
} from "@/data/events";
import {
  ArrowLeft,
  User,
  ListChecks,
  IndianRupee,
  ExternalLink,
  Trophy,
  Users,
  Calendar,
  Code2,
  GraduationCap,
  ClipboardCheck,
  Scale,
  CreditCard,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id) as EventItem | undefined;

  if (!event) {
    return (
      <div className="pt-16 section-padding text-center">
        <h1 className="text-2xl font-display font-bold">Event not found</h1>
        <Link to="/events" className="text-primary mt-4 inline-block">
          ← Back to events
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to events
          </Link>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden card-shadow mb-8">
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {event.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {event.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {event.host && (
                <div className="bg-secondary rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <User size={18} />
                    <span className="font-semibold text-sm">Host / Organizer</span>
                  </div>
                  <p className="text-sm">{event.host}</p>
                </div>
              )}
              <div className="bg-secondary rounded-xl p-5">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <IndianRupee size={18} />
                  <span className="font-semibold text-sm">Entry Fee</span>
                </div>
                <p className="text-sm">{event.entryFee}</p>
              </div>
              {event.teamSize && (
                <div className="bg-secondary rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Users size={18} />
                    <span className="font-semibold text-sm">Team Size</span>
                  </div>
                  <p className="text-sm">{event.teamSize}</p>
                </div>
              )}
              {event.date && (
                <div className="bg-secondary rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={18} />
                    <span className="font-semibold text-sm">Date</span>
                  </div>
                  <p className="text-sm">{event.date}</p>
                </div>
              )}
              {event.languages && (
                <div className="bg-secondary rounded-xl p-5 sm:col-span-2">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Code2 size={18} />
                    <span className="font-semibold text-sm">Languages Allowed</span>
                  </div>
                  <p className="text-sm">{event.languages}</p>
                </div>
              )}
            </div>

            {event.rewards && event.rewards.length > 0 && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Trophy size={18} />
                  <span className="font-semibold text-sm">Rewards</span>
                </div>
                <ul className="space-y-2">
                  {event.rewards.map((r, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.rounds && event.rounds.length > 0 && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <ListChecks size={18} />
                  <span className="font-semibold text-sm">Event Rounds</span>
                </div>
                <div className="space-y-6">
                  {event.rounds.map((round, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-foreground mb-2">
                        {round.title}
                        {round.fee && (
                          <span className="text-primary text-sm font-normal ml-2">
                            (Fee: {round.fee})
                          </span>
                        )}
                      </h4>
                      <ul className="space-y-1.5">
                        {round.details.map((d, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.rules.length > 0 && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <ListChecks size={18} />
                  <span className="font-semibold text-sm">Rules</span>
                </div>
                <ul className="space-y-2">
                  {event.rules.map((r, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.facultyCoordinators &&
              event.facultyCoordinators.length > 0 && (
                <div className="bg-secondary rounded-xl p-5 mb-8">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <GraduationCap size={18} />
                    <span className="font-semibold text-sm">
                      Faculty Coordinators
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {event.facultyCoordinators.map((f, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {event.requirements && event.requirements.length > 0 && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <ClipboardCheck size={18} />
                  <span className="font-semibold text-sm">Event Requirements</span>
                </div>
                <ul className="space-y-2">
                  {event.requirements.map((r, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.judgingCriteria && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Scale size={18} />
                  <span className="font-semibold text-sm">Judging Criteria</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.judgingCriteria}</p>
              </div>
            )}

            {event.paymentNote && (
              <div className="bg-secondary rounded-xl p-5 mb-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <CreditCard size={18} />
                  <span className="font-semibold text-sm">Registration</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.paymentNote}</p>
              </div>
            )}

            {event.registrationLink ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-transform hover:scale-105"
                style={{ boxShadow: "var(--shadow-button)" }}
              >
                Register Now <ExternalLink size={16} />
              </a>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Registration link will be shared soon. Stay tuned!
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
