import nodemailer from 'nodemailer';
require('dotenv').config();
import initMiddleware from '../../utils/initMiddleware';

const cors = initMiddleware(
  Cors({
    methods: ['POST'], // Adjust the allowed methods according to your needs
  })
);

export default async function handler(req, res) {
  await cors(req, res); // Apply CORS to your API route

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
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
        <p><strong>Name: </strong> ${name}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Phone: </strong> ${phone}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>`,
    });
    console.log('Message sent', emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
}
