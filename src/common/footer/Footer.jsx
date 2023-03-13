import React, { useState } from 'react'
import './style.css'
import logo from "../../components/assets/images/deko.png"
import { useQuery } from 'react-query'
import { url } from '../../components/Host/Host'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const [social_link, setsocial_link] = useState([])
    useQuery(["we about"], () => {
        return fetch(`${url}/social_link/`).then(res => res.json())
    }, {
        onSuccess: res => {
            setsocial_link(res)

        },
        onError: err => {
            console.log(err, "err");
        }
    }

    )
    const { t } = useTranslation(["footer"]);

    return (
        <>
            <footer>
                <div className="containerr">
                    <div className="sec aboutus">
                        <img src={logo} alt="" />
                        <p>{t("footerTitle")}</p>
                        <ul className='sci'>
                            <li><a href="#"><i className='fa-brands fa-facebook' aria-hidden='true'></i></a></li>
                            <li><a href="#"><i className='fa-brands fa-telegram' aria-hidden='true'></i></a></li>
                            <li><a href="#"><i className='fa-brands fa-instagram' aria-hidden='true'></i></a></li>
                            <li><a href="#"><i className='fa-brands fa-youtube' aria-hidden='true'></i></a></li>
                        </ul>
                    </div>
                    <div className="sec media">
                        <h2>{t("social")}</h2>
                        <ul>
                            {
                                social_link.map(data => {
                                    return (
                                        <li><i className={data?.icon}></i><a href={data?.link}>{data?.name}</a></li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>{t("links")}</h2>
                        <ul>
                            <li><a href="#">{t("asosiy")} </a></li>
                            <li><a href="#">{t("dekoart")}      </a></li>
                            <li><a href="#">{t("yangiliklar")}</a></li>
                            <li><a href="#">{t("mahsulotlar")}  </a></li>
                            <li><a href="#">{t("video")}</a></li>
                            <li><a href="#">{t("ustalar")}</a></li>
                        </ul>
                    </div>

                    <div className="sec contactt">
                        <h2>{t("contact")}</h2>
                        <ul className="info">
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>{t("address")}</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <p className='tel'><a href="">+998998770815</a><br /><a href="">+998998770815</a> </p>
                            </li>
                            <li>
                                <i className='fa fa-envelope'></i>
                                <p><a href="#">dekoartuz@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright © Marjon 2021. All Right Reserved By Marjon.</p>
            </div>
        </>
    )
}

export default Footer