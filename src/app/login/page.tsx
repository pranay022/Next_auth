"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    useState(false);
    const [loading, setLoading] = useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response =  await axios.post("/api/users/login", user);
            console.log("Login successful", response.data);
            toast.success("Login successful");
            router.push("/profile")
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    useEffect( () => {
        const isButtonDisabled = !user.email || !user.password || loading;
        setButtonDisabled(isButtonDisabled);
    }, [user, loading]);
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> {loading ? "Processing" : "Login"} </h1>
            <hr />
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
             />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
             />
            <button
                onClick={onLogin}
                className="bg-gray-600 text-white p-2 rounded-lg mb-4">Login here
            </button>
            <Link href="/signup">Visit Signup  page</Link>
            
        </div>
    )
}