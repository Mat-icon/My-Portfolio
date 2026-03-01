import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, company, email, message } = req.body;

    // Validate input
    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: `"${fullName}" <${process.env.EMAIL_USER}>`, // Must be the auth user for Gmail
        to: process.env.EMAIL_USER, // Receive messages at your own email
        replyTo: email, // Set reply-to as the sender's email
        subject: `New Portfolio Message from ${fullName}`,
        text: `Name: ${fullName}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
