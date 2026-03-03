export const siteConfig = {
    name: "Quentin Ramirez - Accompagnement Spirituel",
    shortName: "Quentin Ramirez",
    description:
        "Accompagnement spirituel premium pour les problématiques amoureuses : retour affectif, guidance sentimentale et désenvoûtement.",
    url: "https://example.com",
    email: "quentinramireztarologue@gmail.com",
    phoneDisplay: "+33 6 78 45 57 88",
    phoneRaw: "+33678455788",
    whatsappRaw: "33678455788",
    whatsappLink:
        "https://wa.me/33678455788?text=Bonjour%20Quentin%2C%20je%20souhaite%20un%20accompagnement%20spirituel.",
    nav: [
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "À propos", href: "/a-propos" },
        { label: "Témoignages", href: "/temoignages" },
        { label: "Contact", href: "/contact" },
    ],
    stats: [
        { label: "Consultations accompagnées", value: "+2 400" },
        { label: "Satisfaction client", value: "98%" },
        { label: "Années de pratique", value: "12" },
        { label: "Disponibilité moyenne", value: "7j/7" },
    ],
    services: [
        {
            title: "Retour affectif",
            description:
                "Rituel ciblé pour harmoniser les énergies du lien et favoriser un rapprochement sincère.",
            highlight: "Approche sur-mesure",
        },
        {
            title: "Désenvoûtement",
            description:
                "Nettoyage énergétique en profondeur pour libérer les blocages émotionnels et spirituels.",
            highlight: "Protection renforcée",
        },
        {
            title: "Guidance sentimentale",
            description:
                "Lecture intuitive pour éclaircir vos choix et avancer avec clarté dans votre relation.",
            highlight: "Vision claire",
        },
        {
            title: "Rituel personnalisé",
            description:
                "Accompagnement exclusif selon votre situation, vos intentions et votre temporalité.",
            highlight: "Suivi premium",
        },
    ],
} as const;
