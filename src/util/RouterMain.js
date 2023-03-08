import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import Header from '../common/header/Header'
import Contact from "../components/contact/Contact";
import Video_Details from "../components/Videos/Video_details";
import ProductDetails from "../components/Details/ProductDetails";
import Home from "../components/Home/Home";
import Prodeuct_Det from '../components/product_det/Home'
import News from "../components/News/News";
import Videos from "../components/Videos/Videos";
import Master from "../components/Masters/Master";
import ServiceMaslahat from "../components/Xizmatlar/ServiceMaslahat";
import ServiceEdeucation from "../components/Xizmatlar/ServiceEdeucation";
import Shops from "../components/Shops/Shops";
import DekoarItem from "../components/Dekoart/DekoartItem";
import Footer from '../common/footer/Footer.jsx'
import Products from '../components/Product/Products';
import NewsDetail from '../components/News/NewsDetail';
export default function RouterMain() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dekoart" element={<DekoarItem />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/masters" element={<Master />} />
                <Route path="/maslahat" element={<ServiceMaslahat />} />
                <Route path="/oqitish" element={<ServiceEdeucation />} />
                <Route path="/markets" element={<Shops />} />
                <Route path="/product" element={<Products />} />

                <Route path="/product_det/:id" element={<Prodeuct_Det />} />
                <Route path="/video" element={<Videos />} />
                <Route path="/video/:id" element={<Video_Details />} />

                <Route path="/" element={<Navigate to={"/home"} />} />
            </Routes>
            <Footer/>
        </div>
    )
}
// rinok in shops
// usluga in Xizmalar
// company_about in Dekoart