import type { Metadata } from "next";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Témoignages | Quentin Ramirez",
    description:
        "Consultez les témoignages des clients accompagnés en retour affectif, guidance sentimentale et désenvoûtement.",
    path: "/temoignages",
});

export default function TestimonialsPage() {
    return (
        <main>
            <TestimonialsGrid />
        </main>
    );
}
