import React, { useState, useContext,useEffect } from "react";
import logo from "../../components/assets/images/deko.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { Button, Dropdown } from 'antd';
import { url } from "../../components/Host/Host";
import { useQuery } from "react-query";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const items = [
  {
    key: '1',
    label: (
      <NavLink to='/maslahat' >
        Maslahat
      </NavLink >
    ),
  },
  {
    key: '2',
    label: (
      <NavLink to='/oqitish' >
        Oqitish
      </NavLink >
    ),
  },

];
const Search = () => {
  const navigate = useNavigate();
  const [MobileMenu, setMobileMenu] = useState(false);
  const [toggleShowMenu, settoggleShowMenu] = useState(false);
  const [itemList, setItemList] = useContext(DetailsForDekoart);
  // translate     --------------

  const {  t } = useTranslation(["navbar"]);



  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 10);
  });

  const HandleForId = (id) => {
    navigate(`/product_det/:${id}`);
  };

  const [products, setProducts] = useState([])
  useQuery(["Products type"], () => {
    return fetch(`${url}/products/`).then(res => res.json())
  }, {
    onSuccess: res => {
      setProducts(res)

    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )

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
                      to="/home">Asosiy</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/dekoart">Deko'art</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/news">Yangiliklar</NavLink>
                  </li>
                  <li className={"liSubMenu"} onMouseEnter={() => settoggleShowMenu(true)}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/product">Mahsulotlar</NavLink>
                    {toggleShowMenu && <div className="sub-menu-1">
                      {products.map((data) => {
                        return (
                          <ul>
                            <li>
                              <p>{data?.name}</p>
                            </li>
                            {data?.product?.map(value => {
                              return (
                                <div
                                  key={value?.id}
                                  onClick={() => {
                                    HandleForId(value.id)
                                    settoggleShowMenu(false)

                                  }}
                                >
                                  <div>{value.name}</div>
                                </div>

                              )
                            })
                            }
                          </ul>
                        );
                      })}

                     
                    </div>}
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/video">Video</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/masters">Ustalar</NavLink>
                  </li>

                  <li>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottom"
                      arrow
                    >
                      <p>Xizmatlar</p>
                    </Dropdown>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/markets">Bozor</NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? '#ff014f' : null,
                        borderBottom: isActive ? "2px solid #ff014f" : "none"

                      })}
                      to="/contact">Aloqa</NavLink>
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
