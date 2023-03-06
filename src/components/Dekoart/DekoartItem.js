import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './dekoart.module.css'
import imgOne from '../../img/Dekoart/1548160469_zavod.jpg'
import sertifikat1 from '../../img/Dekoart/1550912492_guvohnoma-glavnoe.jpg'
import sertifikat2 from '../../img/Dekoart/1550912494_guvohnoma2.jpg'
import sertifikat3 from '../../img/Dekoart/1550912577_sertifikat-sootvet3.jpg'
import sertifikat4 from '../../img/Dekoart/1550912553_sertifikat-system4.jpg'
import sertifikat5 from '../../img/Dekoart/1550912480_guvohnoma5.jpg'
import sertifikat6 from '../../img/Dekoart/1550912590_sertifikat-shuhrat6.jpg'
import sertifikat7 from '../../img/Dekoart/1550912462_guvohnoma-glavnoe7.jpg'
import sertifikat8 from '../../img/Dekoart/1550912494_sertifikat-sherzod8.jpg'
 
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

export default function DekoarItem() {
  useEffect(() => {
    document.title = "Kampaniya haqida ma'lumot <<DEKOART.UZ>>"
  }, [])
  const [itemList, setItemList] = useContext(DetailsForDekoart);
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.BreadcrumbItem}>

          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/company_about"> Kampaniya haqida</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/dekoart"> Kompaniya haqida ma`lumot</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>KOMPANIYA HAQIDA MA`LUMOT</p>
            </div>
            <div className={styles.MainItem}>
              <div className={styles.ImgOne}>
                <img src={imgOne} alt="" />
              </div>

              <div className={styles.textLeft}>
                <p><span style={{ color: "red" }}>“DEKO`ART” </span> – O`zbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok bo`yoq, devor qoplama mahsulolarti majmuasidir. Mazkur mahsulotlar 2013 yilda tashkil qilingan</p>
                <p><span style={{ color: "red" }}>“MARJON MOLDINGS” MCHJ </span>  tomonidan ishlab chiqarilmoqda.</p>
                <p><span style={{ color: "#727272",  fontStyle: "normal", fontWeight: "bold" }}>INSON MANBAALARI:</span> INSON MANBAALARI: Kompaniyamiz, yosh bo`lishiga qaramasdan dinamik, tajribali, turli xalqaro kompaniyalarda malaka oshirgan mutaxassislardan iborat katta jamoadir. Mahsulot va xizmat sifatiga bo`lgan javobgarlik hissi har bir xodimimizda mujassam.</p>
                <p><span style={{ color: "#727272",  fontStyle: "normal", fontWeight: "bold" }}>SIFAT:</span>  Faoliyatimizning har birida sifat nazoratiga alohida e`tibor berilgani holda, xalqaro standartlarga javob beruvchi ISO9001 sertifikatiga egamiz.</p>
                <p><span style={{ color: "#727272",  fontStyle: "normal", fontWeight: "bold" }}>VAZIFAMIZ:</span>   Jamoamizning birinchi darajali vazifasi haridor va iste`molchilarni ma`mnun etishdan iborat. Bundan tashqari kompanyamizda haridorlarga konsultatif xizmat va amaliy yordam ko`rsatish tizimi hamda mohir va yosh ustalar uchun mahorat darslari tashkil qilingan. Ushu tizim va mahorat darslari, biz faoliyat olib borayotgan jo`g`rofiyadagi barcha mijozlar uchun ochiq bo`lib, mahsulotlarimizga qiziqish bildirgan har bir iste`molchi ushbu xizmat turlarimizdan foydalanishi mumkin. Bu ishlarni amalga oshirish uchun malakali usta va quruvchilar bilan hamkorlik qilib kelmoqdamiz. </p>
                <p><span style={{ color: "#727272",  fontStyle: "normal", fontWeight: "bold" }}>MAHSULOTLARIMIZ:</span>    Kompanyamizda tashqi va ichki yuzalar uchun turli qoplama mahsulotlari, bo'yoq, lok, astar va boshqa tayyor mahsulotlar ishlab chiqariladi!</p>
              </div>
              <div className={styles.ImgGroup}>
                <img src={sertifikat1} alt="" />
                <img src={sertifikat2} alt="" />
                <img src={sertifikat3} alt="" />
                <img src={sertifikat4} alt="" />
                <img src={sertifikat5} alt="" />
                <img src={sertifikat6} alt="" />
                <img src={sertifikat7} alt="" />
                <img src={sertifikat8} alt="" />

              </div>

              <div className={styles.textLeftTwo}>
                <p>Fikr-mulohaza yoki xabarni <b style={{ color: "green", cursor: "pointer" }}>qayta aloqa yordamida</b> yuborishingiz mumkin,</p>
                <p>yoki ushbu raqamlar orqali bog'laning:
                  <b>
                    +(998) 95 198-26-66;
                    +(998) 99 855-26-66;
                    +(998) 99 486-26-66;
                  </b>

                </p>
              </div>


            </div>

          </div>
          <div className={styles.ContentRight}>
            <div className={styles.RightTitle}>
              <p>Mahsulotlarimiz</p>

            </div>
            <div className={styles.ProductList}>
              {
                itemList.map(data => {
                  return (
                    <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                      <p> <i className="fa fa-chevron-right"></i></p>
                      <p>{data.name}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
