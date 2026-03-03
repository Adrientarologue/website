import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--bg)/0.82] backdrop-blur-xl">
            <Container className="py-4">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="font-title text-lg text-[var(--text)] md:text-xl">
                        {siteConfig.shortName}
                    </Link>

                    <nav aria-label="Navigation principale" className="hidden md:block">
                        <ul className="flex items-center gap-5">
                            {siteConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={siteConfig.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#130c1e] transition hover:brightness-95"
                        >
                            WhatsApp
                        </a>
                        <ThemeToggle />
                    </div>
                </div>

                <nav aria-label="Navigation mobile" className="mt-3 overflow-x-auto md:hidden">
                    <ul className="flex min-w-max items-center gap-4 pb-1">
                        {siteConfig.nav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-xs font-medium uppercase tracking-wide text-[var(--muted)] transition hover:text-[var(--accent)]"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
