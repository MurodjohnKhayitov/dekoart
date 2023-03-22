import React, { useContext, useEffect, useState } from 'react'
import styles from './about.module.css'
import AOS from "aos";
import { url } from '../../Host/Host';
// import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';
AOS.init({
    duration: 1000
});

export default function WeAbout() {
    const { t } = useTranslation(["home"]);

    const [WeAbout, setWeAbout] = useState([])
    

    const [itemList, setItemList] = useContext(DetailsForDekoart)

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
                            <div className={styles.Cards} >
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


                    {/* < div className={styles.Cards}  >
                        <div className={styles.ImgCirlce}>
                            <img
                                src="http://www.dekoart.uz/templates/dekoartuz/images/preim/3.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.SimpleText}>
                            <h1>SHARTNOMA ASOSIDA ISHLASH</h1>
                            <p>
                                Biz mahsuloatlarimiz va xizmatlarimiz uchun sizga ma`qbul
                                shartnoma tuzishga tayyormiz.
                            </p>
                        </div>

                    </div>
                    <div className={styles.Cards} >
                        <div className={styles.ImgCirlce}>
                            <img
                                src="http://www.dekoart.uz/templates/dekoartuz/images/preim/5.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.SimpleText}>
                            <h1>HAR QANDAY QIYINCHILIKDA</h1>
                            <p>
                                Biz hattoki eng qiyin va eng murakkab g'oyalarni amalga
                                oshirdan qo`rqmaymiz 500 dan ortiq ob'ektlar tugatildi.
                            </p>
                        </div>

                    </div>
                    <div className={styles.Cards}  >
                        <div className={styles.ImgCirlce}>
                            <img
                                src="http://www.dekoart.uz/templates/dekoartuz/images/preim/2.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.SimpleText}>
                            <h1>TEZ ISHLAYMIZ</h1>
                            <p>
                                Tez va samarali ishlaymiz! Qo'ng'iroq qiling va bugunoq biz
                                bilan uchrashuvni amalga oshiring.
                            </p>
                        </div>

                    </div>
                    <div className={styles.Cards} >
                        <div className={styles.ImgCirlce}>
                            <img
                                src="http://www.dekoart.uz/templates/dekoartuz/images/preim/4.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.SimpleText}>
                            <h1>OLDINDAN TO'LOVSIZ ISHLAYMIZ</h1>
                            <p>
                                Faqat bajarilgan ishlarning natijalariga qarab va mahsulot
                                yetkazilgandan keyin haq olamiz.
                            </p>
                        </div>

                    </div>
                    <div className={styles.Cards}  >
                        <div className={styles.ImgCirlce}>
                            <img
                                src="http://www.dekoart.uz/templates/dekoartuz/images/preim/6.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.SimpleText}>
                            <h1>SIZGA MOS NARXLAR</h1>
                            <p>
                                Biz har doim har bir mijoz bilan murosaga erishamiz va sizga
                                eng qulay to'lov tizimini va qulay narxlarni taklif qilamiz.
                            </p>
                        </div>

                    </div> */}


                </div>
            </div>
        </div >
    )
}
