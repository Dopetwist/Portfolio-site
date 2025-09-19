import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


// POST route for feedback
router.post('/send-mail', async (req, res) => {
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // Another email provider can be used
            auth: {
                user: process.env.EMAIL_USER,  // Email address
                pass: process.env.EMAIL_PASS   // Email password or app-specific password
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,  // Email to receive feedback
            subject: `New Message from Portfolio Site`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage: \n${message}`
        }; 

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

export default router;