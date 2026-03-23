import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

export const sendContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // SAVE TO DATABASE
    await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // EMAIL LOGIC
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact",
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
