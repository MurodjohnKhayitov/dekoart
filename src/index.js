import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyDekoartItems } from "./ContextMenu/ContextMenu";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'antd/dist/antd.css';
import "aos/dist/aos.css";
import './i18n'
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MyDekoartItems>
          <App />
        </MyDekoartItems>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
