import sendgrid from "@sendgrid/mail";
export default async function handler(req, res) {
  sendgrid.setApiKey(process.env.SG_API_KEY);
  if (req.method === "POST") {
    const { name, email, number, subject, message } = req.body;
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: subject,
      html: `<html><head><style>@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;900&display=swap);*{padding:0;margin:0;word-break:break-all;font-family:Poppins,sans-serif;color:#fff}section{width:100vw;margin:0}.mail-grid{position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#101010;max-width:50%}.grid-item{background-color:#202020;padding:1rem 2rem;border-radius:.5rem;margin-block:.5rem}</style></head><body><section class="mail-info"><div class="mail-grid"><div class="grid-item"><h1>Name</h1><p>${name}</div><div class="grid-item"><h1>Email</h1><a href="mailto:${email}"><p>${email}</a></div><div class="grid-item"><h1>Number</h1><p>${number}</div><div class="grid-item"><h1>Subject</h1><p>${subject}</div><div class="grid-item"><h1>Message</h1><p>${message}</div></div></section></body></html>`,
    };
    await sendgrid.send(msg);
    res.json({ success: true });
  }
}
