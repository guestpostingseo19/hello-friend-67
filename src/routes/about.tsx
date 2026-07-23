import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, BUSINESS } from "../components/site-layout";
import { IMG } from "../lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Usman Cloth House — Three generations of fabric" },
      { name: "description", content: "A family-run fabric house in Chichawatni. Meet the shop, the family behind the counter, and the way we choose what goes on our shelves." },
      { property: "og:title", content: "About Usman Cloth House" },
      { property: "og:description", content: "Three generations of one family, one shop, one careful eye for fabric." },
      { property: "og:image", content: IMG.shopkeeper },
      { name: "twitter:image", content: IMG.shopkeeper },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-8">
        <div className="max-w-3xl">
          <div className="eyebrow">Our story</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">
            One family. One shop. Three generations of choosing fabric well.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Usman Cloth House opened its doors before most of Chichawatni's newer bazaars existed. We have been on the same corner off Chowk Block 8 ever since — and the same family still stands behind the counter.
          </p>
        </div>
      </section>

      <section className="container-editorial grid gap-6 md:grid-cols-12 md:gap-8 pb-16 md:pb-24">
        <div className="md:col-span-8 aspect-[16/10] overflow-hidden rounded-sm">
          <img src={IMG.overview} alt="Inside Usman Cloth House" className="h-full w-full object-cover" />
        </div>
        <div className="md:col-span-4 grid grid-rows-2 gap-6 md:gap-8">
          <div className="overflow-hidden rounded-sm">
            <img src={IMG.mensSuiting} alt="Men's suiting" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={IMG.bag} alt="The Usman Cloth House shopping bag" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-editorial pb-20 md:pb-28 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4">
          <div className="sticky top-32">
            <div className="eyebrow">What we believe</div>
            <p className="mt-3 font-serif text-3xl leading-snug italic text-primary">
              "Fabric is a personal thing. You should touch it, hold it against the light, and be sure — before you buy it."
            </p>
          </div>
        </aside>
        <div className="md:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>Our grandfather opened the shop with a single wooden almirah and a handful of bolts of cotton. Today those almirahs have become long walls of shelves stacked to the ceiling — and every roll on them is here because someone in this family walked into a mill or a warehouse and said, "yes, this one."</p>
          <p>We stock every brand a Pakistani household knows and trusts — Gul Ahmed, Chinyere, Al Karam, Nishat, Sapphire, Khaadi, Bonanza. But we also carry small runs from mills you have never heard of, because sometimes the best-drape lawn of the season comes from a family workshop nobody has written about.</p>
          <p>We keep the lights bright, the shelves organised, and the prices exactly what they should be. We don't run flashy sales; we cut the fair rate the first time. Our regulars — mothers, fathers, grandmothers, brides — have taught us that trust is the only thing worth building over three generations.</p>
          <p>When you visit, sit down. Ask for tea. Let someone open ten rolls in front of you. This is how fabric is meant to be bought.</p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-20 grid md:grid-cols-4 gap-10 text-center">
          {[
            { n: "3", l: "Generations" },
            { n: "40+", l: "Years on this corner" },
            { n: "600+", l: "Fabric designs in season" },
            { n: "4.0★", l: "Google reviews" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-6xl md:text-7xl text-primary">{s.n}</div>
              <div className="eyebrow mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-20 md:py-24 text-center">
        <div className="eyebrow">Come see us</div>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-2xl mx-auto">{BUSINESS.address.split(",")[0]}, Chichawatni.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3.5 text-sm tracking-[0.18em] uppercase">
            Plan a visit <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/collections" className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm tracking-[0.18em] uppercase">
            Browse Collections
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
