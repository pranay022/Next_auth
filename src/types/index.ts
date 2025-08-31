// User related types
export interface IUser {
    _id?: string;
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken?: string;
    forgotPasswordTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

// Email related types
export interface EmailParams {
    email: string;
    emailType: "VERIFY" | "RESET";
    userId: string;
}

// JWT token types
export interface DecodedToken {
    id: string;
    username: string;
    email: string;
    iat: number;
    exp: number;
    [key: string]: any;
}

// API response types
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}

// Login/Signup types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupCredentials {
    username: string;
    email: string;
    password: string;
}
