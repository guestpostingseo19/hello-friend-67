import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping Policy — Usman Cloth House" },
      { name: "description", content: "How we arrange delivery of fabric orders from Chichawatni across Pakistan." },
    ],
    links: [{ rel: "canonical", href: "/policies/shipping" }],
  }),
  component: () => (
    <article>
      <div className="eyebrow">Effective April 2026</div>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">Shipping Policy</h2>
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>We arrange courier delivery across Pakistan for orders confirmed on WhatsApp or by phone.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Delivery times</h3>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Chichawatni & nearby villages — same day or next day, hand-delivered</li>
          <li>Sahiwal, Multan, Faisalabad, Lahore — 2 working days via Leopards / TCS</li>
          <li>Karachi, Islamabad, Peshawar, Quetta — 3–4 working days</li>
        </ul>
        <h3 className="font-serif text-xl text-foreground pt-4">Charges</h3>
        <p>Actual courier rate is added at billing and depends on parcel weight and destination. We do not add a handling fee. For orders above PKR 15,000, we cover the courier charge within Punjab.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Payment</h3>
        <p>Cash on Delivery is available on most routes. We also accept advance payment by bank transfer, Easypaisa or JazzCash.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Tracking</h3>
        <p>We share the courier tracking number by WhatsApp the moment your parcel is booked.</p>
      </div>
    </article>
  ),
});
