import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = (props) =>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) =>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}


const Related = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
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
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      }
    const Rdata = [
        {
            id: 1,
            discount: 50,
            cover: "./images/flash/flash-1.jpg",
            name: "Ottocento",
            link: "/product_details",
            desc: "DEKO'ART PARLA JILOLI PARKET LOKI Ta'rifi- Ichki va tashqi yog'och, MDF,DSP,DVP..." ,
          },
          {
            id: 2,
            discount: 40,
            cover: "./images/flash/flash-2.jpg",
            name: "Venetto",
            desc: "DEKO`CENTO (PERLAMUTR) - Tashqi va ichki yuzalar uchun dekortiv qoplama DEKO`CENTO (PERLAMUTR)...",
          },
          {
            id: 3,
            discount: 40,
            cover: "./images/flash/flash-3.jpg",
            name: "Travertin",
            desc: "DEKOLAK SUPER AKRIL - Tashqi va ichki yuzalar uchun shaffof himoya loki va astar ...",
          },
          {
            id: 4,
            discount: 40,
            cover: "./images/flash/flash-4.jpg",
            name: "Leonardo",
            desc: "DEKOART TEKSTURA Teksturali fasad qoplamasi Ta’rifi: Akrilik kopolimerlar asosli ishlatishga...",
          },
          {
            id: 5,
            discount: 50,
            cover: "./images/flash/flash-2.jpg",
            name: "Kapital Universal",
            desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
          },
          {
            id: 6,
            discount: 50,
            cover: "./images/flash/flash-3.jpg",
            name: "Travertin",
            desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
          },
    ]
  return (
    <>
       <Slider {...settings}>
        {
            Rdata.map((value,index) => {
            return (   
           
            <div className="box-related">
                <div className="r-product mtop">
                    <div className="img">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="product-details">
                        <h3>{value.name}</h3>
                        <p></p>
                        <button><a href="#">Batafsil</a></button>
                    </div>
                </div>
            </div>
             )})
            }
            </Slider>
    </>
  )
}

export default Related