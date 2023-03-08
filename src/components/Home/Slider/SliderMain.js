import React, { useState } from 'react'
import styles from './sliderMain.module.css'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { useQuery } from 'react-query'

// import required modules
import { Navigation } from "swiper";
import { url } from '../../Host/Host';
export default function SliderMain() {


	const { t } = useTranslation(["Home"]);

    const [SliderInfo, setSliderInfo] = useState([
        {
            id: 1,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/flash-11.jpg",
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/flash-22.jpg",
        },
        {
            id: 3,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/flash-33.jpg",
        },
        {
            id: 4,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/flash-44.jpg",
        },
    ])
    const [dataSlide, setdataSlide] = useState([])

    useQuery(["get slider"], () => {
        return fetch(`${url}/slide/`).then(res => res.json())
    },
        {

            onSuccess: res => {
                setdataSlide(res)
                // console.log(res, "resSLide");
            },
            onError: err => {
                console.log(err, "errSlide");
            }
        }

    )


    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.NextArrow} onClick={onClick}>
                <button className="">
                    <GrLinkNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.PrevArrow} onClick={onClick}>
                <button className="">
                    <GrLinkPrevious />
                </button>
            </div>
        );
    };

    let settings1 = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


    };

    return (
        <div className={styles}>

            <Slider {...settings1}>
                {dataSlide.map((value, index) => {
                    return (
                        <div className={styles.Box}>
                            <img src={value.photo_url} alt="cover" />
                            <div className={styles.CarosuelItems}>
                                <div className={styles.CarosuelCard}>
                                    <div className={styles.Cartext1}>
                                        <p>{t("Home:slideBigText")}</p>
                                    </div>
                                    <div className={styles.Cartext2}>
                                        <p>{t("Home:sliderSmText")}</p>

                                    </div>
                                    <div className={styles.Cartext3}>
                                        <button type="">{t("Home:SliderBtn")}</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
