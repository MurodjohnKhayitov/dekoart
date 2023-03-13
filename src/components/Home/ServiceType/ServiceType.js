import React, { useContext, useEffect, useState } from 'react'
import styles from './serviceType.module.css'
import AOS from "aos";
import { useQuery } from 'react-query';
import { url } from '../../Host/Host';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
AOS.init({
    duration: 1000
});

export default function ServiceType() {
    const url1 = 'https://dekoartserver.pythonanywhere.com/api/v1/repair_type/'
    const [repairType, setrepairType] = useState([])
    const { t } = useTranslation(["home"]);


    const [itemList, setItemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/repair_type/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setrepairType(res)
            })
            .catch(err => console.log(err, "ERROrLIST"))
    }
    useEffect(() => {
        fetchGetAllData({
            language: itemList?.typeLang,
        })
    }, [itemList?.typeLang])

    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.FirstContent} >
                    <div className={styles.TitlesImg}>
                        {t("tamirlash")}
                    </div>
                </div>
                <div className={styles.SecondContent}>

                    <div className={styles.SecondContentItem}>
                        {
                            repairType.filter(data => data?.id == 1).map(data => {
                                return (


                                    <div className={styles.SecondItemOne}>
                                        <div className={styles.SecondItemOneImg}>

                                        </div>
                                        <div className={styles.SecondItemOneText} >
                                            <h1>{data?.name}</h1>
                                            <p>{data?.description}</p>

                                        </div>

                                    </div>
                                )
                            })}
                        {
                            repairType.filter(data => data?.id == 2).map(data => {
                                return (
                                    < div className={styles.SecondItemTwo}>
                                        <div className={styles.SecondItemTwoText}>
                                            <h1>{data?.name}</h1>
                                            <p>{data?.description}</p></div>
                                        <div className={styles.SecondItemTwoImg}>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                </div>

            </div >
        </div >
    )
}
