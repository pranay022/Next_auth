import nodemailer from 'nodemailer';
import User from '@/model/userModel';
import bcryptjs from 'bcryptjs';
import { EmailParams } from '@/types';

export const sendEmail = async({email, emailType, userId}: EmailParams) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

       
        if(emailType == "VERIFY"){
             await User.findByIdAndUpdate(userId, 
            {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            })
        }else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
            {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
            port: parseInt(process.env.SMTP_PORT || "2525"),
            auth: {
                user: process.env.SMTP_USER || "65de0e56e67d7a",
                pass: process.env.SMTP_PASS || "11f91389da5dfe"
            }
        })

        const mailOptions = {
            from: 'cpranay882@gmail.com',
            to: email,
            subject: emailType == "VERIFY" ? "Verify you email" : "Reset you password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : " reset your password"} or copy and past the link below in you browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`
        }

        const mailresponse = await transporter.sendMail(mailOptions)
        return mailresponse;
    } catch (error:any) {
        console.error('Email sending failed:', error);
        throw new Error(error.message || 'Failed to send email');
    }
}







