# Next.js Authentication System

This is a [Next.js](https://nextjs.org) project that implements a custom authentication system with MongoDB integration, featuring user registration, login, email verification, and password reset functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Before running the project, you need to set up your environment variables:

1. Copy `env.example` to `.env.local`
2. Update the following variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `TOKEN_SECRET`: A secure random string for JWT signing
   - `DOMAIN`: Your application domain (e.g., http://localhost:3000)
   - `SMTP_*`: Your email service credentials

## Features

- 🔐 Custom JWT-based authentication
- 📧 Email verification system
- 🔒 Password reset functionality
- 🛡️ Protected routes with middleware
- 🗄️ MongoDB integration with Mongoose
- 📱 Responsive UI with Tailwind CSS

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
