import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "qcentrio@gmail.com",
    pass: "rnoq tndw qnpb pxnv",
  },
});

export default transporter;
