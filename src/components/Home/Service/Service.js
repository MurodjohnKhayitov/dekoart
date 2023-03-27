import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './service.module.css'
import ImgOne from '../../assets/serviceHome/service1.jpg'
import ImgTwo from '../../assets/serviceHome/service2.jpg'
import ImgThree from '../../assets/serviceHome/service3.jpg'
import ImgFour from '../../assets/serviceHome/service4.jpg'
export default function Service() {
    const { t } = useTranslation(["home"]);
    return ( 
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Text}>

                    <p>{t("serviceTitle")}</p>
                    <p>{t("serviceText")}</p>
                </div>
                <div className={styles.CardGroup}>
                    <div className={styles.Cards}>
                        <div className={styles.CardImg}>
                            <img src={ImgOne} alt="img" />
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
                            <img src={ImgTwo} alt="img" />
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
                            <img src={ImgThree} alt="img" />
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
                            <img src={ImgFour} alt="img" />
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
