import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './decocento.module.css'
import imgOne from '../../assets/DecoCento.jpg'


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
    document.title = "DEKOCENTO <<DEKOART.UZ>>"
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
              <NavLink to="/home">{t("breadCrum3")}</NavLink>
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
                  <b>DEKO`CENTO (PERLAMUTR)</b> - Tashqi va ichki yuzalar uchun dekortiv qoplama

                </div>
                <div>
                  <b> DEKO`CENTO (PERLAMUTR)</b> - Hushbichim va nozik qoplama, devorlaga baxmal effektli estetik ko`rinish hosil qiladi. Bu ajoyib qoplama har qanday interyerni jozibador va samimiy atmosferaga ega bo`lishini  ta'minlaydi.

                </div>
                Mahsulot,  binoning tashqi va ichki tomonlariga jozibadorlik baxsh etadi. Vaqt o'tishi bilan o`z jozibasini yo`qotmaydi.

                <div>
                  <b>Ishlatilish joylari:</b>

                </div>
                Qoplama, beton, sement suvoq, taxta, toshning tabiiy to'qimalari bilan mukammal tarzda birlashib, ularni bir nafis interyerda namoyon bo`lishini ta`minlaydi.

                <div>
                  <b>Yuzalarning tayyorlanishi:</b>

                </div>
                Yog’li dog’lar, kir va begona jismlardan uzoqlashtiriladi.
                Yoriqlar, teshiklar        to`ldiriladi, shishib chiqqan, do’ppaygan va boshqa noteks  yuza qismlari tekislanadi va akril asosli spatlevka suriladi.
                Akril asosli shatlevka surilgan  yuzaga
                “DEKOPRIMER” astar bo`yog`i qoplama rangiga mos ranglantirilib surib chiqiladi.  Astar bo`yoq 5-6 soat davomida quriganidan keyin yuza,  DEKO`CENTO (PERLAMUTR) qoplamasini surish uchun  tayyor holga keladi.
                <div>
                  <b>Ishlatilishi:</b>
                </div>

                Tayyorlangan yuzaga DEKO`CENTO (PERLAMUTR) qoplqamasi maxsus andava yordamida yupqa qilib suriladi.
                Birinchi tabaqa valik yoki andava yordamida tortiladi quriganidan keyin ikkinchi tabaqa andava yordamida to`lqinsimon shalda surib chiqiladi va vaqt o`tkazmasdan mahsus andava yordamida aylanma harakatlar bilan yuzaga dekorativ ko`rinish beriladi.
                <div>
                  <b>Texnik xarakteristikalari:</b>
                </div>

                <div>
                  <b>Sarfiyat:  </b> 1 kg. - 2,0-5.0 м²
                </div>

                <div>
                  <b>Songi pardoslashdan keyingi qurish muddati:</b> Harorat va namlikka ko`ra o`rtacha 12 soat.

                </div>
                <div>
                  <b> Ishlov berish shartlari:</b> +5℃.dan past bo`lmagan haroratda  va namlik 80%dan yuqori bo`lmagan sharoitda qo`llash tvsiya qilinadi.

                </div>
                <div>
                  <b>Qadoqlanishi: </b> 3 va 10 kg plastik idishlarda.

                </div>
                <div>
                  <b>Saqlanish muddati:</b> Xona xaroratida, yopiq idishda – 1 yil.

                </div>              </div>



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
