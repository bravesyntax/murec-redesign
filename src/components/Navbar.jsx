import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, hero } from "../data/murec.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-signature ${
        scrolled || open
          ? "bg-canopy/95 backdrop-blur-sm border-b border-ivory/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-canvas flex items-center justify-between h-20 md:h-24 text-ivory">
        <a
          href="#main"
          className="font-display text-lg md:text-xl tracking-[0.15em] uppercase"
          onClick={close}
        >
          {hero.heading}
        </a>

        <ul className="hidden md:flex items-center gap-10 font-sans text-[0.9rem]">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative py-1 opacity-90 hover:opacity-100 transition-opacity after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-ivory/30 rounded-full px-5 py-2 text-[0.85rem] tracking-wide hover:bg-brass hover:border-brass hover:text-ink transition-colors duration-300"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-canopy text-ivory border-t border-ivory/10"
          >
            <ul className="container-canvas flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <a
                    href={item.href}
                    onClick={close}
                    className="block py-3 text-2xl font-display border-b border-ivory/10"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * nav.length, duration: 0.35 }}
                className="pt-5"
              >
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex items-center rounded-full bg-brass text-ink px-6 py-3 text-sm tracking-wide"
                >
                  Get in touch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
