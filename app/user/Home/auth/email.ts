// src/lib/email.ts
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
  tls: {
    rejectUnauthorized: false // Only for development, remove in production
  },
  connectionTimeout: 30000, // 30 seconds
  greetingTimeout: 30000, // 30 seconds
  socketTimeout: 30000, // 30 seconds
});

// Verify transporter on startup (optional, for testing)
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter ready');
  }
});

export async function sendVerificationEmail({user,verificationUrl}:{user:{name:string,email:string},verificationUrl:string}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Verify Your Email',
      html: `
        <h1>Email Verification</h1>
        <p>Hello ${user.name},</p>
        <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" 
             style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Verify Email Address
          </a>
        </p>
        <p><strong>Note:</strong> After clicking the verification link, you will be automatically redirected to your account page.</p>
        <p>If you didn't create an account, you can safely ignore this email.</p>
        <p>This link expires in 1 hour.</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully to:', user.email);
    return result;
  } catch (error) {
    console.error('Error sending verification email to:', user.email, error);
    // More detailed error logging
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Error code:', (error as { code?: string }).code);
    }
    if (error && typeof error === 'object' && 'command' in error) {
      console.error('Error command:', (error as { command?: string }).command);
    }
    if (error && typeof error === 'object' && 'errno' in error) {
      console.error('Error errno:', (error as { errno?: number }).errno);
    }
    if (error && typeof error === 'object' && 'syscall' in error) {
      console.error('Error syscall:', (error as { syscall?: string }).syscall);
    }
    if (error && typeof error === 'object' && 'address' in error) {
      console.error('Error address:', (error as { address?: string }).address);
    }
    if (error && typeof error === 'object' && 'port' in error) {
      console.error('Error port:', (error as { port?: number }).port);
    }
    const errorMessage = error && typeof error === 'object' && 'message' in error ? 
      (error as { message?: string }).message : 'Unknown error';
    throw new Error(`Failed to send verification email: ${errorMessage}`);
  }
}

export async function sendResetPasswordEmail({user,url}:{user:{name:string,email:string},url:string}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Reset Your Password',
      html: `
        <h1>Password Reset Request</h1>
        <p>Hello ${user.name},</p>
        <p>You have requested to reset your password. Click the button below to reset your password:</p>
        <p style="text-align: center; margin: 30px 0;">
          <a href="${url}" 
             style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Reset Password
          </a>
        </p>
        <p><strong>Note:</strong> After clicking the reset link, you will be automatically redirected to the password reset page.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <p>This link expires in 1 hour.</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully to:', user.email);
    return result;
  } catch (error) {
    console.error('Error sending password reset email to:', user.email, error);
    // More detailed error logging
    // Type assertion for accessing properties
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Error code:', (error as { code?: string }).code);
    }
    if (error && typeof error === 'object' && 'command' in error) {
      console.error('Error command:', (error as { command?: string }).command);
    }
    if (error && typeof error === 'object' && 'errno' in error) {
      console.error('Error errno:', (error as { errno?: number }).errno);
    }
    if (error && typeof error === 'object' && 'syscall' in error) {
      console.error('Error syscall:', (error as { syscall?: string }).syscall);
    }
    if (error && typeof error === 'object' && 'address' in error) {
      console.error('Error address:', (error as { address?: string }).address);
    }
    if (error && typeof error === 'object' && 'port' in error) {
      console.error('Error port:', (error as { port?: number }).port);
    }
    const errorMessage = error && typeof error === 'object' && 'message' in error ? 
      (error as { message?: string }).message : 'Unknown error';
    throw new Error(`Failed to send password reset email: ${errorMessage}`);
  }
}
