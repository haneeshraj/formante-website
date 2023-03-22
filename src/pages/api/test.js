import { sendMail } from "@/utils/nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, subject, message } = req.body;
    sendMail({ name, email, number, subject, message });
    res.status(200).json({ bruh: "work" });
  }
}
