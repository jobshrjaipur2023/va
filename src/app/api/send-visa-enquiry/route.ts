import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, city, country, message, visaType } = body;

        // Validate required fields
        if (!name || !phone || !email || !city || !country || !visaType) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "jobshrjaipur2023@gmail.com",
            subject: `🛂 New Visa Enquiry: ${visaType} - ${country}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { font-size: 16px; color: #111827; margin-top: 4px; padding: 10px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; }
            .highlight { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🛂 New Visa Enquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Job's HR Abroad - Visa Services</p>
            </div>
            <div class="content">
              <div class="highlight">
                <strong style="font-size: 18px;">Visa Type: ${visaType}</strong><br>
                <span style="opacity: 0.9;">Destination: ${country}</span>
              </div>
              
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">City</div>
                <div class="value">${city}</div>
              </div>
              
              <div class="field">
                <div class="label">Destination Country</div>
                <div class="value">${country}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="label">Additional Details</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <strong style="color: #92400e;">⚡ Action Required</strong>
                <p style="margin: 5px 0 0 0; color: #78350f; font-size: 14px;">Please contact this enquiry within 24 hours.</p>
              </div>
            </div>
            <div class="footer">
              <p>This enquiry was submitted via jobshrabroad.com</p>
              <p style="font-size: 12px; color: #9ca3af;">Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Visa enquiry sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending visa enquiry:", error);
        return NextResponse.json(
            { error: "Failed to send visa enquiry" },
            { status: 500 }
        );
    }
}
