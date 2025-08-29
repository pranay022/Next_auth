"use client"
import axios from "axios";
import Link from "next/link";
import React , {useState} from "react";
import { toast } from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {   
            await axios.get("/api/users/logout")
            toast.success("Logout Successful");
            router.push("/login");
        } catch (error:any) {
            console.log(error.meessage);
            toast.error(error.message)
        }
    }

    const getUserDetails = async() => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Welcome to your profile page</p>
            <h2 className="p-3 rounded bg-green-5--">{data == 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button 
            onClick={logout}
            className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
            <button 
            onClick={getUserDetails}
            className="bg-yello-500 text-white px-4 py-2 rounded">Get User Details</button>
        </div>
    )
}