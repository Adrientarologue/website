import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { siteConfig } from "@/config/site";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            <Container>
                <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <AnimatedReveal>
                        <p className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                            Accompagnement Spirituel Premium
                        </p>
                        <h1 className="font-title text-4xl leading-tight text-[var(--text)] md:text-6xl">
                            Retrouver l’harmonie amoureuse avec une guidance claire et
                            confidentielle.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                            Expert en retour affectif, guidance sentimentale et
                            désenvoûtement. Une approche humaine, discrète et sur-mesure pour
                            vous accompagner à chaque étape.
                        </p>
                        <div className="mt-8 space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[#130c1e] transition hover:brightness-95"
                                >
                                    Réserver une consultation
                                </Link>
                                <a
                                    href={`tel:${siteConfig.phoneRaw}`}
                                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
                                >
                                    Appeler maintenant
                                </a>
                            </div>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
                            >
                                Envoyer un email
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-[var(--muted)]">
                            Numéro joignable uniquement via WhatsApp.
                        </p>
                    </AnimatedReveal>

                    <AnimatedReveal delay={0.1}>
                        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-md">
                            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                                Consultation privée
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                                Bénéficiez d’un échange complet pour poser vos questions,
                                comprendre les blocages et définir un plan d’action énergétique.
                            </p>
                            <ul className="mt-5 space-y-3 text-sm text-[var(--text)]">
                                <li>✓ Retour affectif ciblé</li>
                                <li>✓ Désenvoûtement et protection</li>
                                <li>✓ Suivi personnalisé</li>
                            </ul>
                            <a
                                href={siteConfig.whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[#c59643] px-5 py-3 text-sm font-semibold text-[#130c1e]"
                            >
                                Discuter sur WhatsApp
                            </a>
                        </div>
                    </AnimatedReveal>
                </div>
            </Container>
        </section>
    );
}
