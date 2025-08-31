import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { DecodedToken } from "@/types";

export const getDataFromToken = (request: NextRequest): string | null => {
    try {
        const token = request.cookies.get("token")?.value || '';
        if (!token) return null;
        
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken;
        return decodedToken.id;
    } catch (error: any) {
        console.error('Token verification failed:', error);
        return null;
    }
}