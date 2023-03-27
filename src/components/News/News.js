import React, { useState, useEffect } from 'react'
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
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { url } from '../Host/Host' 
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu'
import { MdOutlineNavigateNext } from "react-icons/md";

export default function News() {
    const { t } = useTranslation(["news"]);
    const [dekoNews, setDekoNews] = useState([])
    const [itemList, setItemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/news/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setDekoNews(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }
    useEffect(() => {
        document.title = "Yangiliklar"
        fetchGetAllData({
            language: itemList?.typeLang,
        })
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [itemList?.typeLang])
    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/news/:${id}`);
    };


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
                        dekoNews.map(data => {
                            return (

                                <div key={data.id} className={styles.Cards} onClick={() => HandleId(data.id)}>
                                    <div className={styles.ForImg}>
                                        <img src={data.photo} alt="" />
                                    </div>
                                    <div className={styles.ForText}>

                                        <div className={styles.ForTextTitle}>
                                            <p id="terms-content" dangerouslySetInnerHTML={{ __html: data.title }} />

                                            <span id="terms-content" dangerouslySetInnerHTML={{ __html: data.description }} />
                                        </div>
                                        <div className={styles.ForTextBtn}>
                                            <p><MdOutlineNavigateNext size={30}  /> {t("SliderBtn")}</p>
                                            {/* <button type="">{t("SliderBtn")}</button> */}
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
