import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SiteLayout } from "../components/site-layout";
import { IMG } from "../lib/site-data";

const FAQS = [
  { q: "Where is Usman Cloth House located?", a: "We're on Block 8, Street 1, off Chowk Block 8 Kamboh in Chichawatni (postal code 57200). It's the same corner our family has been on for three generations." },
  { q: "What are your opening hours?", a: "Every day from 9:00 AM to 10:00 PM. We stay open through Ramadan with adjusted hours — call ahead if you're visiting late." },
  { q: "Which brands do you stock?", a: "Every leading Pakistani label including Gul Ahmed, Chinyere, Al Karam, Nishat Linen, Sapphire, Khaadi, Bonanza Satrangi, Firdous, Charizma, Dynasty and Royal Extravagance. If we don't have something in stock, we can usually order it for you." },
  { q: "Do you cut fabric to custom yardage?", a: "Yes. Almost all our fabric is sold from the roll and cut to whatever length you need — full suit pieces, dupatta lengths, or half-metres for children's clothes." },
  { q: "Do you deliver to other cities?", a: "We arrange courier delivery across Pakistan for confirmed WhatsApp orders. Delivery is typically 2–4 working days via Leopards or TCS. Charges depend on weight and destination." },
  { q: "Can I return or exchange fabric?", a: "Uncut, unwashed fabric with the original tag can be exchanged within 7 days for another piece of equal or greater value. Cut fabric, sale items, and washed pieces cannot be returned. Please see our Return Policy for full details." },
  { q: "Do you have a price list online?", a: "Prices change with season and brand. Message us on WhatsApp with the collection you're interested in and we'll send you current rates and photographs the same day." },
  { q: "Do you take card payments?", a: "Yes — we accept cash, Easypaisa, JazzCash, and bank transfer. Card facility is available for larger purchases in-store." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Usman Cloth House" },
      { name: "description", content: "Answers about location, hours, brands stocked, delivery, returns and payment at Usman Cloth House, Chichawatni." },
      { property: "og:title", content: "FAQ — Usman Cloth House" },
      { property: "og:description", content: "Answers about location, hours, brands, delivery and returns." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="eyebrow">Questions & Answers</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">The things people usually ask us.</h1>
        </div>
      </section>
      <section className="container-editorial pb-24 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-4 hidden md:block">
          <div className="sticky top-32 aspect-[3/4] overflow-hidden rounded-sm">
            <img src={IMG.interiorStairs} alt="Inside the shop" className="h-full w-full object-cover" />
          </div>
        </aside>
        <div className="md:col-span-8 border-y border-border">
          {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
        <span className="font-serif text-xl md:text-2xl leading-snug group-hover:text-primary transition">{q}</span>
        <span className="mt-1 h-8 w-8 shrink-0 rounded-full border border-border grid place-items-center group-hover:border-primary transition">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <div className="pb-6 -mt-2 text-muted-foreground leading-relaxed max-w-2xl">{a}</div>}
    </div>
  );
}
