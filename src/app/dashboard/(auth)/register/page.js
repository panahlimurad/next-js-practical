"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "@/app/fairbaseDb";


const Register = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  return (
    <div className={styles.container}>
      <form>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit" disabled={!email || !password} onClick={()=>signIn("credentials",{email,password,redirect:true, callbackUrl:"/"})}>Register</button>
      </form>
      <Link href="/dashboard/login">Forgot Password?</Link>
    </div>
  );
};

export default Register;
