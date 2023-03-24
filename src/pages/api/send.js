import sendgrid from "@sendgrid/mail";
export default async function handler(req, res) {
  sendgrid.setApiKey(
    "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"
  );
  if (req.method === "POST") {
    const { name, email, number, subject, message } = req.body;
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: subject,
      html: `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${
          !number ? "No Number provided" : number
        }</p>
        <p><strong>Message:</strong> ${message}</p>`,
    };
    await sendgrid.send(msg);
    res.json({ success: true });
  }
}
