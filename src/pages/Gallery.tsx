import { useState } from "react";
import { gallerySections } from "@/data/gallery";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            title="Photo"
            highlight="Gallery"
            subtitle="Moments captured from our events and campus life."
          />

          {gallerySections.map((section, si) => (
            <div key={section.id} className="mb-16 last:mb-0">
              <ScrollReveal delay={si * 0.05}>
                <h3 className="text-xl font-display font-semibold mb-6">{section.title}</h3>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {section.photos.map((photo, pi) => (
                  <ScrollReveal key={pi} delay={pi * 0.05}>
                    <button
                      onClick={() => setLightbox(photo)}
                      className="rounded-xl overflow-hidden aspect-[3/2] w-full hover-lift card-shadow"
                    >
                      <img
                        src={photo}
                        alt={`${section.title} ${pi + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:opacity-70 transition-opacity"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.replace("w=600&h=400", "w=1200&h=800")}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
