import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './masterDet.module.css'


import { Breadcrumb } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
// import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Master_Det() {
  const { t } = useTranslation(["dekoart"]);


  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  const [itemList, setItemList] = useContext(DetailsForDekoart)

  const [productlist, setProductlist] = useState([])
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
  const { id } = useParams();
  const UrlId = id.replace(":", "");
  const [masters, setMasters] = useState([])
  const fetchVideoGEtData = (params) => {
    Object.entries(params).forEach(i => {
      if (!i[1]) delete params[i[0]]
    })

    fetch(`${url}/masters/${UrlId}?` + new URLSearchParams(params))
      .then(res => res.json())
      .then(res => {
        setMasters(res)
      })
      .catch(err => console.log(err, "ERROrLIST"))
  }



  useEffect(() => {
    fetchGetAllData({
      language: itemList?.typeLang,
    })
    fetchVideoGEtData({
      language: itemList?.typeLang,
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [itemList?.typeLang])


  return (
    <div className={styles.Container}>
      <Helmet>
        <title>{`Ustalar haqida ma'lumot`}</title>
        <meta name="description" content="DEKOART” – Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir." />
        <meta name="description" content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:" />
        <meta name="keywords" content="sadaf decocento dekoart krasska lak buyoq " />
      </Helmet>
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
              <p>{masters?.name}</p>
            </div>
            <div className={styles.MainItem}>
              {
                masters?.attachment?.map(data => {
                  return (
                    data?.photo_url && <div className={styles.ImgOne}>
                      <img src={data?.photo_url} alt="" />
                    </div>
                  )
                })
              }


              <div className={styles.textLeftTwo}>

                <p id="terms-content" dangerouslySetInnerHTML={{ __html: masters?.description }} />



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
