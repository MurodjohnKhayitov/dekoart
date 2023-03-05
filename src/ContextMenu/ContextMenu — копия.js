import { createContext, useState } from "react";
import ImgOne from "../components/assets/images copy/flash/flash-1.jpg";
import Col1 from "../img/col1.jpg";
import Img1 from "../img/img1.jpg";
export const DetailsForDekoart = createContext();
export const MyDekoartItems = ({ children }) => {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      discount: 50,
      cover: ImgOne,
      filter: "WaterImplus",
      name: "Kapital fasad",
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",
      desc: "Kapital fasad -  Hushbichim va nozik qoplama, devorlaga baxmal effektli estetik ko`rinish hosil qiladi. Bu ajoyib qoplama har qanday interyerni jozibador va samimiy atmosferaga ega bo`lishini ta'minlaydi. Mahsulot, binoning tashqi va ichki tomonlariga jozibadorlik baxsh etadi. Vaqt o'tishi bilan o`z jozibasini yo`qotmaydi.",
      cardData: [
        {
          id: 1,
          imgSrc: Img1,
          title: "title 1",
          desc: "desc 1",
        },
        {
          id: 2,
          imgSrc: Img1,
          title: "title 2",
          desc: "desc 2",
        },
        {
          id: 3,
          imgSrc: Img1,
          title: "title 3",
          desc: "desc 3",
        },
        {
          id: 4,
          imgSrc: Img1,
          title: "title 1",
          desc: "desc 1",
        },
        {
          id: 5,
          imgSrc: Img1,
          title: "title 2",
          desc: "desc 2",
        },
        {
          id: 6,
          imgSrc: Img1,
          title: "title 3",
          desc: "desc 3",
        },
      ],
      colorData: [
        {
          id: 1,
          imgCol: Col1,
          num: "№ 840",
          desc: "desc 1",
        },
        {
          id: 2,
          imgCol: Col1,
          num: "№ 803",
          desc: "desc 1",
        },
        {
          id: 3,
          imgCol: Col1,
          num: "№ 805",
          desc: "desc 1",
        },
        {
          id: 4,
          imgCol: Col1,
          num: "№ 856",
          desc: "desc 1",
        },
        {
          id: 5,
          imgCol: Col1,
          num: "№ 840",
          desc: "desc 1",
        },
        {
          id: 6,
          imgCol: Col1,
          num: "№ 620",
          desc: "desc 1",
        },
        {
          id: 7,
          imgCol: Col1,
          num: "№ 800",
          desc: "desc 1",
        },
        {
          id: 8,
          imgCol: Col1,
          num: "№ 840",
          desc: "desc 1",
        },
        {
          id: 9,
          imgCol: Col1,
          num: "№ 803",
          desc: "desc 1",
        },
        {
          id: 10,
          imgCol: Col1,
          num: "№ 805",
          desc: "desc 1",
        },
        {
          id: 11,
          imgCol: Col1,
          num: "№ 856",
          desc: "desc 1",
        },
        {
          id: 12,
          imgCol: Col1,
          num: "№ 840",
          desc: "desc 1",
        },
        {
          id: 13,
          imgCol: Col1,
          num: "№ 620",
          desc: "desc 1",
        },
        {
          id: 14,
          imgCol: Col1,
          num: "№ 800",
          desc: "desc 1",
        },
        {
          id: 8,
          imgCol: Col1,
          num: "№ 840",
          desc: "desc 1",
        },
        {
          id: 9,
          imgCol: Col1,
          num: "№ 803",
          desc: "desc 1",
        },
      ],
    },
    {
      id: 2,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "WaterImplus",
      name: "Kapital fasad strong",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 3,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "WaterImplus",
      name: "UNversal",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 4,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "WaterImplus",
      name: "Ranglar dunyosi",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 5,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "travertin Dekaort",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 6,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "travertin Marjon",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 7,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "Lenardo",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 8,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "Tekstura",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 9,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "Korateks",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 10,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "Grantitto",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 11,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "DekatratuvQoplama",
      name: "Trioc",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 12,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "ForItailona",
      name: "Venetto",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 13,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "ForItailona",
      name: "Velbett",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 14,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "ForItailona",
      name: "Sadaf",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 15,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "ForItailona",
      name: "Dekachento",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 16,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "AstarLooks",
      name: "Deka Primer",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 17,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "AstarLooks",
      name: "Deka lak",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 18,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "AstarLooks",
      name: "Deka lak Super",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 19,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "AstarLooks",
      name: "Deka color",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 20,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "AstarLooks",
      name: "Deka Star",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 21,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "ColorsItems",
      name: "Dekaort COloring system",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 22,
      discount: 50,
      cover: ImgOne,
      filter: "Emal",
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      name: "Emal dekoart",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 23,
      discount: 50,
      cover: ImgOne,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      filter: "Emal",
      name: "Parket Loki",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },

    {
      id: 24,
      discount: 50,
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      cover: ImgOne,
      name: "Moldings",
      filter: "Emal",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
    {
      id: 25,
      discount: 50,
      cover: ImgOne,
      filter: "Emal",
      videoUrl: "https://www.youtube.com/embed/Ax2JLLHkFnc",

      name: "ABlitsofka",
      desc: "DEKO`ART CREOS - Tashqi va ichki yuzalar uchun dekortiv qoplama Ta’rifi: Akrilik kopolimerlar...",
    },
  ]);
  return (
    <DetailsForDekoart.Provider value={[itemList, setItemList]}>
      {children}
    </DetailsForDekoart.Provider>
  );
};
