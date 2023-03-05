import React from 'react'
import './style.css'
import logo from "../../components/assets/images/deko.png"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="containerr">
                <div className="sec aboutus">
                    <img src={logo} alt="" />
                    <p>«DEKO’ART» - Bu, markaziy Osiyoda zamonaviy, yuqori sifatli lok-bo'yoq mahsulotlari, dekorativ qoplamalar va moldinglar majmuasi.</p>
                    <ul className='sci'>
                        <li><a href="#"><i className='fa-brands fa-facebook' aria-hidden='true'></i></a></li>
                        <li><a href="#"><i className='fa-brands fa-telegram' aria-hidden='true'></i></a></li>
                        <li><a href="#"><i className='fa-brands fa-instagram' aria-hidden='true'></i></a></li>
                        <li><a href="#"><i className='fa-brands fa-youtube' aria-hidden='true'></i></a></li>
                    </ul>
                </div>
                <div className="sec media">
                    <h2>Ijtimoiy Tarmoqlar</h2>
                    <ul>
                        <li><i className='fa-brands fa-youtube'></i><a href="#">Youtube</a></li>
                        <li><i className='fa-brands fa-instagram'></i><a href="#">Instagram</a></li>
                        <li><i className='fa-brands fa-telegram'></i><a href="#">Telegram</a></li>
                        <li><i className='fa-brands fa-facebook'></i><a href="#">Facebook</a></li>
                        <li><i className='fa-brands fa-twitter'></i><a href="#">Twitter</a></li>
                        <li><i className='fa fa-envelope'></i><a href="#">Email</a></li>
                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2>Foydali Link</h2>
                    <ul>
                        <li><a href="#">Asosiy</a></li>
                        <li><a href="#">Mahsulotlar</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Ustalar</a></li>
                        <li><a href="#">Bozor</a></li>
                        <li><a href="#">Aloqa</a></li>
                    </ul>
                </div>
                
                <div className="sec contactt">
                    <h2>Bizning Aloqa</h2>
                    <ul className="info">
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Toshkent shaxri Bektimer tumani</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <p className='tel'><a href="">+998998770815</a><br/><a href="">+998998770815</a> </p>
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