import React, { useState } from 'react'
import styles from './serviceType.module.css'
import AOS from "aos";
import { useQuery } from 'react-query';
import { url } from '../../Host/Host';
AOS.init({
    duration: 1000
});

export default function ServiceType() {
    const url1 = 'https://dekoartserver.pythonanywhere.com/api/v1/repair_type/'
    const [repairType, setrepairType] = useState([])
    useQuery(["repair type"], () => {
        return fetch(`${url1}`).then(res => res.json())
    }, {
        onSuccess: res => {
            setrepairType(res)

        },
        onError: err => {
            console.log(err, "err");
        }
    }

    )
    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.FirstContent} >
                    <div className={styles.TitlesImg}>
                        TAMIRLASH TURLARI
                    </div>
                </div>
                <div className={styles.SecondContent}>

                    <div className={styles.SecondContentItem}>
                        {
                            repairType.filter(data => data.id == 1).map(data => {
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
                            repairType.filter(data => data.id == 2).map(data => {
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
