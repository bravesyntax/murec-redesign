import { ArrowRight, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { cta, contact } from "../data/murec.js";

export default function CTA() {
  return (
    <section id="contact" className="relative theme-canopy overflow-hidden">
      <img
        src={cta.image}
        alt="MUREC — designed as a city inside the forest, a forest inside the city"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-canopy via-canopy/85 to-canopy" />

      <div className="relative container-canvas py-28 md:py-44">
        <Reveal>
          <h2 className="text-display-hero -ml-1 mb-10 md:mb-14 max-w-4xl">{cta.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <Reveal delay={0.1} className="md:col-span-6">
            <p className="text-lg md:text-xl text-ivory/75 leading-relaxed mb-8">{cta.text}</p>
            <a
              href={`mailto:${contact.email}`}
              className="link-arrow rounded-full bg-brass px-7 py-4 text-sm tracking-wide text-ink hover:bg-brass-light transition-colors duration-300"
            >
              {cta.ctaLabel}
              <ArrowRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5 md:col-start-8 space-y-5">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-ivory/85 hover:text-brass transition-colors">
              <Mail size={18} />
              <span className="text-base md:text-lg">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-ivory/85 hover:text-brass transition-colors">
              <Phone size={18} />
              <span className="text-base md:text-lg">{contact.phone}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
