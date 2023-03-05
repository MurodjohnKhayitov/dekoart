import React from 'react'
import styles from './service.module.css'
export default function Service() {
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Text}>

                    <p>XIZMATLARIMIZ</p>
                    <p>
                        BIZ AMALGA OSHIRGAN ISHLARNING KO'RINISHLARI</p>


                </div>
                <div className={styles.CardGroup}>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543230848_full_photo_2016-07-28_18-00-20.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                XONADONLARNI TA'MIRLASH
                            </div>
                            <div className={styles.Maintext}>
                                Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.

                            </div>
                            <div className={styles.MainBtn}>
                                <button type="">Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231039_full_farxod15.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>

                                UYLARNI TA'MIRLASH                            </div>
                            <div className={styles.Maintext}>
                                Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.

                            </div>
                            <div className={styles.MainBtn}>
                                <button type="">Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231094_full_farxod27.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                OFISLARNI TA'MIRLASH                            </div>
                            <div className={styles.Maintext}>
                                Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.
                            </div>
                            <div className={styles.MainBtn}>
                                <button type="">Batafsil</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231070_full_farxod7.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                KOTTEJLARNI TA'MIRLASH                            </div>
                            <div className={styles.Maintext}>
                                Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.
                            </div>
                            <div className={styles.MainBtn}>
                                <button type="">Batafsil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
