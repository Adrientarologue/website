import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

type ServicesGridProps = {
    compact?: boolean;
};

export function ServicesGrid({ compact = false }: ServicesGridProps) {
    const services = compact ? siteConfig.services.slice(0, 3) : siteConfig.services;

    return (
        <section className="py-14 md:py-20">
            <Container>
                <SectionTitle
                    eyebrow="Expertise"
                    title="Services spirituels dédiés à votre vie sentimentale"
                    description="Chaque accompagnement est personnalisé selon votre situation, avec une approche structurée, confidentielle et bienveillante."
                />

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {services.map((service, index) => (
                        <AnimatedReveal key={service.title} delay={index * 0.07}>
                            <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                                    {service.highlight}
                                </p>
                                <h3 className="font-title text-2xl text-[var(--text)]">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                                    {service.description}
                                </p>
                            </article>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
