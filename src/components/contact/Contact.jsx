import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { url } from "../Host/Host";
import "./style.css";

const Contact = () => {

  const { t } = useTranslation(["contact"]);

  const [contact, setContact] = useState([])


  const [itemList] = useContext(DetailsForDekoart)

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach(i => {
      if (!i[1]) delete params[i[0]]
    })

    fetch(`${url}/contact/?` + new URLSearchParams(params))
      .then(res => res.json())
      .then(res => {
        setContact(res)
      })
      .catch(err => console.log(err, "ERROrLIST"))
  }
  useEffect(() => {
    fetchGetAllData({
      language: itemList?.typeLang,
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [itemList?.typeLang])


  return (
    <>
      <Helmet>
        <title>{`Biz bilan bog'lanish>> DEKOART.UZ`}</title>
        <meta name="description" content="DEKOART” – Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir." />
        <meta name="description" content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:" />
        <meta name="keywords" content="sadaf decocento dekoart krasska lak buyoq " />
      </Helmet>
      <section className="contact">
        <div className="content">
          <h2>{t("title")}</h2>
        </div>
        <div className="container1">
          <div className="contactInfo">
            {
              contact?.map(data => {
                return (
                  <div key={data?.type} className="boxx">
                    <div className="icon">
                      <i className={data?.icon || null}></i>
                    </div>
                    <div className="text">
                      <h3 id="terms-content" dangerouslySetInnerHTML={{ __html: data?.type }} />
                      <p id="terms-content" dangerouslySetInnerHTML={{ __html: data?.data }} />

                    </div>
                  </div>
                )
              })
            }



          </div>
          <div className="contactForm">
            <form>
              <h2>{t("messageTitle")}</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>{t("fullname")}</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>{t("email")}</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>{t("typeTextare")}</span>
              </div>
              <div className="inputBox">
                <button style={{ padding: "10px 30px", borderRadius: "10px", backgroundColor: "#0f3460", color: "white" }}>{t("send")}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Contact;
