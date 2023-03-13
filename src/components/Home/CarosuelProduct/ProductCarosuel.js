import React, { useState, useEffect } from 'react'
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { useQuery } from 'react-query';
import { url } from '../../Host/Host';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';



export default function ProductCarosuel() {
    const [getProduct, setGetProduct] = useState([])
    const { t } = useTranslation(["home"]);


    const [itemList, setItemList] = useContext(DetailsForDekoart)

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





    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.NextArrow} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.PrevArrow} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
                        <Slider {...settings} className={styles.SliderGroup} >
                            {getProduct.filter(data => data.id == 2).map((item, index) => {
                                return item.product.map(item => {

                                    return (
                                        <div key={item.name} className={styles.CardItem}>
                                            <div className={styles.ForImgCard}>
                                                <img src={item?.photo_url} alt="" />
                                            </div>
                                            <div className={styles.ForTextCard}>
                                                <div className={styles.ProductTitle}>
                                                    <p>{item?.name}</p>
                                                </div>
                                                <div className={styles.ProductText}>
                                                    <p>{item?.description}</p>
                                                </div>
                                                <div className={styles.ProductBtn}>
                                                    <button>{t("SliderBtn")}</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            })}
                        </Slider>

                    </div>


                </div>
            </div>
        </div>
    )
}
