import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, BUSINESS } from "../components/site-layout";
import { BRANDS, IMG } from "../lib/site-data";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Every leading Pakistani label | Usman Cloth House" },
      { name: "description", content: "Gul Ahmed, Chinyere, Al Karam, Nishat, Sapphire, Khaadi, Bonanza Satrangi and more — under one roof in Chichawatni." },
      { property: "og:title", content: "Brands at Usman Cloth House" },
      { property: "og:description", content: "Every Pakistani label you're looking for — under one roof in Chichawatni." },
      { property: "og:image", content: IMG.interiorWide },
      { name: "twitter:image", content: IMG.interiorWide },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="eyebrow">Brands</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">Every Pakistani label you're looking for.</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">If a house prints it, we probably stock it. If we don't — tell us. We usually have it by the next season.</p>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-4 border border-border">
          {BRANDS.map((b) => (
            <div key={b.name} className="bg-background p-8 md:p-10 hover:bg-secondary/50 transition min-h-[180px] flex flex-col justify-between">
              <div>
                <div className="font-serif text-2xl">{b.name}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.note}</div>
              </div>
              <div className="eyebrow mt-6 text-muted-foreground/60">Available in-store</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-sm bg-secondary/50 border border-border p-8 md:p-12 text-center">
          <div className="eyebrow">Looking for something specific?</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl max-w-xl mx-auto">Message us the brand or collection name — we'll check the shelves for you.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.whatsapp} className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3.5 text-sm tracking-[0.2em] uppercase">
              WhatsApp Us
            </a>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:border-primary transition">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
