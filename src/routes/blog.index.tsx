import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "../components/site-layout";
import { POSTS, IMG } from "../lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Journal — Fabric notes from Usman Cloth House" },
      { name: "description", content: "Notes on fabric, season and care from a three-generation Chichawatni fabric house." },
      { property: "og:title", content: "The Journal — Usman Cloth House" },
      { property: "og:description", content: "Notes on fabric, season and care." },
      { property: "og:image", content: IMG.shelvesWide },
      { name: "twitter:image", content: IMG.shelvesWide },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = POSTS;
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="eyebrow">The Journal</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">Notes on fabric, season and care.</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">Small essays from the family — what we've learned about buying, wearing and caring for good fabric.</p>
        </div>
      </section>

      <section className="container-editorial pb-16">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid gap-8 md:grid-cols-12 md:gap-12 items-center">
          <div className="md:col-span-7 aspect-[4/3] overflow-hidden rounded-sm">
            <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">Featured · {featured.category}</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight group-hover:text-primary transition">{featured.title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-primary group-hover:text-gold">
              Read the piece <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      </section>

      <section className="container-editorial pb-24">
        <div className="hairline mb-12" />
        <div className="grid gap-12 md:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-5 eyebrow text-muted-foreground/80">{p.category} · {p.readTime}</div>
              <h3 className="mt-2 font-serif text-2xl leading-snug group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <div className="mt-3 text-xs text-muted-foreground/70">{p.date}</div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
