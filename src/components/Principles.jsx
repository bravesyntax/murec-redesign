import Reveal from "./Reveal.jsx";
import { principles } from "../data/murec.js";

export default function Principles() {
  return (
    <section className="theme-canopy py-24 md:py-36">
      <div className="container-canvas">
        <Reveal className="mb-16 md:mb-24 max-w-2xl">
          <span className="eyebrow">{principles.label}</span>
          <h2 className="mt-4 text-display-xl">{principles.heading}</h2>
        </Reveal>

        <div className="border-t border-ivory/15">
          {principles.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-10 border-b border-ivory/15"
            >
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="font-data text-ivory/50 text-sm">0{i + 1}</span>
                <h3 className="text-display-lg transition-colors duration-500 group-hover:text-brass">
                  {item.title}
                </h3>
              </div>
              <p className="md:col-span-6 md:col-start-7 text-ivory/70 text-base md:text-lg leading-relaxed self-center">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
