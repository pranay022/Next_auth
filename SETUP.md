# Project Setup Guide

## Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- Email service (Mailtrap, SendGrid, etc.)

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
1. Copy `env.example` to `.env.local`
2. Update the following variables:

```bash
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/your-database-name
# or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
TOKEN_SECRET=your-super-secret-jwt-key-here
# Generate a secure random string (at least 32 characters)

# Application Configuration
DOMAIN=http://localhost:3000

# Email Configuration (SMTP)
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### 3. Database Setup
1. Start MongoDB service
2. The application will automatically create the database and collections

### 4. Run the Development Server
```bash
npm run dev
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── profile/           # Protected profile page
│   ├── verifyemail/       # Email verification
│   └── layout.tsx         # Root layout
├── model/                  # Database models
│   └── userModel.ts       # User schema (MongoDB)
├── dbConfig/              # Database configuration
│   └── dbConfig.ts        # MongoDB connection
├── helpers/               # Utility functions
│   ├── mailer.ts          # Email sending logic
│   └── getDataFromToken.ts # JWT token parsing
├── types/                 # TypeScript type definitions
│   └── index.ts           # Centralized types
└── middleware.ts          # Route protection
```

## Features Implemented

- ✅ Custom JWT-based authentication
- ✅ User registration and login
- ✅ Email verification system
- ✅ Password reset functionality
- ✅ Protected routes with middleware
- ✅ MongoDB integration with Mongoose
- ✅ TypeScript support with proper types
- ✅ Environment variable configuration
- ✅ Error handling and validation
- ✅ Responsive UI with Tailwind CSS

## API Endpoints

- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User authentication
- `POST /api/users/verify` - Email verification
- `POST /api/users/reset-password` - Password reset

## Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- Protected routes with middleware
- Environment variable protection
- Input validation and sanitization

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check if MongoDB is running
   - Verify MONGO_URI in .env.local
   - Ensure network access to MongoDB

2. **Email Not Sending**
   - Verify SMTP credentials in .env.local
   - Check email service configuration
   - Ensure proper network access

3. **JWT Token Issues**
   - Verify TOKEN_SECRET is set
   - Check token expiration
   - Ensure proper cookie handling

### Development Tips

- Use `npm run lint` to check for code issues
- Check browser console for client-side errors
- Monitor server logs for backend issues
- Use MongoDB Compass for database inspection

## Deployment

1. Build the project: `npm run build`
2. Set production environment variables
3. Deploy to your preferred platform (Vercel, Netlify, etc.)
4. Ensure MongoDB is accessible from production
5. Configure production email service
