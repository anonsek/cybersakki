import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Shield, ShoppingCart, Wrench } from "lucide-react";
import { services } from "@/data/services";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Web Security Services",
  description:
    "Explore professional services by Muhammad Saqlain: Custom Website Development, Next.js Applications, E-Commerce, Web Security Assessment, and Technical SEO.",
  path: "/services",
  keywords: [
    "Web Development Services",
    "Next.js Development",
    "E-Commerce Development",
    "Web Security Audit",
    "Technical SEO Services",
  ],
});

const iconMap = {
  Globe,
  ShoppingCart,
  Code2,
  Shield,
  Wrench,
};

export default function ServicesPage() {
  const breadcrumbItems = [{ label: "Services", href: "/services" }];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Specialized Solutions
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Web Development & Security Services
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            From modern responsive websites to high-speed Next.js applications and security hardening, discover tailored solutions built to scale.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;
            return (
              <div
                key={service.slug}
                className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="mb-2 block font-mono text-xs text-primary">
                    0{index + 1}
                  </span>
                  <h2 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.keyFeatures.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full group/btn" variant="outline">
                  <Link href={`/services/${service.slug}`}>
                    <span>View Service Details</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 glass rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-50 pointer-events-none" />
          <h2 className="text-3xl font-bold mb-4">Need a Custom Web Solution?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Have specific project requirements or need a tailored technical consultation? Let’s connect and discuss your goals.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
