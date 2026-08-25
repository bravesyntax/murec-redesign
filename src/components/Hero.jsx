import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { hero } from "../data/murec.js";

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.75]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-canopy">
      <motion.img
        src={hero.image}
        alt="Forest Walk — a MUREC villa community set among mature trees and open green corridors"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.15 }}
        loading="eager"
        fetchpriority="high"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/40 to-canopy/70"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-canvas pb-14 md:pb-20 text-ivory">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="eyebrow mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-display-hero -ml-1 mb-6 overflow-hidden">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {hero.heading}
              </motion.span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="md:col-span-7 lg:col-span-6 text-display-md font-display italic text-ivory/90"
            >
              {hero.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="md:col-span-5 lg:col-span-6 flex flex-wrap gap-4 md:justify-end"
            >
              <a
                href={hero.ctaPrimary.href}
                className="link-arrow rounded-full border border-ivory/40 px-6 py-3 text-sm tracking-wide hover:bg-ivory hover:text-ink transition-colors duration-300"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="link-arrow rounded-full bg-brass px-6 py-3 text-sm tracking-wide text-ink hover:bg-brass-light transition-colors duration-300"
              >
                {hero.ctaSecondary.label}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden md:flex absolute right-10 lg:right-16 bottom-10 flex-col items-center gap-3 text-ivory/80 text-xs uppercase tracking-widest2"
        >
          <span className="[writing-mode:vertical-rl]">{hero.scrollLabel}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
