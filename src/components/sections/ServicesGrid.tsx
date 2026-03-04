import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

type ServicesGridProps = {
    compact?: boolean;
};

const serviceImageMap: Record<string, string> = {
    "Retour affectif": "/images/2000_gi-6823f691e2acd.jpg",
    "Désenvoûtement": "/images/800_gi-680ae285dd582.jpg",
    "Guidance sentimentale": "/images/2000_gi-6824d6cf09f54.jpg",
};

const highlightedTitles = new Set([
    "Retour affectif",
    "Désenvoûtement",
    "Guidance sentimentale",
]);

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
                                <h3
                                    className={`font-title text-2xl ${highlightedTitles.has(service.title)
                                            ? "text-[#c62828]"
                                            : "text-[var(--text)]"
                                        }`}
                                >
                                    {service.title}
                                </h3>
                                {serviceImageMap[service.title] ? (
                                    <div className="mt-3 overflow-hidden rounded-xl border border-[var(--border)]">
                                        <Image
                                            src={serviceImageMap[service.title]}
                                            alt={`${service.title} - visuel`}
                                            width={1200}
                                            height={700}
                                            className="h-44 w-full object-cover"
                                        />
                                    </div>
                                ) : null}
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
