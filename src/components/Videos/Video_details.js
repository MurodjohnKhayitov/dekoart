import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { url } from "../Host/Host";
import styles from "./video.module.css";
const Video_Details = () => {

  const { id } = useParams();
  const VideoId = id.replace(":", "");
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  const [videoIdGet, setVideoIdGet] = useState([])
  useQuery(["VideoIdGet type"], () => {
    return fetch(`${url}/videos/${VideoId}`).then(res => res.json())
  }, {
    onSuccess: res => {
      setVideoIdGet(res)

    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )


  const [videoProductlist, setvideoProductlist] = useState([])
  useQuery(["videoProductlist type"], () => {
    return fetch(`${url}/productlist/`).then(res => res.json())
  }, {
    onSuccess: res => {
      setvideoProductlist(res)

    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  const { t } = useTranslation(["video"]);

  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <div className={styles.ContentLeft}>
            <div className={styles.LeftTitle}>
              <p>{videoIdGet?.title || "no data"}</p>
            </div>
            <div className={styles.MainItem}>
              <div className={styles.video_youtub} >
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={videoIdGet?.video_url}
                  title="Ottocento Dekoart"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.textLeftTwo}>
                <p>{t("idea1")} <b style={{ color: "green", cursor: "pointer" }}>{t("idea2")}</b>{t("idea3")}</p>
                <p>{t("idea4")}
                  <b>
                    +(998) 95 198-26-66;
                    +(998) 99 855-26-66;
                    +(998) 99 486-26-66;
                  </b>

                </p>
              </div>


            </div>

          </div>
          <div className={styles.ContentRight}>
            <div className={styles.RightTitle}>
              <p>{t("produtTitle")}</p>

            </div>
            <div className={styles.ProductList}>
              {
                videoProductlist?.map(data => {
                  return (
                    <div key={data.id} onClick={() => HandleId(data.id)} className={styles.ProductItems}>
                      <p> <i className="fa fa-chevron-right"></i></p>
                      <p>{data?.name || "name"}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video_Details;
