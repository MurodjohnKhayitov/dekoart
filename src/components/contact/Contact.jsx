import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { url } from "../Host/Host";
import "./style.css";

const Contact = () => {

  const { t } = useTranslation(["contact"]);

  const [contact, setContact] = useState([])


  const [itemList, setItemList] = useContext(DetailsForDekoart)

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
  }, [itemList?.typeLang])


  return (
    <>
      <Helmet>
        <title>{`Biz bilan bog'lanish>> DEKOART.UZ`}</title>
        <meta name="description" content="DEKOART” – Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir." />
        <meta name="description" content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:" />
        <meta name="keywords" content="sadaf decocento dekoart krasska lak buyoq " />
      </Helmet>
      <section class="contact">
        <div class="content">
          <h2>{t("title")}</h2>
        </div>
        <div class="container1">
          <div class="contactInfo">
            {
              contact?.map(data => {
                return (
                  <div class="boxx">
                    <div class="icon">
                      <i class={data?.icon || null}></i>
                    </div>
                    <div class="text">
                      <h3 id="terms-content" dangerouslySetInnerHTML={{ __html: data?.type }} />
                      <p id="terms-content" dangerouslySetInnerHTML={{ __html: data?.data }} />

                    </div>
                  </div>
                )
              })
            }



          </div>
          <div class="contactForm">
            <form>
              <h2>{t("messageTitle")}</h2>
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span>{t("fullname")}</span>
              </div>
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span>{t("email")}</span>
              </div>
              <div class="inputBox">
                <textarea required="required"></textarea>
                <span>{t("typeTextare")}</span>
              </div>
              <div class="inputBox">
                <button style={{ padding: "10px 30px", borderRadius: "10px", backgroundColor: "#0f3460", color: "white" }}>{t("send")}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="map-area">
        {/* <!-- google-map-area start --> */}
        <div class="map-wrapper">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d165085.5949219267!2d69.39693329643943!3d41.20466935870913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1672040173800!5m2!1sru!2s" width="100%" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* 
          <iframe
            class="googlemap"
            src="https://yandex.uz/map-widget/v1/-/CCUeyUQQ-B"
            width="1180"
            height="500"
            frameborder="1"
            allowFullScreen="true"
          ></iframe> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
