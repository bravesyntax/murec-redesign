import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { collection } from "../data/murec.js";

export default function Collection() {
  return (
    <section id="collection" className="theme-canopy">
      {/* Full-bleed opener */}
      <div className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={collection.heroImage}
          alt="Forest Walk villas, Dasna — a gated community set within a living forest landscape"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/30 to-canopy/60" />

        <div className="relative z-10 h-full container-canvas flex flex-col justify-between py-10 md:py-16">
          <Reveal className="flex items-start justify-between text-ivory">
            <span className="eyebrow">{collection.eyebrow}</span>
            <span className="font-data text-ivory/60 text-sm text-right">
              {collection.place}
            </span>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display italic text-display-md text-ivory/85 mb-2">
                {collection.standfirst}
              </p>
              <h2 className="text-display-hero text-ivory -ml-1">{collection.name}</h2>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-wrap items-end justify-between gap-6 mt-8">
              <p className="font-display italic text-2xl md:text-3xl text-brass-light">
                {collection.tagline}
              </p>
              <a
                href="#contact"
                className="link-arrow rounded-full bg-brass px-6 py-3 text-sm tracking-wide text-ink hover:bg-brass-light transition-colors duration-300"
              >
                {collection.ctaLabel}
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Introduction + description */}
      <div className="container-canvas py-20 md:py-28">
        <Reveal className="max-w-3xl mb-16">
          <p className="text-display-md font-display text-ivory/90">{collection.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 mb-20">
          <Reveal className="md:col-span-6">
            <p className="text-ivory/70 text-base md:text-lg leading-relaxed">
              {collection.description}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6">
            <p className="text-ivory/70 text-base md:text-lg leading-relaxed mb-6">
              {collection.description2}
            </p>
            <p className="eyebrow text-sage">{collection.positioning}</p>
          </Reveal>
        </div>

        {/* Facts */}
        <Reveal className="border-t border-ivory/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {collection.facts.map((fact) => (
              <div key={fact} className="py-5 border-b border-ivory/15 text-ivory/80 text-sm md:text-base">
                {fact}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Zones — a real sequence: entry, water, street */}
      <div className="container-canvas pb-20 md:pb-28">
        <Reveal className="mb-10 md:mb-14 max-w-xl">
          <span className="eyebrow">A Masterplan That Flows Like a Forest</span>
          <p className="mt-4 text-ivory/70 leading-relaxed">
            Rather than imposing architecture onto land, the project follows the land&rsquo;s
            rhythm &mdash; layering greens, water, textures, and movement into one fluid
            ecosystem across three experiential zones.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ivory/15">
          {collection.zones.map((zone, i) => (
            <Reveal
              key={zone.code}
              delay={i * 0.1}
              className={`py-8 md:py-10 px-0 md:px-8 border-b md:border-b-0 border-ivory/15 ${
                i > 0 ? "md:border-l" : ""
              }`}
            >
              <span className="font-data text-brass text-sm">{zone.code}</span>
              <h3 className="mt-3 mb-4 text-display-md">{zone.name}</h3>
              <p className="text-ivory/70 leading-relaxed">{zone.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Amenities gallery */}
      <div className="container-canvas pb-20 md:pb-28">
        <Reveal className="mb-10 md:mb-14 max-w-xl">
          <span className="eyebrow">Amenities</span>
          <h3 className="mt-4 text-display-lg">
            Designed for ritual, reflection & recreation
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/15">
          {collection.amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} className="relative bg-canopy group overflow-hidden">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-display-md mb-4">{a.title}</h4>
                <ul className="space-y-2">
                  {a.items.map((item) => (
                    <li key={item} className="text-ivory/65 text-sm md:text-base leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* IGBC design philosophy */}
      <div className="theme-clearing py-20 md:py-28">
        <div className="container-canvas">
          <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 md:mb-16">
            <div className="md:col-span-5">
              <span className="eyebrow">{collection.designPhilosophy.eyebrow}</span>
            </div>
            <p className="md:col-span-6 md:col-start-7 text-lg md:text-xl text-ink/75 leading-relaxed">
              {collection.designPhilosophy.text}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {collection.designPhilosophy.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <span className="font-data text-brass-dim text-sm">0{i + 1}</span>
                <h4 className="mt-3 mb-3 text-xl font-display">{p.title}</h4>
                <p className="text-ink/65 text-sm leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
