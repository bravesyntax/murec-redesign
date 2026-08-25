import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { about } from "../data/murec.js";

function Block({ data, offset }) {
  return (
    <Reveal
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
        offset ? "md:mt-24" : ""
      }`}
    >
      <div className={`md:col-span-5 ${offset ? "md:order-2" : ""}`}>
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src={data.image}
            alt={`${data.title} — MUREC`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className={`md:col-span-6 ${offset ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
        <h3 className="eyebrow">{data.title}</h3>
        <p className="mt-4 text-display-md font-display text-ink/90">{data.text}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="theme-clearing py-24 md:py-36">
      <div className="container-canvas">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-24 md:mb-32">
          <Reveal className="md:col-span-4">
            <span className="eyebrow">{about.label}</span>
            <h2 className="mt-4 text-display-xl">{about.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-lg md:text-xl text-ink/75 leading-relaxed mb-8">{about.intro}</p>
            <a href={about.cta.href} className="link-arrow eyebrow text-ink">
              {about.cta.label}
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16 md:gap-0">
          <Block data={about.mission} />
          <Block data={about.vision} offset />
        </div>
      </div>
    </section>
  );
}
