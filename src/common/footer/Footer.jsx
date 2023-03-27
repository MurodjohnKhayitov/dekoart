import React from 'react'
import './style.css'
import logo from "../../components/assets/images/deko.png"

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebook, FaPhoneAlt, FaTelegram, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
   
    const { t } = useTranslation(["footer"]);

    return (
        <>
            <footer>
                <div className="containerr">
                    <div className="sec aboutus">
                        <img src={logo} alt="" />
                        <p>{t("footerTitle")}</p>
                        <ul className='sci'>
                            <li> <NavLink to='https://www.instagram.com/dekoartjomiy/'><FaFacebook size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='https://t.me/dekoartuz'><FaTelegram size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='https://www.instagram.com/dekoartjomiy/'><FaInstagram size={25} style={{ color: "white" }} /></NavLink> </li>
                            <li> <NavLink to='https://www.instagram.com/dekoartjomiy/'><FaYoutube size={25} style={{ color: "white" }} /></NavLink> </li>

                        </ul>
                    </div>
                    <div className="sec media">
                        <h2>{t("social")}</h2>
                        <ul>

                            <li ><NavLink to='https://www.instagram.com/dekoartjomiy/'><FaYoutube size={25} style={{ marginRight: "10px", color: "white" }} /> You Tube</NavLink></li>
                            <li ><NavLink to="https://www.instagram.com/dekoartjomiy/"><FaInstagram size={25} style={{ marginRight: "10px", color: "white" }} /> Instagram</NavLink></li>
                            <li ><NavLink to="https://t.me/dekoartuz" ><FaTelegram size={25} style={{ marginRight: "10px", color: "white" }} /> Telegram</NavLink></li>
                            <li ><NavLink to={'https://www.instagram.com/dekoartjomiy/'}><FaFacebook size={25} style={{ marginRight: "10px", color: "white" }} /> Facebook</NavLink></li>
                            <li ><NavLink to={'https://www.instagram.com/dekoartjomiy/'}><FaTwitter size={25} style={{ marginRight: "10px", color: "white" }} /> Twitter</NavLink></li>
                            <li ><NavLink to="https://dekoartuz@gmail.com"><MdEmail size={25} style={{ marginRight: "10px", color: "white" }} /> Email</NavLink></li>



                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>{t("links")}</h2>
                        <ul>
                            <li><NavLink to={'/home'}>{t("asosiy")} </NavLink></li>
                            <li><NavLink to={'/dekoart'}>{t("dekoart")}      </NavLink></li>
                            <li><NavLink to={'/news'}>{t("yangiliklar")}</NavLink></li>
                            <li><NavLink to={'/product'}>{t("mahsulotlar")}  </NavLink></li>
                            <li><NavLink to={'/video'}>{t("video")}</NavLink></li>
                            <li><NavLink to={'/masters'}>{t("ustalar")}</NavLink></li>
                        </ul>
                    </div>

                    <div className="sec contactt">
                        <h2>{t("contact")}</h2>
                        <ul className="info">
                            <li>
                                <MdLocationPin size={25} style={{ color: "white" }} />
                                <span>{t("address")}</span>
                            </li>
                            <li>
                                <FaPhoneAlt size={25} style={{ color: "white" }} />
                                <p className='tel'>+998998770815<br />+998998770815 </p>
                            </li>
                            <li>
                                <MdEmail size={25} style={{ color: "white" }} />
                                <p>dekoartuz@gmail.com</p>
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