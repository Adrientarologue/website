import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { siteConfig } from "@/config/site";

export function StatsSection() {
    return (
        <section className="py-8 md:py-12">
            <Container>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {siteConfig.stats.map((stat, index) => (
                        <AnimatedReveal key={stat.label} delay={index * 0.06}>
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                                <p className="font-title text-3xl text-[var(--accent)]">{stat.value}</p>
                                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--muted)]">
                                    {stat.label}
                                </p>
                            </div>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
