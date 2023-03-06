import React, { useState, useEffect } from 'react'
import styles from './videos.module.css'
import video1 from '../../img/video1.jpg'
import video2 from '../../img/video2.jpeg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
export default function Videos() {
    const [CardInfo, setCardInfo] = useState([{
        id: 1,
        imgRel: video1,
        tit: "DEKO`ART LEONARDO MAHORAT DARSI / МАСТЕР КЛАСС DEKO`ART LEONARDO",
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 2,
        imgRel: video2,
        tit: '"DEKO`ART" MAHORAT DARSLARI / МАСТЕР КЛАСС ОТ "DEKO`ART"',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 3,
        imgRel: video1,
        tit: 'DEKO`ART - MUTAXASSIS FIKRIGA QULOQ SOLING!!! / МНЕНИЕ СПЕЦИАЛИСТОВ',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },


    ])

    useEffect(() => {
        document.title = "Videolar"
    }, []) 
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.BreadcrumbItem}>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/news"> Videolar</NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.CardGroup}>
                    {
                        CardInfo.map(data => {
                            return (

                                <div key={data.id} className={styles.Cards}>
                                    <div className={styles.ForImg}>
                                        <img src={data.imgRel} alt="" />

                                    </div>
                                    <div className={styles.ForText}>

                                        <div className={styles.ForTextTitle}>
                                            <p>{data.tit}</p>
                                        </div>
                                        <div className={styles.ForTextBtn}>
                                            <button type="">Ba'tafsil</button>
                                        </div>

                                    </div>


                                </div>
                            )
                        })


                    }

                </div>

            </div>
        </div>
    )
}
