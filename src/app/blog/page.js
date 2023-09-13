import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'


export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

const Blog = () => {

  return (
    <div className={styles.container}>
        <Link href="/blog/illustrations" >
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/illustrations.png" alt=""/>
        </div>
        <div className={styles.content}>
        <h1></h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed nec nisl eu orci eleifend ullamcorper. Vivamus luctus
              augue eget ligula tincidunt, sit amet fermentum quam venenatis."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</p>
        </div>
        </Link> 
        <Link href="/blog/websites" >
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/websites.png" alt=""/>
        </div>
        <div className={styles.content}>
        <h1></h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed nec nisl eu orci eleifend ullamcorper. Vivamus luctus
              augue eget ligula tincidunt, sit amet fermentum quam venenatis."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</p>
        </div>
        </Link> 
        <Link href="/blog/application" >
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/app.png" alt=""/>
        </div>
        <div className={styles.content}>
        <h1></h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed nec nisl eu orci eleifend ullamcorper. Vivamus luctus
              augue eget ligula tincidunt, sit amet fermentum quam venenatis."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</p>
        </div>
        </Link> 
    </div>
  )
}

export default Blog