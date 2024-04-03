"use server";

import { redirect } from "next/navigation";
import transporter from "../config/mail-config";
import fs from "fs";
import zod from "zod";
import { cookies } from "next/headers";

export async function sendMail(formData) {
  const email = formData.get("email");
  const firstname = formData.get("first-name");
  const lastname = formData.get("last-name");
  const phone = formData.get("contact");
  const message = formData.get("message");

  const data = {
    email,
    firstname,
    lastname,
    phone,
    message,
  };

  let parsedData;

  const userSchema = zod.object({
    email: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    phone: zod.string(),
    message: zod.string(),
  });

  try {
    parsedData = userSchema.parse(data);
  } catch (error) {
    console.error("Validation failed:", error.errors);
  }

  const emailTemplate = fs.readFileSync("app/email/mail.html", "utf8");
  const emailData = {
    firstname: parsedData.firstname,
    lastname: parsedData.lastname,
  };

  const fillPlaceholders = (template, data) => {
    let filledTemplate = template;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const regex = new RegExp(`{{${key}}}`, "g");
        filledTemplate = filledTemplate.replace(regex, data[key]);
      }
    }
    return filledTemplate;
  };

  const filledHtml = fillPlaceholders(emailTemplate, emailData);

  const info = await transporter.sendMail({
    from: "sai.harikiran@x-verity.com",
    to: parsedData.email,
    subject: "Qcentrio",
    html: filledHtml,
  });

  if (info.response.includes("OK")) {
    redirect("/thank-you", "push");
  }
}

export async function singleMail(formData) {
  const email = formData.get("email");

  const data = {
    email,
  };

  let parsedData;

  const userSchema = zod.object({
    email: zod.string().email(),
  });

  try {
    parsedData = userSchema.parse(data);
  } catch (error) {
    console.error("Validation failed:", error.errors);
  }

  const emailTemplate = fs.readFileSync(
    "app/email/coming-soon-mail.html",
    "utf8"
  );

  await transporter.sendMail({
    from: "sai.harikiran@x-verity.com",
    to: parsedData.email,
    subject: "Qcentrio: We’re Upgrading!",
    html: emailTemplate,
  });

  await transporter.sendMail({
    from: "sai.harikiran@x-verity.com",
    to: "sai.harikiran@x-verity.com",
    subject: "Coming soon page",
    html: parsedData.email,
  });
}

export async function storeCookie(formData) {
  const code = formData.get("code");
  const secret_code = 7462;

  const data = {
    code,
  };

  let parsedData;

  const userSchema = zod.object({
    code: zod.string(),
  });

  try {
    parsedData = userSchema.parse(data);
  } catch (error) {
    console.error("Validation failed:", error.errors);
  }

  if (parsedData.code == secret_code) {
    cookies().set("qcentrio-access", "approved", { secure: true });
    redirect("/", "push");
  } else {
    console.log("Not Same");
  }
}
