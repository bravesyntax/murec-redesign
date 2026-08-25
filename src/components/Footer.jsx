import { hero, nav, contact, social, disclaimer, site } from "../data/murec.js";

export default function Footer() {
  return (
    <footer className="theme-canopy border-t border-ivory/10">
      <div className="container-canvas py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="font-display text-2xl tracking-[0.15em] uppercase mb-4">{hero.heading}</p>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">{site.fullName}</p>
          </div>

          <nav className="md:col-span-2" aria-label="Footer navigation">
            <p className="eyebrow mb-4">Menu</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ivory/70 hover:text-brass transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">{contact.addressLabel}</p>
            <p className="text-ivory/70 text-sm leading-relaxed">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Contact</p>
            <a href={`mailto:${contact.email}`} className="block text-ivory/70 hover:text-brass transition-colors text-sm mb-2">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="block text-ivory/70 hover:text-brass transition-colors text-sm mb-6">
              {contact.phone}
            </a>
            <ul className="flex gap-4">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-brass transition-colors text-sm"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule mb-8" />

        <p className="text-ivory/50 text-xs leading-relaxed max-w-3xl mb-6">{disclaimer}</p>

        <p className="text-ivory/50 text-xs">
          Copyright &copy; {new Date().getFullYear()} MUREC. Content sourced from{" "}
          <a href="https://murec.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brass">
            murec.com
          </a>{" "}
          &mdash; this redesign is an unaffiliated frontend design exercise.
        </p>
      </div>
    </footer>
  );
}
