import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, company, email, message } = req.body;

    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER, // Your email address to receive messages
        subject: `New contact form submission from ${fullName}`,
        text: `Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      // Respond with a success message
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
