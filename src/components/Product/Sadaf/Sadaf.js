import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './sadaf.module.css'
import imgOne from '../../assets/Sadaf.jpg'


import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../../Host/Host';
import { useTranslation } from 'react-i18next';
import { DetailsForDekoart } from '../../../ContextMenu/ContextMenu';

export default function DekoarItem() {
  const { t } = useTranslation(["decocento"]);

  useEffect(() => {
    document.title = "SADAF <<DEKOART.UZ>>"
  }, [])
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  const [productlist, setProductlist] = useState([])


  const [itemList, setItemList] = useContext(DetailsForDekoart)

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach(i => {
      if (!i[1]) delete params[i[0]]
    })

    fetch(`${url}/productlist/?` + new URLSearchParams(params))
      .then(res => res.json())
      .then(res => {
        setProductlist(res)
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
        <div className={styles.BreadcrumbItem}>


          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/product"> {t("breadCrum1")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/product">{t("breadCrum2")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/home">{t("breadCrum4")}</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>DecoCento</p>
            </div>
            <div className={styles.MainItem}>
              <div className={styles.ImgOne}>
                <img src={imgOne} alt="" />
              </div>
              <div className={styles.ListText}>
                <div>
                  <b>DEKO`ART SADAF</b> - Tashqi va ichki yuzalar uchun dekortiv qoplama

                </div>
                <div>
                  <b>DEKO`ART SADAF</b> - Natural granit va marmar teksturasini namoyon qiluvchi, rangorang dekorativ pardozlash mahsuloti.

                </div>
                Uzoq muddatga chidaydigan, turli maqsadlarga mo`ljallangan tashqi va ichki yuzalar uchun dekoratif qoplama

                <div>
                  <b>Ishlatilish joylari:</b>

                </div>
                Turli yuzalarda ishlatishga mo`ljallangan bo`lib, ayniqsa binolarning tashqi va ichki devor yuzalarining pardozi, beton, sement suvoq qilingan yuzalarga,Rim kolonnalari kabi turli me`morchilik mahsulotlarida, shuningdek,  gipsokarton ustiga yaxshi suriladi.

                <div>
                  <b>Yuzalarning tayyorlanishi:</b>

                </div>
                Yog’li dog’lar, kir va begona jismlardan uzoqlashtiriladi.
                Yoriqlar, teshiklar  to`ldiriladi, shishib chiqqan, do’ppaygan va boshqa noteks  yuza qismlari tekislanadi.
                Notekis yuzalar DEKO`ART LEONARDO qoplamasi yoki akril asosli shpatlevka bilan tekislanadi. Zarurat bo`lsa ushbu qatlam qumqog`oz bilan silliqlanadi va DEKO`PRIMER astar bo`yog`i surib chiqiladi.
                <div>
                  <b>Ishlatilishi:</b>

                </div>
                Yuza tayyorlangan keyin maxsus andava yordamida DEKO`ART SADAF suriladi. Ushbu qatlam havo sharoitiga qarab 4-5 soat davomida quritiladi. Birinchi qatlam qurishi bilan yorqin faktura hosil qilish uchun yuza fason beruvchi kichik andava yordamida bostirilib tekislanadi.  Keyin kerakli faktura hosil qilish uchun yana fason beruvchi kichik andava yordamida ikkinchi qatlam DEKO`ART SADAF yupqa qilib suriladi va qatlamning qurishini kutib turmasdan chapdan-o`ngga, yuqoridan – pastga va aylanma harakatlar bilan yuzaga jilo beriladi. Zarurat bo`lsa uchinchi tabaqa ham xuddi shu yo`sinda suriladi. To`liq qrish vaqti 24 soat. Yuzaning yanada porloq ko`rinishga ega bo`lishi uchun DEKOLAK yoki DEKO`ART mahsus vosk qoplamasidan foydalanish ham mumkin.

                <div>
                  <b>Texnik xarakteristikalari:</b>

                </div>
                <div>
                  <b>Sarfiyat:</b> 1 Kg - O`rtacha 2.0-3.0 м2 .

                </div>
                Songi pardoslashdan keyingi qurish muddati: Harorat va namlikka ko`ra o`rtacha 12 soat.

                <div>
                  <b>  Ishlov berish shartlari:</b> +5℃.dan past bo`lmagan harrat va namlik 80%dan yuqori bo`lmagan sharoitda qo`llash mumkin.

                </div>
                <div>
                  <b>Qadoqlanishi: </b> 4-12 kg plastik idishlarda.

                </div>
                <div>
                  <b>Saqlanish muddati:</b> Xona xaroratida, yopiq idishda – 1 yil.

                </div>


                <div className={styles.textLeftTwo}>
                  <p>{t("idea1")}
                    <b style={{ color: "green", cursor: "pointer" }}>{t("idea2")}</b>
                    {t("idea3")}</p>
                  <p>{t("idea4")}
                    <b>
                      +(998) 95 198-26-66;
                      +(998) 99 855-26-66;
                      +(998) 99 486-26-66;
                    </b>

                  </p>
                </div>


              </div>

            </div>
          </div>
          <div className={styles.ContentRight}>
            <div className={styles.RightTitle}>
              <p>{t("psexSpan")}</p>

            </div>
            <div className={styles.ProductList}>
              {
                productlist.map(data => {
                  return (
                    <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                      <p> <i className="fa fa-chevron-right"></i></p>
                      <p>{data?.name || "name"}</p>
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
