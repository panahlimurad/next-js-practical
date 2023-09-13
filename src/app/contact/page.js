import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/button'


export const metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Leets Keep in Touch</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contactUs1.png" alt="contactUs" fill={true} className={styles.img}/>
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='Email'/>
          <textarea className={styles.textArea} cols={30} rows={10} placeholder='Message'></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact