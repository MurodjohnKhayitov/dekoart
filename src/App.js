import React from "react";
import "./App.css";
import { Helmet } from 'react-helmet'

import RouterMain from "./util/RouterMain";

function App() {
  return (
    <>
      {/* <Helmet>
        
        <title>DEKOART.UZ </title>
        <meta
          name="description"
          content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:"

        />

        <meta itemprop="name" content="Reed" />
        <meta
          itemprop="description"
          content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:"

        />
        <meta
          itemprop="image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />

        <meta property="og:url" content="https://dekoart.uz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reed" />
        <meta
          property="og:description"
          content="DEKOART TEKSTURA Teksturali fasad qoplamasiTa'rifi: Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.Xarakteristikasi:"

        />
        <meta
          property="og:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />

      </Helmet> */}
      
      <RouterMain />

    </>
  );
}

export default App;
