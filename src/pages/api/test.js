import { sendMail } from "@/utils/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, subject, message } = req.body;
    await sendMail({ name, email, number, subject, message });
    res.status(200).json({ bruh: "work" });
    console.log("email sent pls");
  }
}
