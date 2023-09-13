"use client"

import React, { useState } from 'react'
import styles from "./page.module.css";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/fairbaseDb';



const Login = () => {

  const [email, setEmail] = useState("")

  const sendEmail= ()=>{
    sendPasswordResetEmail(auth,email)
  }

  return (
    <div className={styles.container}>
      <form>
        <input disabled={!email} type="email" placeholder="Email" required />
        <button onClick={()=>sendEmail()} type="submit">Send Forgot Password Email</button>
      </form>
    </div>
  )
}

export default Login