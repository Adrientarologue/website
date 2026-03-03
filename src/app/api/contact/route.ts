import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

type ContactBody = {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactBody;

        const name = body.name?.trim() ?? "";
        const email = body.email?.trim() ?? "";
        const phone = body.phone?.trim() ?? "";
        const service = body.service?.trim() ?? "Non précisé";
        const message = body.message?.trim() ?? "";

        if (!name || name.length < 2) {
            return NextResponse.json({ message: "Nom invalide." }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ message: "Email invalide." }, { status: 400 });
        }

        if (!message || message.length < 15) {
            return NextResponse.json(
                { message: "Message trop court (minimum 15 caractères)." },
                { status: 400 }
            );
        }

        const host = process.env.SMTP_HOST;
        const port = Number(process.env.SMTP_PORT || "587");
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const to = process.env.CONTACT_TO || siteConfig.email;

        if (!host || !user || !pass) {
            return NextResponse.json(
                {
                    message:
                        "Le serveur email n’est pas configuré. Ajoutez SMTP_HOST, SMTP_PORT, SMTP_USER et SMTP_PASS.",
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: {
                user,
                pass,
            },
        });

        await transporter.sendMail({
            from: `Site ${siteConfig.shortName} <${user}>`,
            to,
            replyTo: email,
            subject: `Nouvelle demande - ${service}`,
            text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || "Non renseigné"}\nService: ${service}\n\nMessage:\n${message}`,
            html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });

        return NextResponse.json({ message: "Message envoyé." }, { status: 200 });
    } catch {
        return NextResponse.json(
            { message: "Impossible de traiter la demande." },
            { status: 500 }
        );
    }
}
