import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/button';
import Image from 'next/image';
import {items} from "./data"
import { notFound } from 'next/navigation'

const getData=(cat)=>{
  const data = items[cat]


  if(data){
    return data
  }
  return notFound()
}



const Category = ({params}) => {
  const data = getData(params.category)
 
  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
      {data.map((item)=>(
        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p>{item.desc}</p>
            <Button url="#" text="See more"/>
        </div>
        <div className={styles.imgContainer}>
          <Image alt={item.title} className={styles.img} fill={true} src={item.image}/>
        </div>
      </div>
      ))}
      </div>
  )
}

export default Category