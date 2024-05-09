"use server";

import { redirect } from "next/navigation";
import transporter from "../config/mail-config";
import fs from "fs";
import zod from "zod";
import { cookies } from "next/headers";

// Home page hero section slide emails
export async function homeslidesMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  // console.log(recaptchDataScore);
  if (recaptchDataScore.score >= 0.5) {
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
      "app/email/home-page/hero-section-mail.html",
      "utf8"
    );

    const mailOptions1 = {
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject:
        "Unlock Growth and Transformation with Our Data-Driven Solutions",
      html: emailTemplate,
    };

    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    console.log(info);

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const mailOptions2 = {
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    };

    const owner = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Contact page email
export async function contactMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const recaptchDataScore = await response.json();
  if (recaptchDataScore.score >= 0.5) {
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
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject: "Streamline, Secure, and Innovate with QCentrio",
      html: filledHtml,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Contact us page main mail
export async function contactusMaimMail(formData) {
  console.log(formData);
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  if (recaptchDataScore.score >= 0.5) {
    const email = formData.get("email");
    const firstname = formData.get("first-name");
    const lastname = formData.get("last-name");
    const phone = formData.get("contact");
    const purpose = formData.get("purpose");
    const message = formData.get("message");
    const data = {
      email,
      firstname,
      lastname,
      phone,
      purpose,
      message,
    };
    let parsedData;
    const userSchema = zod.object({
      email: zod.string().email(),
      firstname: zod.string(),
      lastname: zod.string(),
      phone: zod.string(),
      purpose: zod.string(),
      message: zod.string(),
    });
    try {
      parsedData = userSchema.parse(data);
    } catch (error) {
      console.error("Validation failed:", error.errors);
    }
    const emailTemplate = fs.readFileSync(
      "app/email/contact-us-page/hero-section-main.html",
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
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject: "Appreciation for contacting QCentrio",
      html: filledHtml,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Contact us reach out mail
export async function contactUsReactOutMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  // console.log(recaptchDataScore);
  if (recaptchDataScore.score >= 0.5) {
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
      "app/email/contact-us-page/request-callback-mail.html",
      "utf8"
    );

    const info = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject: "How to Reach Qcentrio",
      html: emailTemplate,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Footer email
export async function footerMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  // console.log(recaptchDataScore);
  if (recaptchDataScore.score >= 0.5) {
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
    const emailTemplate = fs.readFileSync("app/email/footer-mail.html", "utf8");

    const info = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject: "Stay ahead of the curve with our monthly insights!",
      html: emailTemplate,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Need something email
export async function needSomethingMail(formData) {
  console.log(formData);
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  if (recaptchDataScore.score >= 0.5) {
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
      "app/email/need-something-mail.html",
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
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject:
        "Drive Growth & Innovation: Your One-Stop Shop for Business Transformation",
      html: filledHtml,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
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

// Insights email
export async function insightsMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LdTKMUpAAAAALkJxsSMgqRGpUnfFvQec0W4vZLu";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  if (recaptchDataScore.score >= 0.5) {
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
      "app/email/insights-page/hero-section-mail.html",
      "utf8"
    );

    const info = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: parsedData.email,
      subject: "Unleash your best with QCentrio Insights",
      html: emailTemplate,
    });

    let htmlContent = "";
    Object.entries(parsedData).forEach(([key, value]) => {
      htmlContent += `<p>${key}: ${value}</p>`;
    });

    const owner = await transporter.sendMail({
      from: "saiharikiran@outlook.com",
      to: "saiharikiran@outlook.com",
      subject: "Form Filled",
      html: htmlContent,
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
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
      // sameSite: "none",
    });
    redirect("/", "push");
  } else {
    console.log("Not Same");
  }
}

export async function cookieConsent() {
  try {
    const now = new Date();
    const expireTime = now.getTime() + 1000 * 60 * 60 * 24 * 7;

    cookies().set("qcentrio-cookie-consent", "approved", {
      // secure: true,
      expires: new Date(expireTime),
      // domain: "qcentrio.com",
      // sameSite: "none",
    });
    return { success: true, message: "Cookie consent has been set." };
  } catch (error) {
    return {
      success: false,
      message: "Error occurred while setting cookie consent.",
    };
  }
}
