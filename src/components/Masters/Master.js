import React, { useState, useEffect, useContext } from 'react'
import styles from './master.module.css'
import abdulla from '../../img/master/abdulla.jpg'

import { Breadcrumb,  } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { url } from '../Host/Host'
import { useTranslation } from 'react-i18next'
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu'
import { Helmet } from 'react-helmet'

export default function Master() {

    const { t } = useTranslation(["masters"]);

    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/masters/:${id}`);
    };

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
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])

    return (
        <div className={styles.Container}>
            <Helmet>
                <title>{`Ustalar`}</title>
                <meta name="description" content="DEKOART” – Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir." />
                <meta name="description" content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:" />
                <meta name="keywords" content="sadaf decocento dekoart krasska lak buyoq " />
            </Helmet>
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

                                <div key={data.id} className={styles.Cards} onClick={() => HandleId(data?.id)}>
                                    <div className={styles.ForImg}>
                                        <img src={data?.photo || abdulla} alt="" />
                                    </div>
                                    <div className={styles.ForText}>

                                        <div className={styles.ForTextTitle}>
                                            <p><span>Ism:</span>{data.name}</p>
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
