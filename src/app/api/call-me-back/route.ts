import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract form data
    const fullName = body.fullName as string;
    const businessName = body.businessName as string;
    const email = body.email as string;
    const phone = body.phone as string;
    const countryCode = body.countryCode as string;
    const message = body.message as string;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Full name and email are required',
        },
        { status: 400 }
      );
    }

    // Save to database
    const callMeBackRecord = await prisma.callMeBack.create({
      data: {
        fullName,
        businessName: businessName || null,
        email,
        phone: phone || null,
        countryCode: countryCode || null,
        message: message || null,
      },
    });

    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@nextbroadcastmedia.com';

    try {
      // Send admin notification email
      await sendEmail(
        adminEmail,
        `New Call Me Back Request from ${fullName}`,
        `
          <h2>New Call Me Back Request</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Business/Show Name:</strong> ${businessName || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${countryCode ? `${countryCode} ` : ''}${phone || 'N/A'}</p>
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Request ID:</strong> ${callMeBackRecord.id}</p>
        `
      );

      // Send confirmation email to user
      // await sendEmail(
      //   email,
      //   'Thank you for your callback request',
      //   `
      //     <h2>Thank you for your request!</h2>
      //     <p>Dear ${fullName},</p>
      //     <p>We have received your callback request and someone from our team will get back to you shortly.</p>
      //     <p>If you have any questions, please don't hesitate to contact us.</p>
      //     <p>Best regards,<br>The Next Broadcast Media Team</p>
      //   `
      // );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Callback request submitted successfully',
        id: callMeBackRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting callback request:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit callback request',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

