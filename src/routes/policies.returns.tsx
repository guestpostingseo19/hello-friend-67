import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/returns")({
  head: () => ({
    meta: [
      { title: "Return Policy — Usman Cloth House" },
      { name: "description", content: "Our simple return and exchange policy for fabric bought at Usman Cloth House." },
    ],
    links: [{ rel: "canonical", href: "/policies/returns" }],
  }),
  component: () => (
    <article>
      <div className="eyebrow">Effective April 2026</div>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">Return & Exchange Policy</h2>
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>Fabric is a personal thing. We want you to be happy with what you take home — and we make returns as easy as we reasonably can.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">What we can exchange</h3>
        <p>Uncut, unwashed fabric with the original bill can be exchanged within <strong>7 days</strong> for another piece of equal or greater value.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">What we cannot take back</h3>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Cut fabric (once we've cut it, it belongs to your outfit)</li>
          <li>Washed or altered pieces</li>
          <li>Sale-priced items</li>
          <li>Custom-ordered brand pieces</li>
        </ul>
        <h3 className="font-serif text-xl text-foreground pt-4">Damaged in transit</h3>
        <p>If your courier parcel arrives damaged, please send us a photograph on WhatsApp within 48 hours of delivery. We will replace or refund the piece at our cost.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Refunds</h3>
        <p>In-store returns are refunded in cash the same day. Courier returns are refunded to your bank account, Easypaisa or JazzCash within 3 working days of us receiving the parcel back.</p>
      </div>
    </article>
  ),
});
