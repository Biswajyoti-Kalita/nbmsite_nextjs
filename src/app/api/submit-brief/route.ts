import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const formType = formData.get('formType') as string;
    const fullName = formData.get('fullName') as string;
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    // Campaign details
    const campaignAim = formData.get('campaignAim') as string;
    const campaignFullName = formData.get('campaignFullName') as string;
    const geoTargeting = formData.get('geoTargeting') as string;
    const targetAudience = formData.get('targetAudience') as string;
    const languageTargeting = formData.get('languageTargeting') as string;
    const campaignDates = formData.get('campaignDates') as string;
    const budget = formData.get('budget') as string;
    const preferredFormat = formData.get('preferredFormat') as string;
    const brief = formData.get('brief') as string;
    
    // File handling
    const file = formData.get('file') as File | null;
    let uploadedFileName = null;
    let uploadedFileSize = null;
    let uploadedFileType = null;
    let uploadedFileUrl = null;

    if (file && file.size > 0) {
      uploadedFileName = file.name;
      uploadedFileSize = file.size;
      uploadedFileType = file.type;
      
      // Save file to uploads directory
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), 'public', 'uploads', 'briefs');
      await mkdir(uploadsDir, { recursive: true });
      
      // Generate unique filename
      const timestamp = Date.now();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${timestamp}_${sanitizedFileName}`;
      const filePath = join(uploadsDir, fileName);
      
      await writeFile(filePath, buffer);
      uploadedFileUrl = `/uploads/briefs/${fileName}`;
    }

    // Save to database
    const briefRecord = await prisma.brief.create({
      data: {
        formType,
        fullName,
        businessName: businessName || null,
        email,
        phone: phone || null,
        campaignAim: campaignAim || null,
        campaignFullName: campaignFullName || null,
        geoTargeting: geoTargeting || null,
        targetAudience: targetAudience || null,
        languageTargeting: languageTargeting || null,
        campaignDates: campaignDates || null,
        budget: budget || null,
        preferredFormat: preferredFormat || null,
        brief: brief || null,
        uploadedFileName,
        uploadedFileSize,
        uploadedFileType,
        uploadedFileUrl,
      },
    });

    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@nextbroadcastmedia.com';

    try {
      // Send admin notification email
      await sendEmail(
        adminEmail,
        `New Brief Submission from ${fullName}`,
        `
          <h2>New Brief Submission</h2>
          <p><strong>Form Type:</strong> ${formType}</p>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Business/Show Name:</strong> ${businessName || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          
          ${formType === 'complete-a-form' ? `
            <h3>Campaign Details:</h3>
            <p><strong>Campaign Aim:</strong> ${campaignAim || 'N/A'}</p>
            <p><strong>Full Name:</strong> ${campaignFullName || 'N/A'}</p>
            <p><strong>Geo Targeting:</strong> ${geoTargeting || 'N/A'}</p>
            <p><strong>Target Audience:</strong> ${targetAudience || 'N/A'}</p>
            <p><strong>Language Targeting:</strong> ${languageTargeting || 'N/A'}</p>
            <p><strong>Campaign Dates:</strong> ${campaignDates || 'N/A'}</p>
            <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
            <p><strong>Preferred Format:</strong> ${preferredFormat || 'N/A'}</p>
          ` : ''}
          
          ${formType === 'write-a-brief' ? `
            <h3>Brief:</h3>
            <p>${brief || 'N/A'}</p>
          ` : ''}
          
          ${formType === 'upload-file' && uploadedFileName ? `
            <h3>Uploaded File:</h3>
            <p><strong>File Name:</strong> ${uploadedFileName}</p>
            <p><strong>File Size:</strong> ${(uploadedFileSize! / 1024 / 1024).toFixed(2)} MB</p>
            <p><strong>File Type:</strong> ${uploadedFileType}</p>
            ${uploadedFileUrl ? `<p><strong>File URL:</strong> <a href="${process.env.BASE_URL || 'http://localhost:3000'}${uploadedFileUrl}">View File</a></p>` : ''}
          ` : ''}
          
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Brief ID:</strong> ${briefRecord.id}</p>
        `
      );

      // Send confirmation email to user
    //   await sendEmail(
    //     email,
    //     'Thank you for submitting your brief',
    //     `
    //       <h2>Thank you for your submission!</h2>
    //       <p>Dear ${fullName},</p>
    //       <p>We have received your brief submission and someone from our team will get back to you shortly.</p>
    //       <p>If you have any questions, please don't hesitate to contact us.</p>
    //       <p>Best regards,<br>The Next Broadcast Media Team</p>
    //     `
    //   );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Brief submitted successfully',
        id: briefRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting brief:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit brief',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

