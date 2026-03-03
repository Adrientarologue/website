import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Services | Quentin Ramirez",
    description:
        "Découvrez les services d’accompagnement spirituel : retour affectif, guidance sentimentale, désenvoûtement et rituel personnalisé.",
    path: "/services",
});

export default function ServicesPage() {
    return (
        <main>
            <ServicesGrid />
        </main>
    );
}
