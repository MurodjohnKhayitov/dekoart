import React, { useState, useContext } from "react";
import data from "./data";
import Model from "./Model";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import { useParams } from "react-router-dom";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr';

const Home = () => {
  const [itemList, setItemList] = useContext(DetailsForDekoart);
  const { id } = useParams();
  const UrlId = id.replace(":", "");

  // ----------------------Carousel
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // ------------------Carousel------
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={"NextArrow"} onClick={onClick}>
            <button className="">
                <GrNext />
            </button>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={"PrevArrow"} onClick={onClick}>
            <button className="">
                <GrPrevious />
            </button>
        </div>
    );
};
let settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        { 
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


  const [getM2M, setgetM2M] = useState("");
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    console.warn(tempData);
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };

  // const [NewArray, setNewArray] = useState([]);
  const NewArrayOne = [];
  const NewArrayTwo = [];

  itemList.forEach((data) => {
    if (data.id > 0 && data.id <= 12) {
      NewArrayOne.push(data);
    }
    if (data.id > 12 && data.id < 25) {
      NewArrayTwo.push(data);
    }
  });
  console.log(NewArrayOne, "NewArray");

  return (
    <>
      <section className="details">
        <div className={"BreadcrumbItem"}>

          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/home"><FaHome style={{ marginRight: "15px" }} /> DEKOART.UZ</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink to="/product"> Mahsulotlar</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {itemList
                .filter((data) => data.id == UrlId)
                .map((value) => {
                  return (
                    <NavLink to="/product_det/:1"> {value.name}</NavLink>
                  );
                })}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="containerrr">
          {itemList
            .filter((data) => data.id == UrlId)
            .map((value) => {
              return (
                <div className="ContainerItem">
                  <div className="detail-left">
                    <div className="img-box">
                      <div className="produs-img">
                        <img src={value.cover} alt="" />
                      </div>
                      <div className="galery">
                        <Slider {...settings1} >
                          {value.cardData.map((item, index) => {
                            return (
                              <div className="box-galery" key={index}>
                                <div className="card-img">
                                  <img
                                    src={item.imgSrc}
                                    className="card-img-top"
                                    onClick={() =>
                                      getData(
                                        item.imgSrc,
                                        item.title,
                                        item.desc
                                      )
                                    }
                                    alt="..."
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="color-catolog">
                          {value.colorData.map((item, index) => {
                            return (
                              <div className="color-galery" key={index}>
                                <div className="color-img">
                                  <img
                                    src={item.imgCol}
                                    className="color-img-top"
                                    onClick={() =>
                                      getData(item.imgCol, item.num, item.desc)
                                    }
                                    alt="..."
                                  />
                                  <p>{item.num}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-right">
                    <h1>{value.name}</h1>
                    <p>{value.desc}</p>
                    <div className="calculator">
                      <button className="icon-calc" type="button">
                        <i className="fa fa-calculator"></i>Kalkulyator
                      </button>
                      <div className="calc">
                        <span>Devor maydoni:</span>
                        <input
                          type="text"
                          value={getM2M}
                          onChange={(e) => setgetM2M(e.target.value)}
                          placeholder="m2 kiriting"
                        />
                        <span>м²</span>
                      </div>
                      <div className="Result">
                        <p>
                          {getM2M ? (
                            <h1>
                              {getM2M} m2 joyga {parseInt(getM2M * 1.8)} kg
                              mahsulot ishlatiladi
                            </h1>
                          ) : null}
                        </p>
                      </div>

                      {/* <div className="calcul">
                        <a href="#">Hisoblash</a>
                        <h5>Asosiy Material</h5>
                        <div className="result-calc">
                          <p>DEKO'CENTO(Perla Bianco)</p>
                          <div className="resul">
                            <p>4.00kg</p>
                            <p>10dona</p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="product-about">
                      <p>
                        <span>Ta’rifi:</span>Akrilik kopolimerlar asosli
                        ishlatishga tayyor dekorativ qoplama.
                      </p>
                      <p>
                        <span>Xarakteristikasi:</span> Surilganida, travertin
                        tabiiy tosh qoplamasiga, ko’rinish xususiyatlari
                        bo’yicha juda o’xshash fakturalar chiqarish mumkin. Uzoq
                        muddatga chidaydigan tashqi va ichki yuzalar qoplamasi.
                      </p>
                      <p>
                        <span>Ishlatilish joylari:</span> Binolarning tashqi va
                        ichki devor yuzalarining pardozi. Sement suvoq qilingan
                        yuzalarga, beton, gips, taxta ustiga yaxshi suriladi.
                      </p>
                      <p>
                        <span>Yuzaylarning tayyorlanishi:</span> Yog’li dog’lar,
                        kir va begona jismlar uzoqlashtiriladi. Shishib chiqqan,
                        do’ppaygan va boshqa noteks yuza qismlari tekislanadi.
                        Yoriqlar va teshiklar to’ldiriladi. Yuza tayyorlangandan
                        so’ng DEKOPRIMER bo’yoq astar suriladi.
                      </p>
                      <p>
                        <span>Ishlatilishi:</span> Yuzaga, astar bo’yoq
                        surilgandan kamida 12 soatdan keyin po’lat andava bilan
                        suriladi. Birinchi bo’lib devorga 1,5-2 mm qalinlikda
                        tekis suriladi va qattiq shyotka yoki mos uskuna
                        yordamida chuqurchalar xosil qilinadi, bir oz
                        qattiqlashgandan keyin po’lat andava bilan silliqlanadi.
                        Suvoq yetarlicha qurigandan keyin chizg’ich bilan
                        terilgan tosh shakli berish uchun chiziladi. TRAVERTIN
                        to’liq qurishi 24 soat.
                      </p>
                      <p>
                        <span>So’ngi pardozlash:</span> Shakl berilgan yuza
                        to’liq qurigandan keyin yuzaga valik bilan DEKOLAK (yoki
                        boshqa shaffof akril lok) 1:5 nisbatta suv bilan
                        aralashtirilib suriladi. Yuza to’liq qurigach DEKOCOLOR
                        bo’yog’i surilib qurimasidan yuzadagi ortiqcha suyuqlik
                        namlangan gubka, yoki birorbir yomshoq yuzali material
                        bilan olib tashlanadi. Bo’yoq tabaqasi to’liq qurigandan
                        keyin DEKOLAK (yoki boshqa shaffof akril lok) 1:3
                        nisbatda suv bilan aralashtirilib maklovitsa bilan
                        bo’shliq qoldirmasdan suriladi.
                      </p>
                      <p>
                        <span>Sarfiyat:</span> 1.6-1.8 kg - 1 м2 .
                      </p>
                      <p>
                        <span>Qadoqlanishi:</span> 25 kg plastik idishlarda.
                      </p>
                      <p>
                        <span>Saqlanish muddati:</span> Xona xaroratida, yopiq
                        idishda - 1 yil.{" "}
                      </p>
                    </div>

                    <div className="video-youtub">
                      <iframe

                        src={value.videoUrl}
                        title="Ottocento Dekoart"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="CarosuelGroup">

           
            <div className={"CardGroup"}>
              <Slider {...settings} className={"SliderGroup"} >
                {NewArrayOne.map((item, index) => {
                  return (
                    <div key={item.name} className={"CardItem"}>
                      <div className={"ForImgCard"}>
                        <img src={item.cover} alt="" />
                      </div>
                      <div className={"ForTextCard"}>
                        <div className={"ProductTitle"}>
                          <p>{item.name}</p>
                        </div>
                        <div className={"ProductText"}>
                          <p>Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.</p>
                        </div>
                        <div className={"ProductBtn"}>
                          <button>Batafsil</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>

            </div>
            <div className={"CardGroup"}>
              <Slider {...settings} className={"SliderGroup"} >
                {NewArrayTwo.map((item, index) => {
                  return (
                    <div key={item.name} className={"CardItem"}>
                      <div className={"ForImgCard"}>
                        <img src={item.cover} alt="" />
                      </div>
                      <div className={"ForTextCard"}>
                        <div className={"ProductTitle"}>
                          <p>{item.name}</p>
                        </div>
                        <div className={"ProductText"}>
                          <p>Dizayn loyihalarini ishlab chiqish va binolarni yangilash bo'yicha xizmatlarning to'liq majmuasi.</p>
                        </div>
                        <div className={"ProductBtn"}>
                          <button>Batafsil</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>

            </div>
            
          </div>
        </div>

      </section>
      {model === true ? (
        <Model
          img={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
