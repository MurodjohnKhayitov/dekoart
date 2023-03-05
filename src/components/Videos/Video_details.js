import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import styles from "./video.module.css";
const Video_Details = () => {
  const [itemList, setItemList] = useContext(DetailsForDekoart);

  const { id } = useParams();
  const VideoId = id.replace(":", "");
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.SideGroup}>
          {itemList
            .filter((data) => data.id == VideoId)
            .map((data) => {
              return (
                <div className={styles.SideOneBar}>
                  <iframe
                    src={data.videoUrl}
                    title="Ottocento Dekoart"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              );
            })}
          <div className={styles.SideTwoBar}>
            <div className={styles.SideBarTitle}>
              <h1>Mahsulotlarimiz</h1>
            </div>
            <div className={styles.SideBarContent}>
              {itemList.map((val, key) => {
                return (
                  <ul key={key}>
                    <li className="product-link">
                      <i className="fa fa-chevron-right"></i>
                      <p onClick={() => HandleId(val.id)}>{val.name}</p>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video_Details;
