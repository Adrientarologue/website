import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Contact | Quentin Ramirez",
    description:
        "Contactez Quentin Ramirez pour une consultation spirituelle en retour affectif, guidance sentimentale ou désenvoûtement.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <main>
            <section className="py-14 md:py-20">
                <Container>
                    <SectionTitle
                        eyebrow="Contact"
                        title="Échangeons sur votre situation"
                        description="Remplissez le formulaire ci-dessous ou contactez-moi directement par email et WhatsApp."
                    />

                    <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <ContactForm />

                        <aside className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                            <h2 className="font-title text-2xl text-[var(--text)]">Coordonnées</h2>

                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="block text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                            >
                                {siteConfig.email}
                            </a>

                            <a
                                href={`tel:${siteConfig.phoneRaw}`}
                                className="block text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                            >
                                {siteConfig.phoneDisplay}
                            </a>

                            <p className="text-xs text-[var(--muted)]">
                                Le numéro est joignable uniquement via WhatsApp.
                            </p>

                            <div className="pt-2">
                                <a
                                    href={siteConfig.whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                                >
                                    Ouvrir WhatsApp
                                </a>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>
        </main>
    );
}
