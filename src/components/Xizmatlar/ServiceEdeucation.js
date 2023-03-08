import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { DetailsForDekoart } from '../../ContextMenu/ContextMenu';
import styles from './education.module.css'
import imgOne from '../../img/Education/1548312389_20180811_110612.jpg'
import imgTwo from '../../img/Education/1548312414_20180811_105228.jpg'
import imgThree from '../../img/Education/1548312429_20180811_113449.jpg'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query';
import { url } from '../Host/Host';

export default function ServiceEdeucation() {
  const [itemList, setItemList] = useContext(DetailsForDekoart);
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
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
              <NavLink to="/usluga"> Xizmatlar</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/oqitish"> O'quv dasturlari</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>O`QUV DASTURLARI</p>
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
                <p>«Dekoart», o`z mijozlariga, ularning ijod qilish san`ati qariga chuqur sho`ng`ishlari uchun kerakli bo`lgan barcha imkoniyatlarni taqdim qiladi. Bizning mahsulotlarimiz orqali Siz, yangi, o`zingizga ma`lum bo`lmagan ijodkorlik qirralarini ochasiz.</p>
                <p>Birgina bo`yoq va shatplevkani onlab yo`nalishda surish mumkin. Har bir yo`nalish, yuzalarga takrorlanmas joziba va jilo hadiya qiladi. Biz Sizga, zamonaviy pardozlash texnikalarining dolzarb va qiziqarli yo`nalishlari bo`yicha malaka oshirish dasturlarimizni taqdim qilamiz. O`quv dasturlarimiz quyidagi usullarda olib boriladi:</p>
              </div>
              <div className={styles.textLeft}>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>Bepul o`quv seminarlari; </p>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>Bepul mahorat darslari;</p>
                <p><span style={{ marginRight: "10px" }}><i class="fa-solid fa-angle-right"></i></span>Hamkor ustalar uchun qisqa muddatli bepul o`quv dasturlari.

                </p>
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
