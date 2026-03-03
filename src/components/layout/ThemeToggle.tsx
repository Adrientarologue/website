"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function toggleTheme() {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold text-[var(--text)] transition hover:opacity-90"
            aria-label="Basculer le thème"
        >
            {theme === "dark" ? "Mode clair" : "Mode sombre"}
        </button>
    );
}
