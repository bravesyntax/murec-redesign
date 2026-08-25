import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { timeline } from "../data/murec.js";

export default function Timeline() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="legacy" className="theme-clearing py-24 md:py-32">
      <div className="container-canvas">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-16">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">{timeline.label}</span>
            <h2 className="mt-4 text-display-xl">{timeline.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 self-end flex items-end justify-between gap-6">
            <p className="text-lg text-ink/70 leading-relaxed">{timeline.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll timeline left"
            className="p-3 rounded-full border border-ink/20 hover:bg-ink hover:text-clearing transition-colors duration-300"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll timeline right"
            className="p-3 rounded-full border border-ink/20 hover:bg-ink hover:text-clearing transition-colors duration-300"
          >
            <ArrowRight size={16} />
          </button>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-6 px-6 sm:px-10 lg:px-16 snap-x snap-mandatory scroll-px-6 sm:scroll-px-10 lg:scroll-px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {timeline.entries.map((entry) => (
          <article
            key={entry.year}
            className="snap-start shrink-0 w-[78vw] sm:w-[380px] border-t border-ink/20 pt-6"
          >
            <span className="font-data text-2xl text-brass">{entry.year}</span>
            <h3 className="mt-4 mb-3 text-display-md">{entry.title}</h3>
            <p className="text-ink/65 leading-relaxed">{entry.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
