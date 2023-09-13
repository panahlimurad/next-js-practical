"use client"
import React, { useContext } from 'react'
import styles from "./darkModeToggle.module.css"
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToggle = () => {

    const{toggle, mode} = useContext(ThemeContext)
    

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><BsMoon size={15}/></div>
        <div className={styles.icon}><BsSun size={15}/></div>
        <div className={styles.ball} style={mode === "light" ? {left:"2px"} : {right:"2px"}}></div>
    </div>
  )
}

export default DarkModeToggle