import React, { useState, useContext, useEffect } from "react";
import logo from "../../components/assets/images/deko.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { Button, Dropdown } from 'antd';
import { url } from "../../components/Host/Host";
import { useQuery } from "react-query";
import { BiChevronDown } from "react-icons/bi";
import { Divider, Popover, Segmented } from 'antd';

import { useTranslation } from "react-i18next";
 
 
const Search = () => {
  const navigate = useNavigate();
  const [MobileMenu, setMobileMenu] = useState(false);
  const [toggleShowMenu, settoggleShowMenu] = useState(false);
  // translate     --------------

  const { t } = useTranslation(["navbar"]);



  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 10);
  });
  const [getDetailId, setgetDetailId] = useState('')
  useEffect(() => {
    if (getDetailId) {
      navigate(`/product_det/:${getDetailId}`);
    }
  }, [getDetailId])

  const [products, setProducts] = useState([])

  const [itemList, setItemList] = useContext(DetailsForDekoart)

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach(i => {
      if (!i[1]) delete params[i[0]]
    })

    fetch(`${url}/products/?` + new URLSearchParams(params))
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
      .catch(err => console.log(err, "ERROrLIST"))
  }
  useEffect(() => {
    fetchGetAllData({
      language: itemList?.typeLang,
    })
  }, [itemList?.typeLang])

  const items = [
    {
      key: '1',
      label: (
        <NavLink to='/maslahat' >
          {t("advice")}
        </NavLink >
      ),
    },
    {
      key: '2',
      label: (
        <NavLink to='/oqitish' >
          {t("edu")}
        </NavLink >
      ),
    },

  ];
  // ----------------Wear state management----------------------------
  const [openwear, setOpenwear] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenwear(newOpen);
  };
  const handleWearValue = (value) => {
    setOpenwear(false);
  }

  const contentWear = (
    <div className="dataListItemsAll">

      {products.map((data) => {
        return (
          <ul key={data?.name}>
            <li>
              <p>{data?.name}</p>
            </li>
            {data?.product?.map(value => {
              return (
                <div
                  key={value?.id}
                  onClick={() => {
                    setgetDetailId(value.id)
                    handleWearValue()

                  }}
                  className={"ProductnameList"}
                >
                  <p>{value.name}</p>
                </div>

              )
            })
            }
          </ul>
        )
      })
      }
    </div>
  );

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>
          <header className="header">
            <div className="container d_flex">
              <div className="navlink">
                <ul
                  className={
                    MobileMenu
                      ? "nav-links-MobileMenu"
                      : "link f_flex capitalize"
                  }
                  onClick={() => setMobileMenu(false)}
                >
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/home">{t("asosiy")}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/dekoart">{t("dekoart")}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/news">{t("yangiliklar")}</NavLink>
                  </li>
                  <li>
                    <Popover
                      open={openwear}
                      onOpenChange={handleOpenChangeWear}
                      trigger="hover"
                      options={['Hide']}
                      placement="bottom"
                      className="PopoverItem"
                      content={contentWear} >
                      <NavLink

                        style={({ isActive }) => ({
                          color: isActive ? '#ff014f' : null,
                        })}
                        to="/product">{t("mahsulotlar")}</NavLink>
                    </Popover>
                  </li>
                  
                    <div className="ProductListAllData">
                      {products?.map(data => {
                        return (
                          <div key={data?.id} className="ProductItemOneData">
                            <div className="ProductTitle">
                              <p>{data?.name}</p>
                            </div>
                            {data?.product?.map(item => {
                              return (
                                <div key={item?.value}
                                  onClick={() => {
                                    setgetDetailId(item.id)
                                  }} className="ProductText">
                                  <p>{item?.name}</p>
                                </div>
                              ) 
                            }) 

                            }
                          </div>
                        )
                      })
                      }
                    </div>

                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/video">{t("video")}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/masters">{t("ustalar")}</NavLink>
                  </li>

                  <li>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottom"
                      arrow
                    >
                      <p>{t("xizmatlar")}</p>
                    </Dropdown>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/markets">{t("bozor")}</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/contact">{t("aloqa")}</NavLink>
                  </li>
                </ul>

                <button
                  className="toggle"
                  onClick={() => setMobileMenu(!MobileMenu)}
                >
                  {MobileMenu ? (
                    <i className="fas fa-times close home-btn"></i>
                  ) : (
                    <i className="fas fa-bars open"></i>
                  )}
                </button>
              </div>
            </div>
          </header>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div >
      </section >
    </>
  );
};

export default Search;
