import React from 'react'
import { NavLink } from 'react-router-dom'
import errorImg from './error.svg'
import styles from './error.module.css'
export default function Errorpage() {
    return (
        <div className={styles.Container}>
            <div className={styles.ForImg}>
                <img src={errorImg} alt="alt" />

            </div>
            <div className={styles.ForText}>
                <p>Hech narsa topilmadi Asosiy Sahifaga <NavLink to="/home">qaytish</NavLink></p>

            </div>



        </div>
    )
}
