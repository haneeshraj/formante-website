import { addToSheets } from "../../utils/sheets";

export default function handler(req, res) {
  const { name, email, number, subject, message } = req.body;
  if (req.method === "POST") {
    addToSheets(name, email, number, subject, message);
    res.json({ message: "success" });
  }
}
