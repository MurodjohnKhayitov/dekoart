import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Head = () => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("uz");
    }
  }, []);

  const handleLanguageChange = (e) => {
    // console.log(e,"eee");
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <label><i className='fa fa-phone'></i> +88012 3456 7894</label>
            <label><i className='fa fa-envelope'></i> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}

            >
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
            </select>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head