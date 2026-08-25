import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { stats } from "../data/murec.js";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-display-hero leading-none">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="theme-clearing py-24 md:py-32 border-t border-clearing-line">
      <div className="container-canvas grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="eyebrow mt-4">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
