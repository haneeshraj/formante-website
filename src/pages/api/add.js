import { addToSheets } from "../../utils/sheets";
import { google } from "googleapis";

export default function handler(req, res) {
  const { name, email, number, subject, message } = req.body;
  if (req.method === "POST") {
    addToSheets(name, email, number, subject, message);
    res.json({ message: "success" });
  } else if (req.method === "GET") {
    res.json({ message: "work?" });
  }
}
