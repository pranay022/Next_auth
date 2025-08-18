"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";


export default function SingupPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false)
    const onSignup = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect( () => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> SingUp </h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Use Name"
             />
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
                onClick={onSignup}
                className="bg-gray-600 text-white p-2 rounded-lg mb-4">{buttonDisabled ? "No Signup" : "Signup"}
            </button>
            <Link href="/login">Visit loign page</Link>
            
        </div>
    )
}