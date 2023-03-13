import React, { useState,  useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from "react-query";
import { url } from "../Host/Host";
const Shops = () => {
  const [data, setData] = useState(
    [ 
      {
        name: "Dombirobod qurilish bozori",
        address: "Dombirobod qurilish bozori 65-do`kon – Abbosxon Toshmuhamedov",
        phone: "+998901885549",
        soat: "09.00-18.00",
      },
      {
        name: "Qo`yliq   qurilish bozori",
        address: "Qo`yliq qurilish bozori 14-do`kon Zaxriddin Asatullaev",
        phone: "+998997922799",
        soat: "09.00-18.00",
      },
      {
        name: "O`rikzor “Story Gorod” qurilish bozori",
        address:
          "O`rikzor “Story Gorod” qurilish bozori 4-blok 4-do`kon. Hayrullo Ergashev",
        phone: "+998943231111",
        soat: "09.00-18.00",
      },
      {
        name: "O`rikzor       ”Gilam Bozori”",
        address: "O`rikzor `”Gilam Bozori” 10- do`kon. Kozim Sodi`qxo`jayev",
        phone: "+998977022912",
        soat: "09.00-18.00",
      },
      {
        name: "Bekto`pi            qurilish bozori",
        address: "Bekto`pi qurilish bozori 45-do`kon    Bobir Mamedov",
        phone: "+998983054567",
        soat: "d",
      },
      {
        name: "Bekto`pi            qurilish bozori",
        address: "Bekto`pi qurilish bozori Ixtiyor aka",
        phone: "+998998638012",
      },
      {
        name: "Jomiy qurilish bozori Usta Shirin ko`chasi",
        address:
          "Jomiy qurilish bozori Usta Shirin ko`chasi savdo qatori 26-do`kon Kamol  va Husan",
        phone: "+998909128484           +998950006067",
      },
      {
        name: "Jomiy qurilish bozori Usta Shirin ko`chasi",
        address:
          "Jomiy qurilish bozori Usta Shirin ko`chasi savdo qatori 21-do`kon            Oybek Ahmedov",
        phone: "+998977045774",
      },
      {
        name: "Jomiy qurilish bozori Usta Shirin ko`chasi",
        address:
          "Jomiy qurilish bozori Usta Shirin ko`chasi savdo qatori 8-do`kon            Dilmurod Umarqulov",
        phone: "+998909100609",
      },
      {
        name: "Yunusobod Gvardeyskiy Bozori",
        address:
          "Yunusobod Gvardeyskiy Bozori 5-qator 43-do`kon / Abduvali Sadikov",
        phone: "+998983033092            +998983023092",
      },
      {
        name: "Yunusobod Gvardeyskiy Bozori",
        address: "Yunusobod Gvardeyskiy Bozori Zoir aka",
        phone: "+998998421700",
      },

    ])
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  useEffect(() => {
    document.title = "Savdo Do'konlari>> DEKOART.UZ"
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
  // const [shopMarket, setshopMarket] = useState([])
  // useQuery(["shopMarket type"], () => {
  //   return fetch(`${url}/dictionary/shops/`).then(res => res.json())
  // }, {
  //   onSuccess: res => {
  //     setshopMarket(res)

  //   },
  //   onError: err => {
  //     console.log(err, "err");
  //   }
  // }
  // )
  // console.log(shopMarket,"shopMarket");

  return (
    <>
      <section className="shop-container">
        <div className={"BreadcrumbItem"}>

          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/rinok"> Bozorlar</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/oqitish"> Savdo Dokonlari</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="boxer">
          <div className="content-left">
            <div className="content-left-box">
              <div className={"Maintext"}>
                <p>SAVDO DO`KONLARI</p>

              </div>

              <p>O`ZBEKISTON BO`YLAB “DEKO`ART” SAVDO MARKAZLARI MANZILLARI</p>
              <div className="content-data">
                <table>
                  <tr>
                    <th>Hudud Nomi</th>
                    <th>
                      Savdo Markazi / Do`kon Manzili Sotuvchi Isim Sharifi
                    </th>
                    <th>Telefon Raqami</th>
                    <th>Ish Soati</th>
                  </tr>
                  <tr>
                    <td colspan="4" className="manzil">
                      Toshkent shaxri
                    </td>
                  </tr>
                  {data.map((val) => {

                    return (
                      <tr className="colo" key={val.name}>
                        <td className="shop-name">{val.name}</td>
                        <td className="shop-address">{val.address}</td>
                        <td className="shop-phone">{val.phone}</td>
                        <td className="shop-soat">09.00-18.00</td>
                      </tr>
                    );

                  })}

                </table>
              </div>
            </div>
          </div>

          <div className={"ContentRight"}>
            <div className={"RightTitle"}>
              <p>Mahsulotlarimiz</p>

            </div>
            <div className={"ProductList"}>
              {
                productlist.map(data => {
                  return (
                    <div key={data.id} onClick={() => HandleId(data.id)} className={"ProductItems"}>
                      <p> <i className="fa fa-chevron-right"></i></p>
                      <p>{data.name}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
