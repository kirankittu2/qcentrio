import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sai.harikiran@x-verity.com",
    pass: "lgvt jqwa nvlh tspr ",
  },
});

export default transporter;
