import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteLayout } from "../components/site-layout";
import { POSTS } from "../lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Story not found — Usman Cloth House" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Usman Cloth House` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          image: p.image,
          datePublished: p.date,
          author: { "@type": "Organization", name: p.author },
        }),
      }],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);
  return (
    <SiteLayout>
      <article>
        <div className="container-editorial pt-12 md:pt-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> The Journal
          </Link>
        </div>
        <header className="container-editorial pt-8 pb-10 md:pb-14 max-w-3xl">
          <div className="eyebrow">{post.category}</div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">{post.title}</h1>
          <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>
        </header>
        <div className="container-editorial">
          <div className="aspect-[16/9] overflow-hidden rounded-sm">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="container-editorial py-14 md:py-20">
          <div className="max-w-2xl mx-auto space-y-6 text-lg leading-[1.7] text-foreground/85">
            <p className="text-2xl md:text-3xl font-serif italic text-primary leading-snug">{post.excerpt}</p>
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-editorial py-16">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">Keep reading</h2>
            <Link to="/blog" className="text-sm tracking-[0.18em] uppercase text-primary hover:text-gold flex items-center gap-1.5">
              All entries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {related.map(p => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-5 eyebrow text-muted-foreground/80">{p.category}</div>
                <h3 className="mt-2 font-serif text-xl leading-snug group-hover:text-primary transition">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
