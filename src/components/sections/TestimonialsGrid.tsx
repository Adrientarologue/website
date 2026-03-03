import testimonials from "@/data/testimonials.json";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type TestimonialsGridProps = {
    compact?: boolean;
};

export function TestimonialsGrid({ compact = false }: TestimonialsGridProps) {
    const list = compact ? testimonials.slice(0, 3) : testimonials;

    return (
        <section className="py-14 md:py-20">
            <Container>
                <SectionTitle
                    eyebrow="Avis clients"
                    title="Ils nous ont fait confiance"
                    description="Des retours authentiques de personnes accompagnées avec discrétion et professionnalisme."
                />

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {list.map((item, index) => (
                        <AnimatedReveal key={item.id} delay={index * 0.06}>
                            <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                                <p className="text-sm leading-relaxed text-[var(--muted)]">“{item.message}”</p>
                                <p className="mt-4 text-[var(--accent)]" aria-label={`${item.rating} sur 5`}>
                                    {"★".repeat(item.rating)}
                                </p>
                                <p className="mt-3 font-semibold text-[var(--text)]">{item.name}</p>
                                <p className="text-xs text-[var(--muted)]">
                                    {item.city} · {item.service}
                                </p>
                            </article>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
