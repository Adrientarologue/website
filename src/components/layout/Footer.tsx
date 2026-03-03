import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="mt-20 border-t border-[var(--border)] bg-[var(--bg-soft)]">
            <Container className="grid gap-10 py-12 md:grid-cols-3">
                <div>
                    <p className="font-title text-xl text-[var(--text)]">{siteConfig.shortName}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        Accompagnement spirituel premium pour les problématiques amoureuses,
                        en toute confidentialité.
                    </p>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                        Navigation
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                        {siteConfig.nav.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="transition hover:text-[var(--accent)]">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/mentions-legales"
                                className="transition hover:text-[var(--accent)]"
                            >
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                        Contact
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                        <li>
                            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--accent)]">
                                {siteConfig.email}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${siteConfig.phoneRaw}`} className="transition hover:text-[var(--accent)]">
                                {siteConfig.phoneDisplay}
                            </a>
                        </li>
                        <li className="text-xs">Numéro joignable uniquement sur WhatsApp.</li>
                    </ul>
                </div>
            </Container>
            <Container className="border-t border-[var(--border)] py-5">
                <p className="text-xs text-[var(--muted)]">
                    © {new Date().getFullYear()} {siteConfig.shortName}. Tous droits réservés.
                </p>
            </Container>
        </footer>
    );
}
