"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedRevealProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
};

export function AnimatedReveal({
    children,
    delay = 0,
    y = 24,
    className = "",
}: AnimatedRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
