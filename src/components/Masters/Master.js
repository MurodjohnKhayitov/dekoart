import React, { useState, useEffect } from 'react'
import styles from './master.module.css'
import abdulla from '../../img/master/abdulla.jpg'
import adham from '../../img/master/adham.jpg'
import ali from '../../img/master/ali.jpg'
import bekzod from '../../img/master/bekzod.jpg'
import farxod1 from '../../img/master/farxod1.jpg'
import Jamshid from '../../img/master//Jamshid.jpg'
import javahir from '../../img/master/javahir.jpg'
import sayyodjon from '../../img/master/sayyodjon.jpg'
import zuhriddin from '../../img/master/zuhriddin.jpg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

export default function Master() {
    useEffect(() => {
        document.title = "Ustalar"
    }, [])

    const [CardInfo, setCardInfo] = useState([
        {
            id: 1,
            imgRel: farxod1,
            name: "ahmedov farxod",
            ism: "Ахмедов Фарход",
            tel1: "+998946344444 (Deko`art Ofis)",
            tel2: "+998951982666 "

        },
        {
            id: 2,
            imgRel: bekzod,
            name: "Bekturdiev behzod",
            ism: "Бектураев Бехзод",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 3,
            imgRel: javahir,
            name: "dehqanov javohir",
            ism: "Дехконов Жавохир",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 4,
            imgRel: Jamshid,
            name: "Zufarov jamshid",
            ism: "Зуфаров Жамшид",
            tel1: "+998946344444 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 5,
            imgRel: sayyodjon,
            name: "kamolov sayyodjon",
            ism: " Камолов Саййоджон",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 6,
            imgRel: adham,
            name: "mannonov adham",
            ism: "Маннонов Адхам",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 7,
            imgRel: zuhriddin,
            name: "nuriddinov zuhriddin",
            ism: "Нуриддинов Зухриддин",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 8,
            imgRel: ali,
            name: "Raxmatov abduvali",
            ism: "Рахматов Абдували",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },
        {
            id: 9,
            imgRel: abdulla,
            name: "tog'ayev abdulla",
            ism: "Тогаев Абдулла",
            tel1: "+998951982666 (Deko`art Ofis)",
            tel2: ""

        },




    ])

    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.BreadcrumbItem}>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/news"> Ustalar</NavLink>
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
                                            <p><span>Ism:</span>{data.name}</p>
                                            <p><span>исм:</span>{data.ism}</p>
                                        </div>
                                        <div className={styles.ForTextPhone}>
                                            <p><span>Tel:</span>{data.tel1}</p>
                                            {data?.tel2?.length !== 0 ? <p><span>Tel:</span>{data.tel2}</p> : null}
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
