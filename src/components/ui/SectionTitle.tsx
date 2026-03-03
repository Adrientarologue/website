type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
};

export function SectionTitle({
    eyebrow,
    title,
    description,
    center = false,
}: SectionTitleProps) {
    return (
        <div className={center ? "text-center" : ""}>
            {eyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                    {eyebrow}
                </p>
            ) : null}
            <h2 className="font-title text-3xl leading-tight text-[var(--text)] md:text-4xl">
                {title}
            </h2>
            {description ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
