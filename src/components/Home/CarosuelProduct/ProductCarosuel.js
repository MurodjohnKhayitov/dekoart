import React, { useState, useEffect } from 'react'
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
import { useNavigate } from 'react-router-dom';
// import Slider from "react-slick";
// import { useQuery } from 'react-query';
import { url } from '../../Host/Host';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import noImg from '../../../img/pro3.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ProductCarosuel() {
    const [getProduct, setGetProduct] = useState([])
    const { t } = useTranslation(["home"]);

    // ---------------------GOItem
    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/product_det/:${id}`);
    };
    const [itemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/products/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setGetProduct(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }
    useEffect(() => {
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])



    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 480 },
            items: 2,
        },
        mobile1: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
        },
    };


    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Text}>
                    <p>{t("ustunlik")}</p>
                </div>
                <div className={styles.Carousel}>
                    <div className={styles.CarosuelText}>
                        {t("makonlar")}
                    </div>
                    <div className={styles.CardGroup}>
                        <Carousel
                            className={styles.CarouselMenu}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={5000}
                            responsive={responsive1}
                        >
                            {getProduct?.filter(data => data.id === 2)?.map(item => {
                                return item?.product?.map(data => {
                                    return (
                                        <div className={styles.CardItem}>
                                            <div className={styles.ForImgCard}>
                                                <img src={data?.photo_url || noImg} alt="" />
                                            </div>
                                            <div className={styles.ForTextCard}>
                                                <div onClick={() => HandleId(item?.id)} className={styles.ProductTitle}>
                                                    <div id="terms-content" dangerouslySetInnerHTML={{ __html: data?.name || "noData" }} />

                                                </div>
                                                <div className={styles.ProductText}>
                                                    <div id="terms-content" style={{ color: "#c4c4c4" }} dangerouslySetInnerHTML={{ __html: data?.title || "noTitle" }} />
                                                </div>
                                                <div className={styles.ProductBtn}>
                                                    <button onClick={() => HandleId(item?.id)}>{t("SliderBtn")}</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })

                            })}
                        </Carousel>

                    </div>


                </div>
            </div>
        </div>
    )
}
