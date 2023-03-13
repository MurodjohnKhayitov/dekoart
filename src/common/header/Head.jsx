import React, { useEffect, useState, useContext } from "react"
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
const Head = () => {
  const { i18n, t } = useTranslation()
  const [itemList, setItemList] = useContext(DetailsForDekoart)
  const [datatesone, setdatatesone] = useState(localStorage.getItem("i18nextLng"))
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("uz")
    }
    setItemList({ typeLang: datatesone })
  }, [datatesone])

  const handleLanguageChange = (e) => {
    // setItemList({typeLang: localStorage.getItem("i18nextLng")})
    i18n.changeLanguage(e.target.value)
    setdatatesone(e.target.value)
  }

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>

          <div className='left row'>
            <label><i className='fa fa-phone'></i> +88012 3456 7894</label>
            <label><i className='fa fa-envelope'></i> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>

            {/* <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={dataChangeLang}

              onChange={handleLanguageChange}
            >
              <option value="uz">uzbekcha</option>
              <option value="ru">russian</option>
            </select> */}
            <div>
              <label htmlFor="CheckUz" onChange={handleLanguageChange} value={datatesone}>Uz
                <input style={{ display: "none" }} id="CheckUz" type="radio" name="checkLang" value={"uz"} />
              </label>
              <label htmlFor="CheckRu" onChange={handleLanguageChange} value={datatesone}>
                Ru
                <input style={{ display: "none" }} id="CheckRu" type="radio" name="checkLang" value={"ru"} />
              </label>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head