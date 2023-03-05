import React, { useEffect } from 'react'
import SlideCard from './Slider/SliderMain'
import ProductCarosuel from './CarosuelProduct/ProductCarosuel'
import styles from './home.module.css'
import Service from './Service/Service'
import ServiceType from './ServiceType/ServiceType'
import Statistic from './Statistic/Statistic'
import WeAbout from './WeAbout/WeAbout'
import AOS from "aos";

export default function Home() {
    useEffect(() => {
        document.title = "DEKOART.UZ"
    }, [])

    AOS.init({
        duration: 1000
    });
    return (
        <div>
            <div >
                <SlideCard />
            </div>
            <div data-aos="fade-up">
                <ProductCarosuel />
            </div>
            <div data-aos="fade-up">
                <Service />
            </div>
            <div data-aos="fade-up">
                <ServiceType />
            </div>
            <div data-aos="fade-up">
                <WeAbout />
            </div>
            <div data-aos="fade-up">
                <Statistic />
            </div>



        </div>
    )
}
