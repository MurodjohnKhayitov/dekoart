import React, { useContext, useState } from 'react'
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
    import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import { useQuery } from 'react-query';
import { url } from '../../Host/Host';



export default function ProductCarosuel() {
    const [getProduct, setGetProduct] = useState([])

    useQuery(["Product_get"], () => {
        return fetch(`${url}/products/`).then(res => res.json())
    }, {

        onSuccess: res => {
            setGetProduct(res)
            console.log(res, "res");
        },
        onError: err => {
            console.log(err, "err");
        }
    }

    )




    const [itemList, setItemList] = useContext(DetailsForDekoart);



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
