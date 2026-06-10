import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/steinlage-logo-white.png.asset.json";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Medicare", href: "#medicare" },
  { label: "ACA", href: "#aca" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Webinars", href: "#webinars" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-brand-foreground shadow-soft">
      {/* utility bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-5">
            <a
              href="tel:6365615060"
              className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-80"
            >
              <Phone className="h-3.5 w-3.5" />
              636-561-5060
            </a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <a href="#top" className="flex items-center" aria-label="Steinlage Insurance Agency">
          <img
            src={logoAsset.url}
            alt="Steinlage Insurance Agency - Medicare and ACA Made Simple"
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
