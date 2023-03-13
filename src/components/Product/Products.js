import React, { useContext, useEffect, useState } from 'react'
import styles from './Product.module.css'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
export default function Products() {
    const { t } = useTranslation(["product"]);

    const [product, setProduct] = useState([])
    // useQuery(["product type"], () => {
    //     return fetch(`${url}/productlist/`).then(res => res.json())
    // }, {
    //     onSuccess: res => {
    //         setProduct(res)
    //     },
    //     onError: err => {
    //         console.log(err, "err");
    //     }
    // }
    // )


    const [itemList, setItemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/productlist/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setProduct(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }
    useEffect(() => {
        document.title = "Mahsulotlar"
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])





    const navigate = useNavigate();
    const HandleId = (id) => {
        navigate(`/product_det/:${id}`);
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
                            <NavLink to="/product"> {t("breadCrum1")}</NavLink>
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </div>
                <div className={styles.CardGroup}>
                    {
                        product.map(item => {
                            return (
                                <div key={item.name} className={styles.CardItem} onClick={() => HandleId(item.id)}>
                                    <div className={styles.ForImgCard}>
                                        <img src={item?.photo_url} alt="" />
                                    </div>
                                    <div className={styles.ForTextCard}>
                                        <div className={styles.ProductTitle}>
                                            <p>{item?.name}</p>
                                        </div>
                                        <div className={styles.ProductText}>
                                            <p>{item?.title || "title"}</p>
                                        </div>
                                        <div className={styles.ProductBtn}>
                                            <button>{t("SliderBtn")}</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
