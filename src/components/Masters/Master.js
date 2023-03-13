import React, { useState, useEffect, useContext } from 'react'
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
import { useQuery } from 'react-query'
import { url } from '../Host/Host'
import { useTranslation } from 'react-i18next'
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu'

export default function Master() {
    useEffect(() => {
        document.title = "Ustalar"
    }, [])
    const { t } = useTranslation(["masters"]);

    const [masters, setMasters] = useState([])
   

    const [itemList, setItemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/masters/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setMasters(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }
    useEffect(() => {
        document.title = "Ustalar"
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])

    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.BreadcrumbItem}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/news"> {t("breadCrum1")}</NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.CardGroup}>
                    {
                        masters.map(data => {
                            return (

                                <div key={data.id} className={styles.Cards}>
                                    <div className={styles.ForImg}>
                                        <img src={data?.photo || abdulla} alt="" />
                                    </div>
                                    <div className={styles.ForText}>

                                        <div className={styles.ForTextTitle}>
                                            <p><span>Ism:</span>{data.name}</p>
                                            {/* <p><span>исм:</span>{data.ism}</p> */}
                                            <p><span>Tel:</span>+998951982666</p>
                                        </div>

                                        <div className={styles.ForTextBtn}>
                                            <button type="">{t("SliderBtn")}</button>
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
