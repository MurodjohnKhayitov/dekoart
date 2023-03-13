import React, {  useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './education.module.css'
import imgOne from '../../img/Education/1548312389_20180811_110612.jpg'
import imgTwo from '../../img/Education/1548312414_20180811_105228.jpg'
import imgThree from '../../img/Education/1548312429_20180811_113449.jpg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';
import { useTranslation } from 'react-i18next';

export default function ServiceEdeucation() { 
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  const { t } = useTranslation(["serviceEdu"]);

  useEffect(() => {
    document.title = "O'quv dasturlari>> DEKOART.UZ"
  }, [])
  const [productlist, setProductlist] = useState([])
    useQuery(["productlist type"], () => {
      return fetch(`${url}/productlist/`).then(res => res.json())
    }, {
      onSuccess: res => {
        setProductlist(res)
  
      },
      onError: err => {
        console.log(err, "err");
      }
    }
    )
  

  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.BreadcrumbItem}>

          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/usluga"> {t("breadCrum1")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/oqitish">{t("breadCrum2")}</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>{t("leftTitle")}</p>
            </div>
            <div className={styles.MainItem}>
              <div className={styles.ImgOne}>
                <img src={imgOne} alt="" />
              </div>
              <div className={styles.ImgOne}>
                <img src={imgTwo} alt="" />
              </div>
              <div className={styles.ImgOne}>
                <img src={imgThree} alt="" />
              </div>
              <div className={styles.textLeft}>
                <p>{t("textOne")}</p>
                <p>{t("textTwo")}</p>
              </div>
              <div className={styles.textLeft}>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>{t("spanOne")} </p>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>{t("spanTwo")}</p>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>{t("spanThree")}         </p>
              </div>
              <div className={styles.textLeftTwo}>
                <p>{t("idea1")}
                 <b style={{ color: "green", cursor: "pointer" }}>
                  {t("idea2")}</b>{t("idea3")}</p>
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
              <p>{t("produtTitle")}</p>

            </div>
            <div className={styles.ProductList}>
              {
                productlist.map(data => {
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
