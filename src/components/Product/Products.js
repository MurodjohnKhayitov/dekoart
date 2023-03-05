import React, { useContext } from 'react'
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './Product.module.css'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
export default function Products() {
    const [itemList, setItemList] = useContext(DetailsForDekoart);

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
                        itemList.map(item => {
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
                </div>
            </div>
        </div>
    )
}
