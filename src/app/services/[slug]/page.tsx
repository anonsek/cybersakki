import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, HelpCircle, Shield, Sparkles } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import {
  constructMetadata,
  getServiceSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
      description: "The requested service page does not exist.",
    });
  }

  return constructMetadata({
    title: service.fullTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.title, ...service.techStack],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faqs);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Service Overview</span>
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {service.fullTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Service Capabilities & Approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {service.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Key Deliverables & Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Frequently Asked Questions */}
            {service.faqs.length > 0 && (
              <section className="glass rounded-2xl p-8">
                <div className="mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-primary/10 border border-primary/20 px-3 py-1.5 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass rounded-2xl p-6 border-primary/30 glow-primary relative overflow-hidden">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Let’s discuss how this service can be tailored to meet your business goals.
              </p>
              <Button asChild className="w-full">
                <Link href="/#contact">
                  Request a Proposal
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
