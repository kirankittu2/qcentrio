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

    const info = await handleMailFillup(
      parsedData,
      "Unlock Growth and Transformation with Our Data-Driven Solutions",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

async function handleMailFillup(data, heading, template) {
  const info = await transporter.sendMail({
    from: "qcadmin@180.133.167.72.host.secureserver.net",
    to: data.email,
    subject: heading,
    html: template,
  });

  return info;
}

async function handleMainMailFillup(data, template) {
  let htmlContent = "";
  Object.entries(data).forEach(([key, value]) => {
    const capitalizedKey = capitalizeFirstLetter(key);
    htmlContent += `<tr><td style="padding: 0px 25px 0px 25px">${capitalizedKey}: ${value}</td></tr>`;
  });

  const fullHTMLContent = template.replace("{{dynamicContent}}", htmlContent);

  const owner = await transporter.sendMail({
    from: "qcadmin@180.133.167.72.host.secureserver.net",
    to: "qcadmin@180.133.167.72.host.secureserver.net",
    subject: "Form Filled",
    html: fullHTMLContent,
  });

  return owner;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

    const info = await handleMailFillup(
      parsedData,
      "Streamline, Secure, and Innovate with QCentrio",
      filledHtml
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

export async function careersMail(formData) {
  // console.log(formData);
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
    const resume = formData.get("resume");
    const message = formData.get("message");
    const data = {
      email,
      firstname,
      lastname,
      resume,
      message,
    };
    let parsedData;
    const userSchema = zod.object({
      email: zod.string().email(),
      firstname: zod.string(),
      lastname: zod.string(),
      resume: zod.instanceof(File),
      message: zod.string(),
    });
    try {
      parsedData = userSchema.parse(data);
    } catch (error) {
      console.error("Validation failed:", error.errors);
    }
    const emailTemplate = fs.readFileSync(
      "app/email/careers-page/job-mail.html",
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
    const fileBuffer = await resume.arrayBuffer();
    const fileStream = Buffer.from(fileBuffer);

    const info = await handleMailFillup(
      parsedData,
      "Streamline, Secure, and Innovate with QCentrio",
      filledHtml
    );

    let htmlContent = "";
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "resume") {
        const capitalizedKey = capitalizeFirstLetter(key);
        htmlContent += `<tr><td style="padding: 0px 25px 0px 25px">${capitalizedKey}: ${value}</td></tr>`;
      }
    });

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const fullHTMLContent = emailTemplate2.replace(
      "{{dynamicContent}}",
      htmlContent
    );

    const owner = await transporter.sendMail({
      from: "qcadmin@180.133.167.72.host.secureserver.net",
      to: "qcadmin@180.133.167.72.host.secureserver.net",
      subject: "Form Filled",
      html: fullHTMLContent,
      attachments: [
        {
          filename: resume.name, // Use original filename
          content: fileStream,
        },
      ],
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

    const info = await handleMailFillup(
      parsedData,
      "Appreciation for contacting QCentrio",
      filledHtml
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

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

    const info = await handleMailFillup(
      parsedData,
      "How to Reach Qcentrio",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

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

    const info = await handleMailFillup(
      parsedData,
      "Stay ahead of the curve with our monthly insights!",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

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

    const info = await handleMailFillup(
      parsedData,
      "Drive Growth & Innovation: Your One-Stop Shop for Business Transformation",
      filledHtml
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

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
    from: "qcadmin@180.133.167.72.host.secureserver.net",
    to: parsedData.email,
    subject: "Qcentrio: We’re Upgrading!",
    html: filledHtml,
  });

  let htmlContent = "";
  Object.entries(parsedData).forEach(([key, value]) => {
    htmlContent += `<p>${key}: ${value}</p>`;
  });

  const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

  const fullHTMLContent = emailTemplate2.replace(
    "{{dynamicContent}}",
    htmlContent
  );

  await transporter.sendMail({
    from: "qcadmin@180.133.167.72.host.secureserver.net",
    to: "qcadmin@180.133.167.72.host.secureserver.net",
    subject: "Coming soon page",
    html: fullHTMLContent,
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

    const info = await handleMailFillup(
      parsedData,
      "Unleash your best with QCentrio Insights",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

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
