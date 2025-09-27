
import nodemailer from "nodemailer";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {

        // Transporter config
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Portfolio Message: ${name}`,
            text: message,
            replyTo: email
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("❌ Email error:", err);
        res.status(500).json({ error: "Email failed to send" });
    }
}