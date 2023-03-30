import React, { useContext, useEffect, useState } from 'react'
import styles from './serviceType.module.css'
// import AOS from "aos";
// import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
const { REACT_APP_BASE_URL: url } = process.env;

export default function ServiceType() {
    const [repairType, setrepairType] = useState([])
    const { t } = useTranslation(["home"]);


    const [itemList] = useContext(DetailsForDekoart)

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


                                    <div key={data?.name} className={styles.SecondItemOne}>
                                        <div className={styles.SecondItemOneImg}>
                                            <img src={data?.photo_url} alt="img" />
                                        </div>
                                        <div className={styles.SecondItemOneText} >
                                            <h1>{data?.name}</h1>
                                            <p id="terms-content" dangerouslySetInnerHTML={{ __html: data.description }} />


                                        </div>

                                    </div>
                                )
                            })} 
                        {
                            repairType.filter(data => data?.id == 2).map(data => {
                                return (
                                    < div key={data?.name} className={styles.SecondItemTwo}>
                                        <div className={styles.SecondItemTwoText}>
                                            <h1>{data?.name}</h1>
                                            <p id="terms-content" dangerouslySetInnerHTML={{ __html: data.description }} />

                                        </div>
                                        <div className={styles.SecondItemTwoImg}>
                                            <img src={data?.photo_url} alt="img" />

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
