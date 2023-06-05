import nodemailer from 'nodemailer';
require('dotenv').config();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'chikviladze555@gmail.com',
      subject: `Contact from submission ${name}`,
      html: `<p>You have a new contact for submission</p><br>
        <p><strong>Name: </strong> ${name}</p><br>
        <p><strong>Email: </strong> ${phone}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>`,
    });
    console.log('Message sent', emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
