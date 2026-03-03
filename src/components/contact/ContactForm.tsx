"use client";

import { FormEvent, useMemo, useState } from "react";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    service: "Retour affectif",
    message: "",
};

export function ContactForm() {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    const services = useMemo(
        () => [
            "Retour affectif",
            "Guidance sentimentale",
            "Désenvoûtement",
            "Rituel personnalisé",
        ],
        []
    );

    function validate(current: FormValues): FormErrors {
        const nextErrors: FormErrors = {};

        if (!current.name.trim() || current.name.trim().length < 2) {
            nextErrors.name = "Veuillez renseigner votre nom.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
            nextErrors.email = "Veuillez renseigner un email valide.";
        }

        if (current.phone && !/^[+\d\s().-]{8,}$/.test(current.phone)) {
            nextErrors.phone = "Numéro invalide.";
        }

        if (!current.message.trim() || current.message.trim().length < 15) {
            nextErrors.message = "Le message doit contenir au moins 15 caractères.";
        }

        return nextErrors;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            setStatus("loading");
            setFeedback("");

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(data.message || "Une erreur est survenue.");
            }

            setStatus("success");
            setFeedback("Message envoyé avec succès. Nous vous répondrons rapidement.");
            setValues(initialValues);
            setErrors({});
        } catch (error) {
            setStatus("error");
            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Impossible d’envoyer le message pour le moment."
            );
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--text)]">
                    Nom complet
                </label>
                <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                    className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                />
                {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--text)]">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                        className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                        placeholder="vous@email.com"
                        autoComplete="email"
                        required
                    />
                    {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email}</p> : null}
                </div>

                <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[var(--text)]">
                        Téléphone (optionnel)
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                        className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                        placeholder="+33 ..."
                        autoComplete="tel"
                    />
                    {errors.phone ? <p className="mt-1 text-xs text-red-300">{errors.phone}</p> : null}
                </div>
            </div>

            <div>
                <label htmlFor="service" className="mb-1 block text-sm font-medium text-[var(--text)]">
                    Service souhaité
                </label>
                <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={(event) => setValues((prev) => ({ ...prev, service: event.target.value }))}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                >
                    {services.map((service) => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--text)]">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
                    rows={6}
                    className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
                    placeholder="Expliquez brièvement votre situation..."
                    required
                />
                {errors.message ? <p className="mt-1 text-xs text-red-300">{errors.message}</p> : null}
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#130c1e] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "loading" ? "Envoi..." : "Envoyer la demande"}
            </button>

            {feedback ? (
                <p
                    className={`text-sm ${status === "success" ? "text-emerald-300" : "text-red-300"}`}
                    role="status"
                >
                    {feedback}
                </p>
            ) : null}
        </form>
    );
}
