import React, { useState,useEffect } from 'react'
import styles from './news.module.css'
import Pro1 from '../../img/new1.jpg'
import Pro2 from '../../img/new2.jpg'
import Pro3 from '../../img/new3.jpg'
import Pro4 from '../../img/new4.jpg'
import Pro5 from '../../img/new5.jpg'
import Pro6 from '../../img/new6.jpg'
import Pro7 from '../../img/new7.jpg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
export default function News() {
    useEffect(() => {
        document.title="Yangiliklar"
        }, [])
    const [CardInfo, setCardInfo] = useState([{
        id: 1,
        imgRel: Pro1,
        tit: 'KOMPANIYAMIZ “TASHABBUS – 2019” TOSHKENT SHAHAR BOSQICHIDA ISHTIROK ETTI.',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    { 
        id: 2,
        imgRel: Pro2,
        tit: '"ТАШАББУС-2019": МЫ ПОБЕДИЛИ / BIZ BIRINCHIMIZ.',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 3,
        imgRel: Pro3,
        tit: 'DEKO`ART - MUTAXASSIS FIKRIGA QULOQ SOLING!!! / МНЕНИЕ СПЕЦИАЛИСТОВ',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 4,
        imgRel: Pro4,
        tit: 'DEKO`ART - BIZ SUVDAN QO`RQMAYMIZ! / ОЙ, ЛАДЫ, ЛАДЫ, НЕ БОИМСЯ МЫ',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 5,
        imgRel: Pro5,
        tit: 'DEKO`ART TELEVIDENIYADA / СМОТРИТЕ DEKO`ART В ТВ',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    },
    {
        id: 6,
        imgRel: Pro6,
        tit: "HAMKORLARGA SOVG'ALAR 'DEKO`ART' HAMKORLARIGA SOVGALAR  descrip: Natural granit va marmar teksturasini namoyon qiluvchi"
    },
    {
        id: 7,
        imgRel: Pro7,
        tit: 'ПОДАРКИ ПАРТНЕРАМ "DEKO`ART"',
        descrip: 'Natural granit va marmar teksturasini namoyon qiluvchi'
    }

    ])





    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
            <div className={styles.BreadcrumbItem}>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px"}} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/news"> Yangiliklar</NavLink>
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
                                        <div className={styles.ForTextdate}>
                                            <p>01.03.2020</p>

                                        </div>
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
