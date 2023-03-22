import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useQuery } from "react-query";
import { url } from "../Host/Host";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { MdOutlineNavigateNext } from "react-icons/md";

const Shops = () => {

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

  const [marketofDekoart, setMarketOfDekoart] = useState([])
  useQuery(["marketofDekoart type"], () => {
    return fetch(`${url}/dictionary/shops/`).then(res => res.json())
  }, {
    onSuccess: res => {
      setMarketOfDekoart(res)

    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )

  useEffect(() => {
    document.title = "Savdo Do'konlari>> DEKOART.UZ"
    fetchGetAllData({
      language: itemList?.typeLang,
    })
  }, [itemList?.typeLang])

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

              <p className="MainTitles">O`ZBEKISTON BO`YLAB “DEKO`ART” SAVDO MARKAZLARI MANZILLARI</p>
              <div className="content-data">
                <table>
                  <tr className="mainTitleTheme">
                    <th>Hudud Nomi</th>
                    <th>
                      Savdo Markazi / Do`kon Manzili Sotuvchi Isim Sharifi
                    </th>
                    <th>Telefon Raqami</th>
                    <th>Ish Soati</th>
                  </tr>
                  {
                    marketofDekoart.map(data => {
                      return data.region.map(data => {
                        return (
                          <>
                            < tr >
                              <td colspan="4" className="manzil">
                                <p id="ManzilText" dangerouslySetInnerHTML={{ __html: data.name }} />
                              </td>
                            </tr>
                            {
                              data?.district?.map(val => {
                                return val?.shops?.map(values => {
                                  return (

                                    <tr className="colo" key={data.name}>
                                      <td className="shop-name">
                                        <div id="termscontent" dangerouslySetInnerHTML={{ __html: val?.name || "noName" }} />
                                      </td>
                                      <td className="shop-address">
                                        <div id="termscontent" dangerouslySetInnerHTML={{ __html: values?.information || "noInforamtion" }} />
                                      </td>
                                      <td className="shop-phone">
                                        <div id="termscontent" dangerouslySetInnerHTML={{ __html: values?.phone || "noPhone" }} />
                                      </td>
                                      <td className="shop-soat">
                                        <div id="terms" dangerouslySetInnerHTML={{ __html: values?.working_hours || "NoHours" }} />

                                      </td>
                                    </tr>

                                  )
                                })



                              })

                            }


                          </>
                        )
                      })
                    })

                  }

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
                      <p><MdOutlineNavigateNext size={30}  /></p>
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
