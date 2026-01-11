
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, email, city, experience, message, jobTitle, jobCategory } = body;

        // Validate required fields
        if (!name || !phone || !email || !city || !experience) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        // You need to enable "App Passwords" in your Google Account:
        // https://myaccount.google.com/apppasswords
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_APP_PASSWORD, // Your App Password
            },
        });

        // Email Content
        const mailOptions = {
            from: `"Job Application Portal" <${process.env.EMAIL_USER}>`,
            to: 'jobshrjaipur2023@gmail.com', // Where you want to receive applications
            subject: `New Job Application: ${jobTitle} (${name})`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Job Application Received</h2>
          <p>You have received a new application from your website.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Job Details</h3>
            <p><strong>Position:</strong> ${jobTitle}</p>
            <p><strong>Category:</strong> ${jobCategory}</p>
            
            <h3 style="color: #1f2937;">Candidate Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Current City:</strong> ${city}</p>
            <p><strong>Experience:</strong> ${experience}</p>
          </div>

          ${message ? `
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0; color: #1e40af;">Additional Message</h3>
            <p style="margin-bottom: 0;">${message}</p>
          </div>
          ` : ''}
          
          <p style="font-size: 12px; color: #6b7280; margin-top: 30px;">
            This email was sent automatically from your website.
          </p>
        </div>
      `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Application sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send application' },
            { status: 500 }
        );
    }
}
