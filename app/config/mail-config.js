import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.qcentrio.com",
  port: 465,
  secure: true,
  auth: {
    user: "qcadmin",
    pass: `Dj"Hi4PaJt9Kt_^`,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;
