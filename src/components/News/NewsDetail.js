import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './newsDetail.module.css'
import imgOne from '../../img/Dekoart/1548160469_zavod.jpg'
import sertifikat1 from '../../img/Dekoart/1550912492_guvohnoma-glavnoe.jpg'
import sertifikat2 from '../../img/Dekoart/1550912494_guvohnoma2.jpg'
import sertifikat3 from '../../img/Dekoart/1550912577_sertifikat-sootvet3.jpg'
import sertifikat4 from '../../img/Dekoart/1550912553_sertifikat-system4.jpg'
import sertifikat5 from '../../img/Dekoart/1550912480_guvohnoma5.jpg'
import sertifikat6 from '../../img/Dekoart/1550912590_sertifikat-shuhrat6.jpg'
import sertifikat7 from '../../img/Dekoart/1550912462_guvohnoma-glavnoe7.jpg'
import sertifikat8 from '../../img/Dekoart/1550912494_sertifikat-sherzod8.jpg'

import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';

export default function NewsDetail() {
    // useEffect(() => {
    //     document.title = "Kampaniya haqida ma'lumot <<DEKOART.UZ>>"
    // }, [])
    const { t } = useTranslation(["news"]);

    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/product_det/:${id}`);
    };
    const [productlist, setProductlist] = useState([])
    useQuery(["productlist type"], () => {
        return fetch(`${url}/productlist/`).then(res => res.json())
    }, {
        onSuccess: res => {
            setProductlist(res)

        },
        onError: err => {
            console.log(err, "err");
        }
    }
    )
    const { id } = useParams();
    const UrlId = id.replace(":", "");

    const [newsDetail, setnewsDetail] = useState([])
    useQuery(["newsDetail type"], () => {
        return fetch(`${url}/news/${UrlId}`).then(res => res.json())
    }, {
        onSuccess: res => {
            setnewsDetail(res)

        },
        onError: err => {
            console.log(err, "err");
        }
    }
    )
    // useEffect(() => {
    //     document.title = newsDetail.title
    // }
    // },[])
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
                        <Breadcrumb.Item>
                            <NavLink to={`/news/:${UrlId}`}> {newsDetail?.title} </NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div> 
                <div className={styles.Content}>
                    <div className={styles.ContentLeft}>
                        <div className={styles.LeftTitle}>
                            <p>{newsDetail?.title}</p>
                        </div>
                        <div className={styles.MainItem}>
                            <div className={styles.Descripton}>
                                <p id="terms-content" dangerouslySetInnerHTML={{ __html: newsDetail?.description }} />

                            </div>
                            {
                                newsDetail?.attachment?.map(data => {
                                    return (

                                        <div className={styles.ImgOne}>
                                            <img src={data?.photo_url } alt="NoData" />
                                            <p id="terms-content" dangerouslySetInnerHTML={{ __html: data?.title || "NoData"}} />

                                        </div>
                                    )
                                })
                            }




                        </div>

                    </div>
                    <div className={styles.ContentRight}>
                        <div className={styles.RightTitle}>
                            <p>{t("produtTitle")}</p>

                        </div>
                        <div className={styles.ProductList}>
                            {
                                productlist.map(data => {
                                    return (
                                        <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                                            <p> <i className="fa fa-chevron-right"></i></p>
                                            <p>{data?.name || "name"}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
