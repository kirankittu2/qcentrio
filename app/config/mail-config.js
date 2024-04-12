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
