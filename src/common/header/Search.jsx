import React, { useState, useContext } from "react";
import logo from "../../components/assets/images/deko.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { Button, Dropdown } from 'antd';
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

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 10);
  });

  const HandleForId = (id) => {
    navigate(`/product_det/:${id}`);
  };
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
                      <ul>
                        <li>
                          <p>Suvli Emulsiya Bo'yoqlari</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "WaterImplus")
                          .map((data) => {
                            return (
                              <div
                                key={data.filter}
                                onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>

                      <ul>
                        <li>
                          <p>Dekorativ</p>
                          <p>Qoplamalar</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "DekatratuvQoplama")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>

                      <ul>
                        <li>
                          <p>Italiyancha</p>
                          <p>Suvoqlar</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "ForItailona")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>
                      <ul>
                        <li>
                          <p>Astar Bo'yoq</p>
                          <p>va Loklar</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "AstarLooks")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>
                      <ul>
                        <li>
                          <p>Ranglanturuvchi</p>
                          <p>Mahsulotlar</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "ColorsItems")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>
                      <ul>
                        <li>
                          <p>EMAL VA LOKLAR</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "Emal")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>
                      <ul>
                        <li>
                          <p>MOLDINGLAR</p>
                        </li>
                        {itemList
                          .filter((data) => data.filter == "Emal")
                          .map((data) => {
                            return (
                              <div
                                key={data.id}
                                 onClick={() => {
                                  HandleForId(data.id)
                                  settoggleShowMenu(false)

                                }}
                              >
                                <div>{data.name}</div>
                              </div>
                            );
                          })}
                      </ul>
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
