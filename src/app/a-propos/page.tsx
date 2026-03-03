import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "À propos | Quentin Ramirez",
    description:
        "En savoir plus sur la méthode d’accompagnement spirituel de Quentin Ramirez, entre intuition, confidentialité et éthique.",
    path: "/a-propos",
});

export default function AboutPage() {
    return (
        <main>
            <section className="py-14 md:py-20">
                <Container>
                    <SectionTitle
                        eyebrow="Qui suis-je"
                        title="Un accompagnement spirituel exigeant, humain et confidentiel"
                        description="Depuis plus de 12 ans, j’accompagne des personnes confrontées aux blocages relationnels, aux doutes sentimentaux et aux charges énergétiques pesantes."
                    />

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <AnimatedReveal>
                            <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                                <h2 className="font-title text-2xl text-[var(--text)]">Ma méthode</h2>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                                    Chaque situation est unique. Mon travail combine écoute active,
                                    lecture intuitive et protocoles énergétiques ciblés, toujours
                                    adaptés à votre réalité émotionnelle.
                                </p>
                            </article>
                        </AnimatedReveal>

                        <AnimatedReveal delay={0.08}>
                            <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                                <h2 className="font-title text-2xl text-[var(--text)]">Mes engagements</h2>
                                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                                    <li>• Confidentialité totale de vos échanges</li>
                                    <li>• Cadre clair et bienveillant</li>
                                    <li>• Suivi sérieux et transparent</li>
                                    <li>• Respect de votre libre arbitre</li>
                                </ul>
                            </article>
                        </AnimatedReveal>
                    </div>
                </Container>
            </section>
        </main>
    );
}
