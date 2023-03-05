import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './maslahat.module.css'
import imgOne from '../../img/maslahat/imgOne.jpg'
import imgTwo from '../../img/maslahat/1548312143_1548312080553.png'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
export default function ServiceMaslahat() {
    const [itemList, setItemList] = useContext(DetailsForDekoart);
    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/product_det/:${id}`);
    };
    useEffect(() => {
        document.title = "MASLAHAT BERAMIZ>> DEKOART.UZ"
    }, [])
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.BreadcrumbItem}>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/usluga"> Xizmatlar</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/maslahat"> MASLAHATLARI BERAMIZ</NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.Content}>
                    <div className={styles.ContentLeft}>
                        <div className={styles.LeftTitle}>
                            <p>MASLAHATLAR BERAMIZ</p>
                        </div>
                        <div className={styles.MainItem}>
                            <div className={styles.ImgOne}>
                                <img src={imgOne} alt="" />
                                <p>Maslahatlar beramiz</p>
                            </div>
                            <div className={styles.textLeft}>
                                <p>«Dekoart» mutaxassislari, zamonaviy pardozlash ishlariga aloqador o`z tajribalarini barcha bilan o`rtoqlashishga tayyor. Biz har bir mahsulotimizning afzalliklari va hususiyatari, shuningdek bu mahsulotlardan to`g`ri foydalanish yollari haqida batafsil ma`lumot beramiz.</p>
                                <p>Maslahat guruhi a`zolarimiz, nafaqat mahsulot tanlashda, balki boshlangan yoki davom ettirilayotgan har bir pardozlash holati uchun eng ma`qbul variantlarni aniqlashda kerakli yordam ko`rsataoladilar. Bizning ko`magimizda ichki va tashqi makonlardagi og`ir mehnat– zavq baxsh etuvchi jarayonga aylanadi.  </p>

                            </div>
                            <div className={styles.ImgTwo}>
                                <img src={imgTwo} alt="" />
                            </div>
                            <div className={styles.textLeftTwo}>
                                <p>Fikr-mulohaza yoki xabarni <b style={{ color: "green", cursor: "pointer" }}>qayta aloqa yordamida</b> yuborishingiz mumkin,</p>
                                <p>yoki ushbu raqamlar orqali bog'laning:
                                    <b>
                                        +(998) 95 198-26-66;
                                        +(998) 99 855-26-66;
                                        +(998) 99 486-26-66;
                                    </b>

                                </p>
                            </div>

                        </div>

                    </div>
                    <div className={styles.ContentRight}>
                        <div className={styles.RightTitle}>
                            <p>Mahsulotlarimiz</p>

                        </div>
                        <div className={styles.ProductList}>
                            {
                                itemList.map(data => {
                                    return (
                                        <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                                            <p> <i className="fa fa-chevron-right"></i></p>
                                            <p>{data.name}</p>
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
