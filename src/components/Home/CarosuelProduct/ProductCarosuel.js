import React, { useContext } from 'react'
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";




export default function ProductCarosuel() {


    const [itemList, setItemList] = useContext(DetailsForDekoart);



    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
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
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
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

                    <p>Ustunlik Tomonlarimiz</p>


                </div>
                <div className={styles.Carousel}>
                    <div className={styles.CarosuelText}>
                        Tashqi va Ichki Makonlarga
                    </div>
                    <div className={styles.CardGroup}>
                        <Slider {...settings} className={styles.SliderGroup} >
                            {itemList.map((item, index) => {
                                return (
                                    <div key={item.name} className={styles.CardItem}>
                                        <div className={styles.ForImgCard}>
                                            <img src={item.cover} alt="" />
                                        </div>
                                        <div className={styles.ForTextCard}>
                                            <div className={styles.ProductTitle}>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className={styles.ProductText}>
                                                <p>Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.</p>
                                            </div>
                                            <div className={styles.ProductBtn}>
                                                <button>Batafsil</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>

                    </div>


                </div>
            </div>
        </div>
    )
}
