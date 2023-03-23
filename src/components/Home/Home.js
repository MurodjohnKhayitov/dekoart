import React, { useEffect } from 'react'
import SlideCard from './Slider/SliderMain'
import ProductCarosuel from './CarosuelProduct/ProductCarosuel'
import Service from './Service/Service'
import ServiceType from './ServiceType/ServiceType'
import Statistic from './Statistic/Statistic'
import WeAbout from './WeAbout/WeAbout'
import AOS from "aos";
import { Helmet } from "react-helmet";

export default function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])


    AOS.init({
        duration: 1000
    });
    return (
        <div>
            <Helmet>
                <title>DEKOART.UZ</title>
                <meta name="description" content="DEKOART” – Ozbekistonda tashqi va ichki yuzalar uchun eng zamonaviy, yuqori sifatli lok boyoq, devor qoplama mahsulolartidir." />
                <meta name="description" content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:" />
                <meta name="keywords" content="sadaf decocento dekoart krasska lak buyoq " />
            </Helmet>
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
            <div >
                <Statistic />
            </div>



        </div>
    )
}
