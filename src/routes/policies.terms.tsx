import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Usman Cloth House" },
      { name: "description", content: "Terms of use for the Usman Cloth House website." },
    ],
    links: [{ rel: "canonical", href: "/policies/terms" }],
  }),
  component: () => (
    <article>
      <div className="eyebrow">Effective April 2026</div>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">Terms of Use</h2>
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>By using this website you agree to these terms. They exist to keep both of us on the same page — nothing surprising.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Website content</h3>
        <p>Product photographs and descriptions on this site are shown as reference. Actual fabric colour and finish may look a little different in person depending on light. When in doubt, please visit the shop or ask us for a clear WhatsApp photograph.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Pricing & stock</h3>
        <p>Prices change with season and brand. We honour the price we quote you at the moment of purchase. Stock listed on this website is representative — for real-time availability, please contact us directly.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Intellectual property</h3>
        <p>Photographs of our shop, text, and brand marks belong to Usman Cloth House. Please do not reproduce them without permission.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Governing law</h3>
        <p>These terms are governed by the laws of the Islamic Republic of Pakistan.</p>
      </div>
    </article>
  ),
});
