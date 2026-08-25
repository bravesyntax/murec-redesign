import { motion } from "framer-motion";

/**
 * Fades + lifts content into place once it enters the viewport.
 * A single, restrained motion pattern reused everywhere so the
 * page reads as orchestrated rather than scattered.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className = "",
  as: Component = motion.div,
  ...rest
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
