"use server";

import { redirect } from "next/navigation";
import transporter from "../config/mail-config";
import fs from "fs";
import zod from "zod";
import { cookies } from "next/headers";
import path from "path";
import { queryAsync } from "./server-data";

// Home page hero section slide emails
export async function homeslidesMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      "Streamline, Secure, and Innovate with Qcentrio",
      filledHtml
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query =
          "INSERT INTO form_data (id, first_name, last_name, email_address, contact_number, message) VALUES (?, ?, ?, ?, ?, ?)";
        const results = await queryAsync(query, [
          "2",
          parsedData.firstname,
          parsedData.lastname,
          parsedData.email,
          parsedData.phone,
          parsedData.message,
        ]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

export async function careersMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      "Streamline, Secure, and Innovate with Qcentrio",
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
          filename: resume.name,
          content: fileStream,
        },
      ],
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query =
          "INSERT INTO form_data (id, first_name, last_name, email, message) VALUES (?, ?, ?, ?, ?)";
        const results = await queryAsync(query, [
          "6",
          parsedData.firstname,
          parsedData.lastname,
          parsedData.email,
          parsedData.message,
        ]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Contact us page main mail
export async function contactusMaimMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      "Appreciation for contacting Qcentrio",
      filledHtml
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query =
          "INSERT INTO form_data (id, first_name, last_name, purpose, email, contact_number, message) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const results = await queryAsync(query, [
          "7",
          parsedData.firstname,
          parsedData.lastname,
          parsedData.purpose,
          parsedData.email,
          parsedData.phone,
          parsedData.message,
        ]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

export async function productsModalData(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
    const product = formData.get("product");
    const message = formData.get("message");
    const data = {
      email,
      firstname,
      lastname,
      phone,
      product,
      message,
    };
    let parsedData;
    const userSchema = zod.object({
      email: zod.string().email(),
      firstname: zod.string(),
      lastname: zod.string(),
      phone: zod.string(),
      product: zod.string(),
      message: zod.string(),
    });
    try {
      parsedData = userSchema.parse(data);
    } catch (error) {
      console.error("Validation failed:", error.errors);
    }
    const emailTemplate = fs.readFileSync(
      "app/email/products/hero-section-main.html",
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
      "Appreciation for contacting Qcentrio",
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
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      try {
        const query = "INSERT INTO form_data (id,  email) VALUES (?, ?)";
        const results = await queryAsync(query, ["8", parsedData.email]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Footer email
export async function footerMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
    const emailTemplate = fs.readFileSync("app/email/footer-mail.html", "utf8");

    const info = await handleMailFillup(
      parsedData,
      "Stay ahead of the curve with our monthly insights!",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query = "INSERT INTO form_data (id,  email) VALUES (?, ?)";
        const results = await queryAsync(query, ["3", parsedData.email]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    } else {
      return { success: false, message: "Error Occured" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Need something email
export async function needSomethingMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      try {
        const query =
          "INSERT INTO form_data (id, first_name, last_name,  email, contact_number, message) VALUES (?, ?, ?, ?, ?, ?)";
        const results = await queryAsync(query, [
          "9",
          parsedData.firstname,
          parsedData.lastname,
          parsedData.email,
          parsedData.phone,
          parsedData.message,
        ]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
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
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
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
      "Unleash your best with Qcentrio Insights",
      emailTemplate
    );

    const emailTemplate2 = fs.readFileSync("app/email/main.html", "utf8");

    const owner = await handleMainMailFillup(parsedData, emailTemplate2);

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query = "INSERT INTO form_data (id, email) VALUES (?, ?)";
        const results = await queryAsync(query, ["4", parsedData.email]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
      return { success: true, message: "Mail sent successfully" };
    }
  } else {
    return { success: false, message: "Error Occured" };
  }
}

// Case study email
export async function caseStudyMail(formData) {
  const token = formData.get("g-recaptcha-response");
  const secretKey = "6LeHIP4pAAAAAB_9PA5TZca5isaJkIVUkCvDKxrL";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const recaptchDataScore = await response.json();
  if (recaptchDataScore.score >= 0.5) {
    const email = formData.get("email");
    const type = formData.get("type");

    const data = {
      email,
      type,
    };
    let parsedData;
    const userSchema = zod.object({
      email: zod.string().email(),
      type: zod.string(),
    });
    try {
      parsedData = userSchema.parse(data);
    } catch (error) {
      console.error("Validation failed:", error.errors);
    }

    let emailTemplate;
    let fileStream;
    let subject;
    let filename;
    if (type == "bisql") {
      emailTemplate = fs.readFileSync(
        "app/email/case-study/bi-and-sql.html",
        "utf8"
      );
      fileStream = fs.createReadStream(
        path.join("public", "/case-study-pdfs/enhancing_patient_care.pdf")
      );
      filename = path.basename(
        path.join("public", "/case-study-pdfs/enhancing_patient_care.pdf")
      );
      subject =
        "Your Requested Case Study: Enhancing Patient Care with BI and SQL Analytics at Qcentrio";
    } else if (type == "bmc") {
      emailTemplate = fs.readFileSync(
        "app/email/case-study/bmc-track-it.html",
        "utf8"
      );
      fileStream = fs.createReadStream(
        path.join("public", "/case-study-pdfs/memorial-health-services.pdf")
      );
      filename = path.basename(
        path.join("public", "/case-study-pdfs/memorial-health-services.pdf")
      );
      subject =
        "Your Requested Case Study: Memorial Health Services Improves Patient Care with BMC Track-It!";
    } else if (type == "desk") {
      emailTemplate = fs.readFileSync(
        "app/email/case-study/help-desk-system.html",
        "utf8"
      );
      fileStream = fs.createReadStream(
        path.join("public", "/case-study-pdfs/city-of-san-mateo.pdf")
      );
      filename = path.basename(
        path.join("public", "/case-study-pdfs/city-of-san-mateo.pdf")
      );
      subject =
        "Your Requested Case Study: Transition to a New Help Desk System";
    } else if (type == "land") {
      emailTemplate = fs.readFileSync(
        "app/email/case-study/land-management.html",
        "utf8"
      );
      fileStream = fs.createReadStream(
        path.join("public", "/case-study-pdfs/land-management-ecosystem.pdf")
      );
      filename = path.basename(
        path.join("public", "/case-study-pdfs/land-management-ecosystem.pdf")
      );
      subject =
        "Your Requested Case Study: Transforming Land Management with Blockchain Technology";
    } else if (type == "product") {
      emailTemplate = fs.readFileSync(
        "app/email/case-study/product-development.html",
        "utf8"
      );
      fileStream = fs.createReadStream(
        path.join(
          "public",
          "/case-study-pdfs/automated-vehicle-aerodynamics.pdf"
        )
      );
      filename = path.basename(
        path.join(
          "public",
          "/case-study-pdfs/automated-vehicle-aerodynamics.pdf"
        )
      );
      subject =
        "Your Requested Case Study: Streamline Your Product Development with Automated Vehicle Aerodynamics!";
    }

    const info = await transporter.sendMail({
      from: "qcadmin@180.133.167.72.host.secureserver.net",
      to: parsedData.email,
      subject: subject,
      html: emailTemplate,
      attachments: [
        {
          filename: filename,
          content: fileStream,
        },
      ],
    });

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
    });

    if (info.response.includes("OK") && owner.response.includes("OK")) {
      try {
        const query = "INSERT INTO form_data (id, email) VALUES (?, ?)";
        const results = await queryAsync(query, ["5", parsedData.email]);
      } catch (e) {
        console.log(e);
        return { success: false, message: "Error Occured" };
      }
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
