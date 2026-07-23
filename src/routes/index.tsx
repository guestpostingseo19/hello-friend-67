import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, MapPin, Clock, Phone } from "lucide-react";
import { SiteLayout, BUSINESS } from "../components/site-layout";
import { IMG, COLLECTIONS, BRANDS, POSTS } from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usman Cloth House — Chichawatni's House of Fine Fabric" },
      { name: "description", content: "A three-generation fabric house in Chichawatni. Printed lawn, embroidered dupattas, gentleman's suiting, and every leading Pakistani brand under one roof." },
      { property: "og:title", content: "Usman Cloth House — Chichawatni's House of Fine Fabric" },
      { property: "og:description", content: "Family-run fabric house in Chichawatni. Every leading Pakistani brand under one roof." },
      { property: "og:image", content: IMG.shelvesWide },
      { name: "twitter:image", content: IMG.shelvesWide },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-editorial grid gap-10 pt-10 pb-16 md:grid-cols-12 md:gap-12 md:pt-16 md:pb-24">
          <div className="md:col-span-6 md:pt-8 animate-fade-up">
            <div className="eyebrow">Est. Chichawatni · Family-run</div>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] md:text-7xl md:leading-[1.02]">
              The season's<br />
              <em className="italic text-primary/90">finest fabric</em>,<br />
              chosen by hand.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Three generations of one family have run this shop off Chowk Block 8. Every roll on our shelves is here because someone in this family thought it was worth putting there.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/collections" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm tracking-[0.18em] uppercase text-primary-foreground transition hover:bg-primary/90">
                Explore Collections
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a href={BUSINESS.whatsapp} className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm tracking-[0.18em] uppercase hover:border-primary transition">
                WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-gold text-gold" /> {BUSINESS.rating}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Open today · 9 AM – 10 PM</span>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={IMG.shelvesWide} alt="Bolts of printed lawn stacked to the ceiling at Usman Cloth House" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden md:block w-52 aspect-[3/4] overflow-hidden rounded-sm ring-8 ring-background">
              <img src={IMG.mensSuiting} alt="Rolls of men's suiting fabric" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-4 hidden md:block bg-gold text-gold-foreground px-5 py-4 rounded-sm shadow-lg">
              <div className="eyebrow text-gold-foreground/70">This week</div>
              <div className="font-serif text-lg leading-tight mt-1">New Eid<br />prints in.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Urdu marquee ribbon */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-editorial py-5 flex flex-wrap items-center justify-between gap-4">
          <span className="font-serif text-2xl text-primary" dir="rtl" lang="ur" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            موسمِ رواں کے مطابق نئے ڈیزائن
          </span>
          <span className="eyebrow">New designs every season · Fresh stock arriving weekly</span>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="container-editorial py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <div className="eyebrow">Collections</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Every kind of fabric you'll need this year.</h2>
          </div>
          <Link to="/collections" className="text-sm tracking-[0.18em] uppercase text-primary hover:text-gold flex items-center gap-1.5">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.slice(0, 6).map((c, i) => (
            <Link key={c.slug} to="/collections" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading={i < 3 ? "eager" : "lazy"} />
                <div className="absolute bottom-3 left-3 bg-background/95 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase">
                  {c.count}
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="eyebrow text-muted-foreground/80">{c.season}</div>
                  <h3 className="font-serif text-2xl mt-1.5">{c.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 mt-2 shrink-0 text-muted-foreground group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Story split */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial grid gap-14 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={IMG.shopkeeper} alt="A shopkeeper at Usman Cloth House helping a family choose fabric" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <div className="eyebrow text-primary-foreground/60">Our story</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A shop where the family still stands behind the counter.</h2>
            <div className="mt-8 space-y-5 text-primary-foreground/80 leading-relaxed">
              <p>Usman Cloth House opened its doors before most of Chichawatni's newer bazaars existed. The families who buy their Eid clothes here today are, more often than not, the children of families who bought their Eid clothes here twenty years ago.</p>
              <p>We do one thing, and we try to do it very well: we choose fabric. From every brand you trust, and from the small mills you have never heard of but should. We keep the lights bright, the shelves organised, and the prices exactly what they should be.</p>
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-gold hover:text-primary-foreground transition">
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="container-editorial py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Brands under one roof</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Every Pakistani label you're looking for.</h2>
          <p className="mt-5 text-muted-foreground">If a house prints it, we probably stock it. If we don't — tell us, and we'll find it for you by the next season.</p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {BRANDS.map((b) => (
            <div key={b.name} className="bg-background p-6 md:p-8 hover:bg-secondary/50 transition">
              <div className="font-serif text-xl">{b.name}</div>
              <div className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.note}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/brands" className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-primary hover:text-gold">
            View all brands <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials — real Google reviews */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-20 md:py-24">
          <div className="eyebrow text-center">From our customers</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-center max-w-2xl mx-auto">4.0 stars, forty-five reviews, and counting.</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {[
              { q: "Reasonable prices with vast variety of fabrics. Almost every brand is available.", a: "Muhammad Umar Akbar" },
              { q: "Cooperative salesmen. Good quality clothes. Fair prices.", a: "Abdul Jabbar" },
              { q: "Good staff. They have good fabrics — great variety in one place.", a: "Munsif Hameed" },
            ].map((t) => (
              <figure key={t.a} className="bg-background border border-border p-8 rounded-sm">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-5 font-serif text-xl italic leading-snug">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground">— {t.a} · Google Review</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="container-editorial py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="eyebrow">The Journal</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Notes on fabric, season and care.</h2>
          </div>
          <Link to="/blog" className="text-sm tracking-[0.18em] uppercase text-primary hover:text-gold flex items-center gap-1.5">
            All entries <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-5 eyebrow text-muted-foreground/80">{p.category} · {p.readTime}</div>
              <h3 className="mt-2 font-serif text-2xl leading-snug group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="container-editorial pb-24">
        <div className="rounded-sm bg-primary text-primary-foreground overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <div className="eyebrow text-gold">Come by the shop</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Chowk Block 8, Chichawatni.</h2>
              <p className="mt-5 text-primary-foreground/75 max-w-md">Bring the family. Sit down. Take your time. Every roll on our shelves is out for you to touch — this is how fabric ought to be bought.</p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>{BUSINESS.address}</span></div>
                <div className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></div>
                <div className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>{BUSINESS.hours}</span></div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={BUSINESS.mapUrl} className="inline-flex items-center gap-2 rounded-sm bg-gold text-gold-foreground px-6 py-3.5 text-sm tracking-[0.18em] uppercase hover:bg-gold/90 transition">
                  Get Directions <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={BUSINESS.whatsapp} className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3.5 text-sm tracking-[0.18em] uppercase hover:bg-primary-foreground/10 transition">
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <img src={IMG.overview} alt="The interior of Usman Cloth House" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
