import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send, Star } from "lucide-react";
import { SiteLayout, BUSINESS } from "../components/site-layout";
import { IMG } from "../lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Usman Cloth House, Chichawatni" },
      { name: "description", content: "Come by the shop off Chowk Block 8, Chichawatni. Open 9 AM – 10 PM. Call, WhatsApp, or drop us a message." },
      { property: "og:title", content: "Visit Usman Cloth House" },
      { property: "og:description", content: "Chowk Block 8, Chichawatni. Open 9 AM – 10 PM." },
      { property: "og:image", content: IMG.interiorStairs },
      { name: "twitter:image", content: IMG.interiorStairs },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="eyebrow">Visit the shop</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">Come by. Sit down. Take your time.</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">We're on the same corner off Chowk Block 8 we've always been on. Open every day from 9 AM to 10 PM.</p>
        </div>
      </section>

      <section className="container-editorial pb-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          {[
            { icon: MapPin, label: "Address", value: BUSINESS.address, action: { href: BUSINESS.mapUrl, text: "Get directions" } },
            { icon: Phone, label: "Phone", value: BUSINESS.phone, action: { href: BUSINESS.phoneHref, text: "Call now" } },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with the shop", action: { href: BUSINESS.whatsapp, text: "Open WhatsApp" } },
            { icon: Clock, label: "Hours", value: BUSINESS.hours },
            { icon: Star, label: "Google", value: BUSINESS.rating },
          ].map((c) => (
            <div key={c.label} className="border border-border rounded-sm p-6 bg-card">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-sm bg-primary text-primary-foreground grid place-items-center">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="eyebrow text-muted-foreground/80">{c.label}</div>
                  <div className="mt-1 text-sm">{c.value}</div>
                  {c.action && (
                    <a href={c.action.href} className="mt-2 inline-block text-xs tracking-[0.2em] uppercase text-primary hover:text-gold">
                      {c.action.text} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-7">
          <div className="border border-border rounded-sm bg-card p-8 md:p-10">
            <div className="eyebrow">Send us a message</div>
            <h2 className="mt-3 font-serif text-3xl">Ask about stock, brands, or plan a visit.</h2>
            {sent ? (
              <div className="mt-10 py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-gold text-gold-foreground grid place-items-center">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl">Message received.</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">Thank you. Someone from the family will reply within a few hours. For anything urgent, please WhatsApp us directly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow">Your name</span>
                    <input required type="text" className="mt-2 w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Phone / WhatsApp</span>
                    <input required type="tel" className="mt-2 w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" />
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow">Email <span className="text-muted-foreground normal-case tracking-normal">(optional)</span></span>
                  <input type="email" className="mt-2 w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" />
                </label>
                <label className="block">
                  <span className="eyebrow">What can we help with?</span>
                  <textarea required rows={5} className="mt-2 w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" placeholder="e.g. Do you have Gul Ahmed's new spring collection in stock?" />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
