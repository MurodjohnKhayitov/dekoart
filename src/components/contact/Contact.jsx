import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { url } from "../Host/Host";
import "./style.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Biz bilan bog'lanish>> DEKOART.UZ"
  }, [])
  const [contact, setContact] = useState([])
  useQuery(["Contact type"], () => {
    return fetch(`${url}/contact/`).then(res => res.json())
  }, {
    onSuccess: res => {
      setContact(res)

    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )

  return (
    <>
      <section class="contact">
        <div class="content">
          <h2>BIZ BILAN BOG'LANING</h2>
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
                      <h3>{data?.type}</h3>
                      <p>{data?.data}</p>
                    </div>
                  </div>
                )
              })
            }


            {/* <div class="boxx">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="text">
                <h3>Phone</h3>
                <p>
                  +998(99) 877-08-15 <br /> +998(90) 638-08-51
                </p>
              </div>
            </div>
            <div class="boxx">
              <div class="icon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <div class="text">
                <h3>Email</h3>
                <p>ismoilov@gmail.com</p>
              </div>
            </div> */}
          </div>
          <div class="contactForm">
            <form>
              <h2>Send Message</h2>
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div class="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div class="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div class="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="map-area">
        {/* <!-- google-map-area start --> */}
        <div class="map-wrapper">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d165085.5949219267!2d69.39693329643943!3d41.20466935870913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1672040173800!5m2!1sru!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* 
          <iframe
            class="googlemap"
            src="https://yandex.uz/map-widget/v1/-/CCUeyUQQ-B"
            width="1180"
            height="500"
            frameborder="1"
            allowfullscreen="true"
          ></iframe> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
