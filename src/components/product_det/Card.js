import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

export default class Card extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4.5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <>
        <Slider {...settings}>
          {data.relatedData.map((item, index) => {
            return (
              <div className="related-box-details" key={index}>
                <div className="shodow">
                  <div className="related-img-box">
                    <img src={item.imgRel} alt="" />
                  </div>
                  <div className="related-text-box">
                    <h1>{item.tit}</h1>
                    <p>{item.descrip}</p>
                    <button type="button">Batacd fsil</button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
}
