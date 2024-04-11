"use server";

import { redirect } from "next/navigation";
import transporter from "../config/mail-config";
import fs from "fs";
import zod from "zod";
import { cookies } from "next/headers";

// Contact page email
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

  const emailTemplate = fs.readFileSync(
    "app/email/contact-us-mail.html",
    "utf8"
  );
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

// Coming soon page email
export async function singleMail(formData) {
  const email = formData.get("email");
  const name = formData.get("name");

  const data = {
    email,
    name,
  };

  let parsedData;

  const userSchema = zod.object({
    email: zod.string().email(),
    name: zod.string(),
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

  const emailData = {
    name: parsedData.name,
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

  await transporter.sendMail({
    from: "sai.harikiran@x-verity.com",
    to: parsedData.email,
    subject: "Qcentrio: We’re Upgrading!",
    html: filledHtml,
  });

  await transporter.sendMail({
    from: "sai.harikiran@x-verity.com",
    to: "sai.harikiran@x-verity.com",
    subject: "Coming soon page",
    html: parsedData.email,
  });
}

export async function storeCookie(formData) {
  const secret_code = 4298;
  let code = "";

  for (let i = 1; i <= 4; i++) {
    code += formData.get("code" + i);
  }

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
  const now = new Date();
  const expireTime = now.getTime() + 1000 * 60 * 60 * 24 * 7;

  if (parsedData.code == secret_code) {
    cookies().set("qcentrio-access", "approved", {
      // secure: true,
      expires: new Date(expireTime),
      // domain: "qcentrio.com",
    });
    redirect("/", "push");
  } else {
    console.log("Not Same");
  }
}
