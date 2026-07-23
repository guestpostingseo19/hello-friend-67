import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

const POLICIES = [
  { to: "/policies/privacy", label: "Privacy" },
  { to: "/policies/terms", label: "Terms" },
  { to: "/policies/shipping", label: "Shipping" },
  { to: "/policies/returns", label: "Returns" },
];

export const Route = createFileRoute("/policies")({
  component: PoliciesLayout,
});

function PoliciesLayout() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-8">
        <div className="eyebrow">Policies</div>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl">The fine print, plainly written.</h1>
      </section>
      <section className="container-editorial pb-24 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-3">
          <nav className="sticky top-32 space-y-1">
            {POLICIES.map(p => (
              <Link key={p.to} to={p.to} className={`block px-4 py-3 rounded-sm text-sm border-l-2 transition ${pathname === p.to ? "border-gold bg-secondary/60 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`}>
                {p.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="md:col-span-9 max-w-2xl">
          <Outlet />
        </div>
      </section>
    </SiteLayout>
  );
}
