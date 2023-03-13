import '../App.css'
import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

import { Route, Routes, Navigate } from 'react-router-dom'
const Header = React.lazy(() => import("../common/header/Header"))
const Contact = React.lazy(() => import("../components/contact/Contact"))
const Video_Details = React.lazy(() => import('../components/Videos/Video_details.js'))
const Home = React.lazy(() => import('../components/Home/Home.js'))
const Prodeuct_Det = React.lazy(() => import("../components/product_det/Home.js"))
const News = React.lazy(() => import('../components/News/News.js'))
const Videos = React.lazy(() => import('../components/Videos/Videos'))
const ServiceMaslahat = React.lazy(() => import('../components/Xizmatlar/ServiceMaslahat'))
const ServiceEdeucation = React.lazy(() => import('../components/Xizmatlar/ServiceEdeucation'))
const Shops = React.lazy(() => import('../components/Shops/Shops'))
const DekoarItem = React.lazy(() => import('../components/Dekoart/DekoartItem'))
const Footer = React.lazy(() => import('../common/footer/Footer.jsx'))
const Products = React.lazy(() => import('../components/Product/Products'))
const NewsDetail = React.lazy(() => import('../components/News/NewsDetail'))
const Master = React.lazy(() => import('../components/Masters/Master'))
const ErrorPage = React.lazy(() => import('../components/Error/Errorpage'))

export default function RouterMain() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/home' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Home />
                    </React.Suspense>
                } />
                <Route path='/dekoart' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <DekoarItem />
                    </React.Suspense>
                } />
                <Route path='/contact' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Contact />
                    </React.Suspense>
                } />
                <Route path='/news' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <News />
                    </React.Suspense>
                } />
                <Route path='/news/:id' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <NewsDetail />
                    </React.Suspense>
                } />
                <Route path='/masters' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Master />
                    </React.Suspense>
                } />
                <Route path='/maslahat' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <ServiceMaslahat />
                    </React.Suspense>
                } />
                <Route path='/oqitish' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <ServiceEdeucation />
                    </React.Suspense>
                } />
                <Route path='/markets' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Shops />
                    </React.Suspense>
                } />
                <Route path='/product' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Products />
                    </React.Suspense>
                } />
                <Route path='/product_det/:id' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Prodeuct_Det />
                    </React.Suspense>
                } />
                <Route path='/video' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Videos />
                    </React.Suspense>
                } />
                <Route path='/video/:id' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <Video_Details />
                    </React.Suspense>
                } />
                <Route path='*' element={
                    <React.Suspense fallback={<div className={"MoonLoad"} ><MoonLoader size={100} color="#0d263b" /></div>}>
                        <ErrorPage />
                    </React.Suspense>
                } />

                <Route path="/" element={<Navigate to={"/home"} />} />
            </Routes>
            <Footer />
        </div>
    )
}
// rinok in shops
// usluga in Xizmalar
// company_about in Dekoart