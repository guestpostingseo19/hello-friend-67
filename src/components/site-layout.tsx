import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Visit" },
];

export const BUSINESS = {
  name: "Usman Cloth House",
  nameUrdu: "عثمان کلاتھ ہاؤس",
  tagline: "Chichawatni's House of Fine Fabric — Since a generation.",
  phone: "+92 334 7495477",
  phoneHref: "tel:+923347495477",
  whatsapp: "https://wa.me/923347495477",
  address: "Block 8, Street 1, Chowk Block 8 Kamboh, Chichawatni 57200, Pakistan",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Usman+Cloth+House+Chichawatni",
  hours: "Mon – Sun · 9:00 AM – 10:00 PM",
  rating: "4.0 / 5 · 45+ Google Reviews",
};

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <div className="hidden bg-primary text-primary-foreground text-[11px] tracking-[0.18em] uppercase md:block">
        <div className="container-editorial flex h-9 items-center justify-between">
          <span className="opacity-80">Family-run since a generation · Chichawatni</span>
          <span className="flex items-center gap-6 opacity-80">
            <a href={BUSINESS.phoneHref} className="hover:text-gold transition-colors">{BUSINESS.phone}</a>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />9 AM – 10 PM</span>
          </span>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b transition-colors ${scrolled ? "bg-background/95 backdrop-blur border-border" : "bg-background border-transparent"}`}>
        <div className="container-editorial grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 md:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.slice(0, 3).map((n) => (
              <Link key={n.to} to={n.to} className="relative text-foreground/80 hover:text-foreground transition-colors [&.active]:text-foreground" activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/" className="flex flex-col items-start md:items-center min-w-0">
            <span className="font-serif text-2xl md:text-[28px] leading-none tracking-tight truncate">Usman Cloth House</span>
            <span className="eyebrow mt-1.5 text-[10px] md:text-[10px]">Est. Chichawatni</span>
          </Link>
          <nav className="hidden md:flex items-center justify-end gap-8 text-sm">
            {NAV.slice(3).map((n) => (
              <Link key={n.to} to={n.to} className="relative text-foreground/80 hover:text-foreground transition-colors [&.active]:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
          <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="md:hidden justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container-editorial flex flex-col py-4">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="py-3 text-base border-b border-border/60 last:border-0 [&.active]:text-gold" activeOptions={{ exact: n.to === "/" }}>
                  {n.label}
                </Link>
              ))}
              <a href={BUSINESS.whatsapp} className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground py-3 text-sm tracking-[0.2em] uppercase">
                WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="font-serif text-3xl leading-none">Usman Cloth House</div>
          <div className="mt-1 text-gold/90 text-lg" dir="rtl" lang="ur" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>عثمان کلاتھ ہاؤس</div>
          <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            A quiet corner of Chichawatni where three generations of families have come to choose their season's fabric — printed lawn, chiffon dupattas, gentleman's suiting, and the loveliest embroidered pieces of the year.
          </p>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Explore</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-gold transition-colors">{n.label}</Link></li>)}
            <li><Link to="/faq" className="text-primary-foreground/80 hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-primary-foreground/60">Find Us</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>{BUSINESS.address}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={BUSINESS.phoneHref} className="hover:text-gold">{BUSINESS.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>{BUSINESS.hours}</span></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={BUSINESS.whatsapp} aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition"><Phone className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-editorial py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Usman Cloth House. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link to="/policies/privacy" className="hover:text-gold">Privacy</Link>
            <Link to="/policies/terms" className="hover:text-gold">Terms</Link>
            <Link to="/policies/shipping" className="hover:text-gold">Shipping</Link>
            <Link to="/policies/returns" className="hover:text-gold">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
