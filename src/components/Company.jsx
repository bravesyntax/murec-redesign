import Reveal from "./Reveal.jsx";
import { company } from "../data/murec.js";

export default function Company() {
  return (
    <section id="company" className="theme-canopy py-24 md:py-36">
      <div className="container-canvas">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <span className="eyebrow">{company.label}</span>
          <h2 className="mt-4 text-display-xl">{company.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-24 md:mb-32">
          {company.boardMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[15%]"
                />
              </div>
              <h3 className="text-xl font-display mb-3">{m.name}</h3>
              <p className="text-ivory/65 text-sm leading-relaxed">{m.bio}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-10">
          <span className="eyebrow">From Our Partners</span>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-t border-ivory/15 pt-10">
          {company.partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="flex gap-5">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-display italic text-lg md:text-xl text-ivory/90 leading-snug mb-4">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="eyebrow">
                  {p.name} &mdash; {p.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
