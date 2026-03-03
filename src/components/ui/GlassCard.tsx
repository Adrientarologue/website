import type { ReactNode } from "react";

type GlassCardProps = {
    children: ReactNode;
    className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
    return (
        <div
            className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}
        >
            {children}
        </div>
    );
}
