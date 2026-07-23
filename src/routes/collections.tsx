import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, BUSINESS } from "../components/site-layout";
import { COLLECTIONS, IMG } from "../lib/site-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Fabric, formals, menswear & home | Usman Cloth House" },
      { name: "description", content: "Browse our seasonal collections: printed lawn, embroidered formals, gentleman's suiting, chiffon dupattas, kids and home." },
      { property: "og:title", content: "Collections — Usman Cloth House" },
      { property: "og:description", content: "Every kind of fabric you'll need this year." },
      { property: "og:image", content: IMG.shelvesWide },
      { name: "twitter:image", content: IMG.shelvesWide },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <div className="eyebrow">The Collections</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">Every kind of fabric you'll need this year.</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">Six carefully-kept collections. Every roll is out for you to touch — this is how we've done it for three generations.</p>
        </div>
      </section>

      <section className="container-editorial pb-24 space-y-16 md:space-y-24">
        {COLLECTIONS.map((c, i) => (
          <article key={c.slug} className={`grid gap-8 md:grid-cols-12 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="eyebrow">{c.season} · {c.count}</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">{c.name}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{c.blurb}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={BUSINESS.whatsapp} className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-5 py-3 text-xs tracking-[0.2em] uppercase">
                  Ask on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-xs tracking-[0.2em] uppercase hover:border-primary transition">
                  Visit the shop
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
