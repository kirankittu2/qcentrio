import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "sai.harikiran@x-verity.com",
//     pass: "rhnt tmej abqm pntd ",
//     // pass: "rhnt tmej abqm pntd ",
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "kirankittu3760@gmail.com",
    pass: "tesssqlrggnzspue",
  },
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "info@qcentrio.com",
//     pass: "Qcentrio@09",
//   },
// });

export default transporter;
