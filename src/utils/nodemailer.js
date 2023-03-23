import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});

const sendMail = async (data) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: data.subject,
    html: `<html><head><style>@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;900&display=swap);*{padding:0;margin:0;word-break:break-all;font-family:Poppins,sans-serif;color:#fff}section{width:100vw;margin:0}.mail-grid{position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#101010;max-width:50%}.grid-item{background-color:#202020;padding:1rem 2rem;border-radius:.5rem;margin-block:.5rem}</style></head><body><section class="mail-info"><div class="mail-grid"><div class="grid-item"><h1>Name</h1><p>${data.name}</div><div class="grid-item"><h1>Email</h1><a href="mailto:${data.email}"><p>${data.email}</a></div><div class="grid-item"><h1>Number</h1><p>${data.number}</div><div class="grid-item"><h1>Subject</h1><p>${data.subject}</div><div class="grid-item"><h1>Message</h1><p>${data.message}</div></div></section></body></html>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export { sendMail };
