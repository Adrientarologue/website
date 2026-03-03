import type { Metadata } from "next";
import Link from "next/link";
import { EntranceCarousel } from "@/components/sections/EntranceCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Accueil | Quentin Ramirez",
  description:
    "Accompagnement spirituel expert en retour affectif, guidance sentimentale et désenvoûtement.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <EntranceCarousel />
      <HeroSection />
      <StatsSection />
      <ServicesGrid compact />
      <TestimonialsGrid compact />

      <section className="pb-20">
        <Container>
          <AnimatedReveal>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
              <h2 className="font-title text-3xl text-[var(--text)] md:text-4xl">
                Besoin d’un éclairage immédiat sur votre vie sentimentale ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Contactez Quentin Ramirez pour une consultation personnalisée en
                toute confidentialité.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#130c1e]"
                >
                  Prendre rendez-vous
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-6 py-3 text-sm font-semibold text-[var(--text)]"
                >
                  Voir les services
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </main>
  );
}
