import Image from "next/image";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
    return (
        <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white text-2xl text-white shadow-lg transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Contacter sur WhatsApp"
        >
            <Image
                src="/Logo-WhatsApp-700x394.png"
                alt="WhatsApp"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
            />
        </a>
    );
}
