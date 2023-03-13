import { createContext, useState } from "react";
import ImgOne from "../components/assets/images copy/flash/flash-1.jpg";
import Col1 from "../img/col1.jpg";
import Img1 from "../img/img1.jpg";
export const DetailsForDekoart = createContext();
export const MyDekoartItems = ({ children }) => {
  const [itemList, setItemList] = useState({ typeLang: (localStorage.getItem("i18nextLng")) });
  return (
    <DetailsForDekoart.Provider value={[itemList, setItemList]}>
      {children}
    </DetailsForDekoart.Provider>
  );
};
