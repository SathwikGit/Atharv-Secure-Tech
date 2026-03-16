import transporter from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject || "New Website Contact",
      html: `
        <h2>New Contact Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
};
