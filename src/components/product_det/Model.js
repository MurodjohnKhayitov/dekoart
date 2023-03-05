import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class Model extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        let modelStyle ={
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
        return(
        
            <div className="modal show fade" style={modelStyle} >
                <div className="modal-dialog">
                <Slider {...settings}>
                    <div className="modal-content">
                    
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.img} className="img-fluid" />
                        </div>
                    
                    </div>
                    </Slider>
                </div>
            </div>
            
        )
    }
}