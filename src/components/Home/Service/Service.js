import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './service.module.css'
export default function Service() {
    const { t } = useTranslation(["home"]);

    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Text}>

                    <p>{t("serviceTitle")}</p>
                    <p>{t("serviceText")}
                    </p>


                </div>
                <div className={styles.CardGroup}>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543230848_full_photo_2016-07-28_18-00-20.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                {t("cardTitle1")}
                            </div>
                            <div className={styles.Maintext}>
                                {t("cardText1")}
                            </div>
                            <div className={styles.MainBtn}>
                                <NavLink to="/masters">{t("SliderBtn")}</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231039_full_farxod15.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                {t("cardTitle2")}
                            </div>
                            <div className={styles.Maintext}>
                                {t("cardText2")}
                            </div>
                            <div className={styles.MainBtn}>
                                <NavLink to="/masters">{t("SliderBtn")}</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231094_full_farxod27.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                {t("cardTitle3")}
                            </div>
                            <div className={styles.Maintext}>
                                {t("cardText3")}
                            </div>
                            <div className={styles.MainBtn}>
                                <NavLink to="/masters">{t("SliderBtn")}</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src="http://dekoart.uz/uploads/posts/2018-11/medium/1543231070_full_farxod7.jpg" alt="img" />
                        </div>
                        <div className={styles.CardTitle}>
                            <div className={styles.MainTitles}>
                                {t("cardTitle4")}
                            </div>
                            <div className={styles.Maintext}>
                                {t("cardText4")}
                            </div>
                            <div className={styles.MainBtn}>
                                <NavLink to="/masters">{t("SliderBtn")}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
