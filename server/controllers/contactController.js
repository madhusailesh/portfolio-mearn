import Contact from "../models/contactModel.js";

import nodemailer from "nodemailer";

export const sendMessage = async (
  req,
  res
) => {
  try {
    const { name, email, message } =
      req.body;

    // SAVE TO DATABASE

    await Contact.create({
      name,
      email,
      message,
    });

    // EMAIL TRANSPORTER

    const transporter =
      nodemailer.createTransport({
        host: "smtp.gmail.com",

        port: 465,

        secure: false,

        auth: {
          user: process.env.EMAIL_USER,

          pass: process.env.EMAIL_PASS,
        },
      });
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
    // VERIFY SMTP

    await transporter.verify();

    console.log("SMTP READY");

    // SEND MESSAGE TO YOU

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Message from ${name}`,

      html: `
        <div style="
          background:#0f0f0f;
          padding:40px;
          color:white;
          font-family:Arial;
        ">
          
          <h1 style="
            color:#ec4899;
            margin-bottom:25px;
          ">
            🚀 New Portfolio Message
          </h1>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            <strong>Name:</strong> ${name}
          </p>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            <strong>Email:</strong> ${email}
          </p>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            <strong>Message:</strong>
          </p>

          <div style="
            background:#18181b;
            padding:20px;
            border-radius:12px;
            margin-top:10px;
            color:#f4f4f5;
            line-height:1.8;
          ">
            ${message}
          </div>
        </div>
      `,
    });

    // AUTO REPLY TO USER

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: email,

      subject:
        "Thanks for contacting Madhu Sailesh",

      html: `
        <div style="
          background:#0f0f0f;
          padding:40px;
          color:white;
          font-family:Arial;
        ">
          
          <h1 style="
            color:#ec4899;
            margin-bottom:20px;
          ">
            Thank You 🚀
          </h1>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            Hi ${name},
          </p>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            Thanks for reaching out to 
            <strong>
              Madhu Sailesh
            </strong>.
          </p>

          <p style="
            color:#d4d4d8;
            line-height:1.8;
            font-size:16px;
          ">
            Your message has been received successfully.
            I’ll get back to you as soon as possible.
          </p>

          <div style="
            margin-top:30px;
          ">
            
            <a
              href="https://github.com/madhusailesh"
              style="
                display:inline-block;
                margin-right:15px;
                padding:12px 20px;
                background:#18181b;
                color:white;
                text-decoration:none;
                border-radius:10px;
              "
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/madhu-sailesh-sasamal-6918912a4/"
              style="
                display:inline-block;
                padding:12px 20px;
                background:#2563eb;
                color:white;
                text-decoration:none;
                border-radius:10px;
              "
            >
              LinkedIn
            </a>
          </div>

          <p style="
            margin-top:40px;
            color:#71717a;
          ">
            — Madhu Sailesh
          </p>
        </div>
      `,
    });

    res.status(200).json({
      message:
        "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};