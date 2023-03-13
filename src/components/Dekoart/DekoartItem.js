import React, { useContext, useEffect, useState } from 'react'
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
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';

export default function DekoarItem() {
  const { t } = useTranslation(["dekoart"]);

  useEffect(() => {
    document.title = "Kampaniya haqida ma'lumot <<DEKOART.UZ>>"
  }, [])
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  const [productlist, setProductlist] = useState([])

  // useQuery(["productlist type"], () => {
  //   return fetch(`${url}/productlist/`).then(res => res.json())
  // }, {
  //   onSuccess: res => {
  //     setProductlist(res)

  //   },
  //   onError: err => {
  //     console.log(err, "err");
  //   }
  // }
  // )
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
              <NavLink to="/company_about"> {t("breadCrum1")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/dekoart">{t("breadCrum2")}</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>{t("LeftTitle")}</p>
            </div>
            <div className={styles.MainItem}>
              <div className={styles.ImgOne}>
                <img src={imgOne} alt="" />
              </div>

              <div className={styles.textLeft}>
                <p><span style={{ color: "red" }}>{t("poneSpan")} </span>{t("pone")}</p>
                <p><span style={{ color: "red" }}>{t("ptwoSpan")} </span> {t("ptwo")}</p>
                <p><span style={{ color: "#727272", fontStyle: "normal", fontWeight: "bold" }}>{t("pthreeSpan")}</span> {t("pthree")}</p>
                <p><span style={{ color: "#727272", fontStyle: "normal", fontWeight: "bold" }}>{t("pfourSpan")}</span>  {t("pfour")} </p>
                <p><span style={{ color: "#727272", fontStyle: "normal", fontWeight: "bold" }}>{t("pfiveSpan")}</span> {t("pfive")}</p>
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
