import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Usman Cloth House" },
      { name: "description", content: "How Usman Cloth House handles the information you share when you visit our shop or message us." },
    ],
    links: [{ rel: "canonical", href: "/policies/privacy" }],
  }),
  component: () => (
    <article className="prose-editorial">
      <div className="eyebrow">Effective April 2026</div>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl">Privacy Policy</h2>
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>Usman Cloth House is a small, family-run fabric shop. We only collect the information we need to help you find the fabric you want and get it to you.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">What we collect</h3>
        <p>When you contact us on WhatsApp, by phone, or through the message form on this website, we keep your name, phone number, and — if you share it — your address, so we can reply and, when applicable, arrange delivery.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">How we use it</h3>
        <p>Only for the conversation you started. We do not sell, rent, or share your details with anyone outside our shop. Courier partners receive only the address and phone number required for delivery.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Cookies</h3>
        <p>This website uses only essential cookies required to display the site. We do not run advertising trackers.</p>
        <h3 className="font-serif text-xl text-foreground pt-4">Contact</h3>
        <p>For any question about your information, please phone or WhatsApp us at +92 334 7495477 or visit the shop.</p>
      </div>
    </article>
  ),
});
