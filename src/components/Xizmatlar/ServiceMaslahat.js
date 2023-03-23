import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './maslahat.module.css'
import imgOne from '../../img/maslahat/imgOne.jpg'
import imgTwo from '../../img/maslahat/1548312143_1548312080553.png'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';
import { MdOutlineNavigateNext } from "react-icons/md";

export default function ServiceMaslahat() {
    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/product_det/:${id}`);
    };
    const { t } = useTranslation(["serviceAdv"]);

    useEffect(() => {
        document.title = "MASLAHAT BERAMIZ>> DEKOART.UZ"
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }, [])
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

    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.BreadcrumbItem}>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/usluga"> {t("breadCrum1")}</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to="/maslahat">  {t("breadCrum2")}</NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.Content}>
                    <div className={styles.ContentLeft}>
                        <div className={styles.LeftTitle}>
                            <p>{t("leftTitle")}</p>
                        </div>
                        <div className={styles.MainItem}>
                            <div className={styles.ImgOne}>
                                <img src={imgOne} alt="" />
                                <p>{t("imgTitle")}</p>
                            </div>
                            <div className={styles.textLeft}>
                                <p>{t("textOne")}</p>
                                <p>{t("textTwo")} </p>

                            </div>
                            <div className={styles.ImgTwo}>
                                <img src={imgTwo} alt="" />
                            </div>
                            <div className={styles.textLeftTwo}>
                                <p>{t("idea1")}
                                    <b style={{ color: "green", cursor: "pointer" }}>
                                        {t("idea2")}</b> {t("idea3")}</p>
                                <p>{t("idea4")}
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
                            <p>{t("produtTitle")}</p>

                        </div>
                        <div className={styles.ProductList}>
                            {
                                productlist.map(data => {
                                    return (
                                        <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                                            <p><MdOutlineNavigateNext size={30} /></p>
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
