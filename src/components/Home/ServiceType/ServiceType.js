import React from 'react'
import styles from './serviceType.module.css'
import AOS from "aos";
AOS.init({
    duration: 1000
});
export default function ServiceType() {
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.FirstContent} >
                    <div className={styles.TitlesImg}>
                        TAMIRLASH TURLARI
                    </div>
                </div>
                <div className={styles.SecondContent}>
                    <div className={styles.SecondContentItem}>
                        <div className={styles.SecondItemOne}>
                            <div className={styles.SecondItemOneImg}>
 
                            </div>
                            <div className={styles.SecondItemOneText} >
                                <h1>KOSMETIK TAMIRLASH</h1>
                                <p> "DEKO`ART" jamoasi, nafaqat mahsulot tanlashda, balki boshlangan yoki davom ettirilayotgan har bir pardozlash holati uchun eng ma`qbul variantlarni aniqlashda kerakli yordam ko`rsata oladi. Bizning ko`magimizda ichki va tashqi makonlardagi og`ir mehnat– zavq baxsh etuvchi jarayonga aylanadi.</p>

                            </div>

                        </div>
                        <div className={styles.SecondItemTwo}>
                            <div className={styles.SecondItemTwoText}>
                                <h1>KAPITAL TAMIRLASH</h1>
                                <p> «Dekoart» mutaxassislari, kapıtal va zamonaviy pardozlash ishlariga aloqador o`z tajribalarini barcha bilan o`rtoqlashishga tayyor. Biz har bir mahsulotimizning afzalliklari va hususiyatari, shuningdek bu mahsulotlardan to`g`ri foydalanish yollari haqida batafsil ma`lumot beramiz.</p>
                            </div>
                            <div className={styles.SecondItemTwoImg}>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
