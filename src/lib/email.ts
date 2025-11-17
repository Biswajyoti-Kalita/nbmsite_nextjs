import nodemailer from 'nodemailer';

// Create email transporter from .env credentials
export const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL, // Your Gmail address
      pass: process.env.SMTP_PASS // Your Gmail app password
    }
  });
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('SMTP credentials not configured. Email will not be sent.');
    return;
  }

  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@nextbroadcastmedia.com';

  try {
    await transporter.sendMail({
      from: fromEmail,
      to,
      subject,
      html,
    });
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

