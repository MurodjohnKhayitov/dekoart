import React, { useContext, useEffect, useState } from 'react'
import styles from './about.module.css'
import AOS from "aos";
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
AOS.init({
    duration: 1000
});
const { REACT_APP_BASE_URL: url } = process.env;

export default function WeAbout() {
    const { t } = useTranslation(["home"]);
 
    const [WeAbout, setWeAbout] = useState([])
    

    const [itemList] = useContext(DetailsForDekoart)

    const fetchGetAllData = (params) => {
        Object.entries(params).forEach(i => {
            if (!i[1]) delete params[i[0]]
        })

        fetch(`${url}/short_qa/?` + new URLSearchParams(params))
            .then(res => res.json())
            .then(res => {
                setWeAbout(res)
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
                <div className={styles.Text}>
                    <p>{t("negaBiz")}</p>
                </div>
                <div className={styles.CardsGroup}>
                    {WeAbout.map(data => {
                        return (
                            <div key={data?.id} className={styles.Cards} >
                                <div className={styles.ImgCirlce}>
                                    <img src={data?.photo_url} alt="img" />

                                </div>
                                <div className={styles.SimpleText}>
                                    <h1>{data?.title}</h1>
                                    <p id="terms-content" dangerouslySetInnerHTML={{ __html: data.description }} />

                                 
                                </div>

                            </div>

                        )

                    }) 
                    }


                </div>
            </div>
        </div >
    )
}
