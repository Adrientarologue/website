import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Mentions légales | Quentin Ramirez",
    description: "Mentions légales du site de Quentin Ramirez.",
    path: "/mentions-legales",
});

export default function LegalPage() {
    return (
        <main>
            <section className="py-14 md:py-20">
                <Container>
                    <SectionTitle title="Mentions légales" description="Informations légales et de contact." />

                    <div className="mt-8 space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-sm leading-relaxed text-[var(--muted)]">
                        <div>
                            <h2 className="font-title text-2xl text-[var(--text)]">Éditeur</h2>
                            <p className="mt-2">{siteConfig.shortName}</p>
                            <p>Email : {siteConfig.email}</p>
                            <p>Téléphone : {siteConfig.phoneDisplay}</p>
                        </div>

                        <div>
                            <h2 className="font-title text-2xl text-[var(--text)]">Hébergement</h2>
                            <p className="mt-2">Vercel Inc.</p>
                            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                        </div>

                        <div>
                            <h2 className="font-title text-2xl text-[var(--text)]">Responsabilité</h2>
                            <p className="mt-2">
                                Les informations proposées sur ce site sont fournies à titre
                                informatif. Toute décision reste sous la responsabilité de
                                l’utilisateur.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
