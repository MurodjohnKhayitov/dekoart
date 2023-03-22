import React, { useState } from 'react'
import './style.css'
import logo from "../../components/assets/images/deko.png"
import { useQuery } from 'react-query'
import { url } from '../../components/Host/Host'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebook, FaPhoneAlt, FaTelegram, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
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
                            <li> <NavLink to='/'><FaFacebook size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='/'><FaTelegram size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='/'><FaInstagram size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='/'><FaYoutube size={25} style={{ color: "white" }} /></NavLink> </li>

                        </ul>
                    </div>
                    <div className="sec media">
                        <h2>{t("social")}</h2>
                        <ul>

                            <li ><FaYoutube size={25} style={{ color: "white" }} /><NavLink>You Tube</NavLink></li>
                            <li ><FaInstagram size={25} style={{ color: "white" }} /><NavLink>Instagram</NavLink></li>
                            <li ><FaTelegram size={25} style={{ color: "white" }} /><NavLink>Telegram</NavLink></li>
                            <li ><FaFacebook size={25} style={{ color: "white" }} /><NavLink>Facebook</NavLink></li>
                            <li ><FaTwitter size={25} style={{ color: "white" }} /><NavLink>Twitter</NavLink></li>
                            <li ><MdEmail size={25} style={{ color: "white" }} /><NavLink>Email</NavLink></li>



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
                                <MdLocationPin size={25} style={{color:"white"}}/>
                                <span>{t("address")}</span>
                            </li>
                            <li>
                                <FaPhoneAlt size={25} style={{color:"white"}}/>
                                <p className='tel'><a href="">+998998770815</a><br /><a href="">+998998770815</a> </p>
                            </li>
                            <li>
                                <MdEmail size={25} style={{color:"white"}}/>
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