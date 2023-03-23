import React, { useContext, useEffect, useState } from "react";
import Model from "./Model";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb, message, } from 'antd';
import { FaHome } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useQuery } from "react-query";
import { url } from "../Host/Host";
import colImg from '../../img/col1.jpg'
import fasadimg from '../../img/img1.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import noDataImg from '../../assets/noData/NoData.png'
import { Button, Modal } from 'antd';
import { Player, BigPlayButton } from 'video-react';
import { DetailsForDekoart } from "../../ContextMenu/ContextMenu";
import ReactPlayer from 'react-player'

const Home = () => {
  const { id } = useParams();
  const UrlId = id.replace(":", "");

  // ----------------------Carousel
  const settings1 = {
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
  // ---------------------GOItem
  const navigate = useNavigate();
  const HandleId = (id) => {
    navigate(`/product_det/:${id}`);
  };
  // ---------------------GOItem

  const [getM2M, setgetM2M] = useState("");
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img) => {
    let tempData = [img];
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };


  const [productsLists, setProductsLists] = useState([])
  useQuery(["ProductsLists type"], () => {
    return fetch(`${url}/productlist/`).then(res => res.json())
  }, {
    onSuccess: res => {
      setProductsLists(res)
    },
    onError: err => {
      console.log(err, "err");
    }
  }
  )


  const [NewArray, setNewArray] = useState([]);
  const NewArrayOne = [];
  const NewArrayTwo = [];

  productsLists.forEach((data) => {
    if (data.id > 0 && data.id <= 12) {
      NewArrayOne.push(data);
    }
    if (data.id > 12) {
      NewArrayTwo.push(data);
    }
  });

  const [productId, setProductId] = useState([])

  // const getDetailsProduct = () => {
  //   fetch(`${url}/products/${UrlId}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setProductId(res)
  //     })
  //     .catch(err => console.log(err))

  // }
  const [itemList, setItemList] = useContext(DetailsForDekoart)

  const getDetailsProduct = (params) => {
    Object.entries(params).forEach(i => {
      if (!i[1]) delete params[i[0]]
    })

    fetch(`${url}/products/${UrlId}?` + new URLSearchParams(params))
      .then(res => res.json())
      .then(res => {
        setProductId(res)
      })
      .catch(err => console.log(err, "ERROrLIST"))
  }


  useEffect(() => {
    getDetailsProduct({
      language: itemList?.typeLang,
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [UrlId, itemList?.typeLang])

  const responsive1 = {
    superLargeDesktop: {      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 480 },
      items: 2,
    },
    mobile1: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },

  };



  const [isModalGalleryOne, setIsModalGalleryOne] = useState(false);
  const [falleryId, setfalleryId] = useState(0)

  const showModalGalleryOne = (id) => {
    setIsModalGalleryOne(true);
    setfalleryId(id);
  };

  const handleCancelGallery = () => {
    setIsModalGalleryOne(false);
  };

  // ----------------------------------Type Img Group--------
  const [isModalCategory, setIsModalCategory] = useState(false);
  const [categoryId, setCategoryId] = useState(0)

  const showModalCategory = (id) => {
    setIsModalCategory(true);
    setCategoryId(id);

  };

  const handleCancelCategory = () => {
    setIsModalCategory(false);

  };



  // const DefaultValueItem = () => {
  //   if (!isModalGalleryOne) {
  //     setfalleryId(0)
  //   }
  //   if (!isModalCategory) {
  //     setCategoryId(0)
  //   }
  // }

  // useEffect(() => {
  //   DefaultValueItem()
  // }, [isModalCategory, isModalGalleryOne])

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

              <NavLink to={`product_det/:${UrlId}`}> {productId.name}</NavLink>

            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="containerrr">
          {/* {productId?.map((value) => {
              return ( */}
          <div className="ContainerItem">
            <div className="detail-left">
              <div className="img-box">
                <div className="produs-img">
                  <img src={productId?.photo_url || noDataImg} alt="" />
                </div>
                <div className="galery">
                  <Slider {...settings1} >
                    {productId?.figure_out?.map((item) => {
                      return (
                        <div className="box-galery" key={item?.id}>
                          <div className="card-img">
                            <img
                              src={item?.photo_url || noDataImg}
                              className="card-img-top"
                              onClick={() => {
                                showModalGalleryOne(item?.id)
                                getData(
                                  item.photo_url,

                                )
                              }
                              }
                              alt="..."
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  <Modal
                    className="GalleryFahter"
                    footer={null}
                    open={isModalGalleryOne}
                    onCancel={handleCancelGallery}>
                    {productId?.figure_out?.filter(data => data.id == falleryId).map((item) => {
                      return (
                        <div className="GalleryOne">
                          <img src={item?.photo_url} alt="" />
                        </div>
                      )
                    })}
                  </Modal>

                  <Modal
                    className="GalleryFahter"

                    footer={null}
                    open={isModalCategory}
                    onCancel={handleCancelCategory}>
                    {productId?.color_catalog?.filter(data => data.id == categoryId).map((item) => {
                      return (
                        <div className="GalleryOne">
                          <img src={item?.photo_url} alt="" />
                        </div>
                      )
                    })}
                  </Modal>
                  {
                    productId?.color_catalog && <div className="color-catolog">
                      {productId?.color_catalog?.map((item, index) => {
                        return (
                          <div key={index} className="color-img">
                            <img
                              style={{ cursor: "pointer" }}
                              src={item?.photo_url || noDataImg}
                              className="color-img-top"
                              onClick={() => {
                                showModalCategory(item?.id)
                                getData(item?.photo_url || noDataImg)
                              }
                              }
                              alt="colImg"
                            />
                            <p>{item?.name || "null"}</p>
                          </div>
                        );
                      })}
                    </div>}
                </div>
              </div>
            </div>
            <div className="detail-right">
              <div className="ForAynantitleForText">
                <h1 className="DekoartTitle" id="terms-content" dangerouslySetInnerHTML={{ __html: productId?.name || "NoTitle" }} />
                <p className="DekoartText" id="terms-content" dangerouslySetInnerHTML={{ __html: productId?.title || "NoTitle" }} />

              </div>
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
              </div>

              <div className="product-about">
                <p id="terms-content" dangerouslySetInnerHTML={{ __html: productId?.description || "NO description" }} />

              </div>
              {
                productId?.video_url && <div className="video-youtub">

                  <ReactPlayer
                    width='100%'
                    height='100%'
                    style={{ width: "100%", height: "100%" }}
                    url={productId?.video_url} />


                </div>
              }
            </div>
          </div>
          <div className="CarosuelGroup">
            <div className={"CardGroup"}>
              <Carousel
                className="SliderGroup"
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={5000}
                responsive={responsive1}
              >
                {NewArrayOne?.map((item) => {
                  return (
                    <div key={item?.name} className={"CardItem"}>
                      <div className={"ForImgCard"}>
                        <img src={item?.photo_url || noDataImg} alt="" />
                      </div>
                      <div className={"ForTextCard"}>
                        <div onClick={() => HandleId(item?.id)} className={"ProductTitle"}>
                          <p style={{ color: "black" }} id="terms-content" dangerouslySetInnerHTML={{ __html: item?.name || "NoTitle" }} />
                        </div>
                        <div className={"ProductText"}>
                          <p id="terms-content" dangerouslySetInnerHTML={{ __html: item?.title || "NoTitle" }} />
                        </div>
                        <div className={"ProductBtn"}>
                          <button onClick={() => HandleId(item?.id)}>Batafsil</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Carousel>
            </div>
            <div className={"CardGroup"}>
              <Carousel
                className="SliderGroup"
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={5000}
                responsive={responsive1}
              >
                {NewArrayTwo.map((item) => {
                  return (
                    <div key={item.name} className={"CardItem"}>
                      <div className={"ForImgCard"}>
                        <img src={item?.photo_url || noDataImg} alt="" />
                      </div>
                      <div className={"ForTextCard"}>
                        <div onClick={() => HandleId(item?.id)} className={"ProductTitle"}>
                          <p style={{ color: "black" }} id="terms-content" dangerouslySetInnerHTML={{ __html: item?.name || "NoTitle" }} />

                        </div>
                        <div className={"ProductText"}>
                          <p id="terms-content" dangerouslySetInnerHTML={{ __html: item?.title || "NoTitle" }} />

                        </div>
                        <div className={"ProductBtn"}>
                          <button onClick={() => HandleId(item?.id)} >Batafsil</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Carousel>

            </div>

          </div>
        </div>

      </section>
      {/* {model === true ? (
        <Model
          img={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )} */}
    </>
  );
};

export default Home;
