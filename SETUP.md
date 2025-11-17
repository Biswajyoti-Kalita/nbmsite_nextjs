# Brief Submission API Setup Guide

This guide will help you set up the brief submission API with database and email functionality.

## Prerequisites

- Node.js installed
- npm or yarn package manager
- SMTP email account (Gmail, Outlook, or any SMTP-compatible email service)

## Setup Steps

### 1. Environment Variables

Create a `.env` file in the root directory (`nextbroadcastmedia/`) with the following variables:

```env
# Database (MySQL)
# Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE
# Example for local MySQL: mysql://root:password@localhost:3306/nextbroadcastmedia
# Example for cloud (PlanetScale, AWS RDS, etc.): mysql://user:pass@host:3306/dbname?sslaccept=strict
DATABASE_URL="mysql://root:password@localhost:3306/nextbroadcastmedia"

# SMTP Email Configuration
# SMTP Host (e.g., smtp.gmail.com, smtp.outlook.com, smtp.mailtrap.io)
SMTP_HOST="smtp.gmail.com"
# SMTP Port (587 for TLS, 465 for SSL, 25 for non-encrypted)
SMTP_PORT="587"
# SMTP Secure (true for SSL/465, false for TLS/587)
SMTP_SECURE="false"
# SMTP Username (your email address)
SMTP_USER="your_email@gmail.com"
# SMTP Password (your email password or app-specific password)
SMTP_PASS="your_password_or_app_password"

# Email Configuration
# Email address to receive brief submissions
ADMIN_EMAIL="admin@nextbroadcastmedia.com"
# Email address to send emails from (should match SMTP_USER or be verified)
FROM_EMAIL="noreply@nextbroadcastmedia.com"

# Base URL (for file links in emails)
BASE_URL="http://localhost:3000"
```

**Important:** 
- Replace the `DATABASE_URL` with your MySQL connection string
  - For local MySQL: `mysql://username:password@localhost:3306/database_name`
  - For cloud providers (PlanetScale, AWS RDS, etc.): Use the connection string provided by your hosting service
  - Make sure the database exists before running migrations
- **SMTP Configuration:**
  - **Gmail**: Use `smtp.gmail.com`, port `587`, and enable "App Passwords" in your Google Account settings
  - **Outlook/Hotmail**: Use `smtp-mail.outlook.com`, port `587`
  - **Custom SMTP**: Use your email provider's SMTP settings
  - For Gmail, you'll need to generate an App Password (not your regular password)
- Update `ADMIN_EMAIL` with the email address where you want to receive brief submissions
- Update `FROM_EMAIL` with the email address you want to send from (usually same as `SMTP_USER`)
- For production, update `BASE_URL` with your production URL

### 2. Set Up MySQL Database

1. **Create MySQL Database:**
   - If using local MySQL, create the database:
     ```sql
     CREATE DATABASE nextbroadcastmedia;
     ```
   - Or use your MySQL client/phpMyAdmin to create the database

2. **Initialize Database Schema:**

   Run the following commands to set up the database:

   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Create database and tables
   npx prisma db push
   ```

   **Note:** For production, consider using Prisma migrations instead:
   ```bash
   npx prisma migrate dev --name init
   ```

### 3. Verify Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the API endpoint by submitting a brief through the form

3. Check the database:
   ```bash
   npx prisma studio
   ```
   This will open Prisma Studio where you can view all submitted briefs.

## File Uploads

Uploaded files are stored in `public/uploads/briefs/` directory. Make sure this directory has write permissions.

## Email Configuration

### Setting up SMTP

#### For Gmail:
1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Create a new app password for "Mail"
   - Use this app password (not your regular password) in `SMTP_PASS`
3. Use these settings in `.env`:
   ```
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your_email@gmail.com"
   SMTP_PASS="your_app_password"
   ```

#### For Outlook/Hotmail:
1. Use these settings in `.env`:
   ```
   SMTP_HOST="smtp-mail.outlook.com"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your_email@outlook.com"
   SMTP_PASS="your_password"
   ```

#### For Other SMTP Providers:
- Check your email provider's SMTP settings documentation
- Common ports: 587 (TLS), 465 (SSL), 25 (non-encrypted)
- Set `SMTP_SECURE="true"` for SSL (port 465) or `"false"` for TLS (port 587)

### Email Templates

The API sends two emails:
- **Admin Notification**: Sent to `ADMIN_EMAIL` with all brief details
- **User Confirmation**: Sent to the user confirming their submission

## Database Schema

The `Brief` model includes:
- Contact information (name, email, phone, business name)
- Campaign details (aim, targeting, dates, budget, format)
- Brief text (for "write-a-brief" form type)
- File information (for "upload-file" form type)
- Timestamps (createdAt, updatedAt)

## API Endpoint

**POST** `/api/submit-brief`

Accepts FormData with the following fields:
- `formType`: "complete-a-form" | "write-a-brief" | "upload-file"
- `fullName`: string (required)
- `businessName`: string
- `email`: string (required)
- `phone`: string
- Campaign details (for "complete-a-form")
- `brief`: string (for "write-a-brief")
- `file`: File (for "upload-file")

Returns:
```json
{
  "success": true,
  "message": "Brief submitted successfully",
  "id": "brief_id"
}
```

## Troubleshooting

### Database Issues
- Make sure `.env` file exists with `DATABASE_URL` in MySQL format
- Ensure MySQL server is running and accessible
- Verify the database exists before running migrations
- Check MySQL user permissions (user needs CREATE, ALTER, INSERT, SELECT, UPDATE, DELETE permissions)
- For connection issues, verify host, port, username, and password in `DATABASE_URL`
- Run `npx prisma generate` if you see Prisma client errors
- Run `npx prisma db push` to sync schema changes
- For SSL connections (cloud databases), add `?sslaccept=strict` to your connection string

### Email Issues
- Verify your SMTP credentials are correct (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`)
- For Gmail, make sure you're using an App Password, not your regular password
- Check that `SMTP_PORT` and `SMTP_SECURE` match your email provider's requirements
- Verify that `FROM_EMAIL` matches `SMTP_USER` or is a verified sender
- Check server logs for email errors
- Test SMTP connection with a simple email client first
- Some email providers require "Less secure app access" to be enabled

### File Upload Issues
- Ensure `public/uploads/briefs/` directory exists and is writable
- Check file size limits (currently 2MB)
- Verify file types are allowed (.xls, .xlsx, .pdf, .doc, .docx)

## Production Deployment

1. Update environment variables in your hosting platform
2. Set up a production MySQL database:
   - **Cloud Options**: PlanetScale, AWS RDS, Google Cloud SQL, Azure Database for MySQL
   - **Connection String**: Use the connection string provided by your hosting service
   - **SSL**: Most cloud providers require SSL connections
3. Update `DATABASE_URL` to your production database connection string
4. Use Prisma migrations for production:
   ```bash
   npx prisma migrate deploy
   ```
5. Update SMTP credentials for production (use production email service)
6. Update `BASE_URL` to your production URL
7. Consider using cloud storage (S3, Cloudinary) for file uploads instead of local storage
8. Set up database connection pooling for better performance
9. For production email, consider using a dedicated email service (SendGrid, Mailgun, AWS SES) instead of personal Gmail/Outlook

