import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
    console.log("🔍 API Key:", process.env.RESEND_API_KEY || "❌ Not found!");
    console.log("📧 From Email:", process.env.FROM_EMAIL || "❌ Not found!");

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: "❌ API Key is missing" }, { status: 500 });
    }

    try {
        const { email, subject, message } = await req.json();
        console.log("✅ Sending email to:", email, "with subject:", subject);

        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: ["sourav999.sm@gmail.com", email],
            subject: subject,
            html: `
                <h1>${subject}</h1>
                <p>Thank you for contacting us!</p>
                <p>New message submitted:</p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("🚨 Resend API Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

