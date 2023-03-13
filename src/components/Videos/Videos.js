import React, { useState, useEffect, useContext } from 'react'
import styles from './videos.module.css'
import video1 from '../../img/video1.jpg'
import video2 from '../../img/video2.jpeg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
export default function Videos() {
    const { t } = useTranslation(["video"]);


    const [videos, setVideos] = useState([])

    const [itemList, setItemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/videos/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setVideos(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }

    useEffect(() => {
        document.title = "Videolar"
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])





    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/video/:${id}`);
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
                        videos?.map(data => {
                            return (
                                <div key={data.id} className={styles.Cards} onClick={() => HandleId(data.id)}>
                                    <div className={styles.ForImg}>
                                        <img src={data.photo_url} alt="" />

                                    </div>
                                    <div className={styles.ForText}>

                                        <div className={styles.ForTextTitle}>
                                            <p>{data.title}</p>
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
