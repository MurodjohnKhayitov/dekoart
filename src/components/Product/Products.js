import React, { useContext,useState } from 'react'
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
export default function Products() {
    const [itemList, setItemList] = useContext(DetailsForDekoart);

    const [product, setProduct] = useState([])
    useQuery(["product type"], () => {
        return fetch(`${url}/productlist/`).then(res => res.json())
    }, {
        onSuccess: res => {
            setProduct(res)
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
                            <NavLink to="/product"> Mahsulotlar</NavLink>
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </div>
                <div className={styles.CardGroup}>
                    {
                        product.map(item => {
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
                                            <button>Batafsil</button>
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
