"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";

type Slide = {
    src: string;
    alt: string;
};

const slides: Slide[] = [
    { src: "/images/2000_gi-6823f691e2acd.jpg", alt: "Cartes de tarot sur table mystique" },
    { src: "/images/2000_gi-6824d63a5686d.jpg", alt: "Rituel de bougies ésotérique" },
    { src: "/images/2000_gi-6824d6cf09f54.jpg", alt: "Ambiance spirituelle et oracle" },
    { src: "/images/800_gi-680ae285dd582.jpg", alt: "Lecture de cartes et guidance" },
    { src: "/images/800_gi-680ae2e1294fb.jpg", alt: "Espace de consultation ésotérique" },
];

export function EntranceCarousel() {
    const [index, setIndex] = useState(0);
    const total = slides.length;

    const activeSlide = useMemo(() => slides[index], [index]);

    useEffect(() => {
        if (total <= 1) {
            return;
        }

        const timer = window.setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, 4200);

        return () => window.clearInterval(timer);
    }, [total]);

    function goToSlide(nextIndex: number) {
        setIndex((nextIndex + total) % total);
    }

    return (
        <section className="pt-6 pb-10 md:pt-8 md:pb-14">
            <Container>
                <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:aspect-[21/9]">
                        <Image
                            key={activeSlide.src}
                            src={activeSlide.src}
                            alt={activeSlide.alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                        <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-3">
                            <p className="rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-sm md:text-sm">
                                Univers tarot • rituels • bougies
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => goToSlide(index - 1)}
                                    className="h-9 w-9 rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/55"
                                    aria-label="Image précédente"
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    onClick={() => goToSlide(index + 1)}
                                    className="h-9 w-9 rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/55"
                                    aria-label="Image suivante"
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 flex justify-center gap-2 pb-1">
                        {slides.map((slide, slideIndex) => (
                            <button
                                key={slide.src}
                                type="button"
                                onClick={() => goToSlide(slideIndex)}
                                aria-label={`Aller à l’image ${slideIndex + 1}`}
                                className={`h-2.5 rounded-full transition ${slideIndex === index ? "w-7 bg-[var(--accent)]" : "w-2.5 bg-[var(--border)]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
