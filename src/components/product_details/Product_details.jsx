import React from 'react'
import './style.css'
import Related from './Related'

const Product_details = () => {
    const Pdata = [
        {
          cateImg: "./images/flash/flash-1.jpg",
          cateName: "Kapital Universal",
        }
    ]


  return (
    <>
        {Pdata.map((value,index) => {
            return(
                <>
                {/* <div className='p-title'>
                    <div className='p-rgba'><h1>{value.cateName}</h1></div>
                </div> */}
                <div className='container-related'>
                   
                    <div className='prow f_flex'>
                        <div className='img-box'>
                            <img src={value.cateImg} alt="" />
                            <div className='image-container'>
                                <div className='image'><img src="https://www.oboilux.ru/upload/decoratives/oikos/ottocento/ottocento%208_new_42.jpg" alt="" /></div>
                                <div className='image'><img src="https://avatars.mds.yandex.net/i?id=547f3c37220e51bb953248d859fbb1e1_l-5869038-images-thumbs&n=13" alt="" /></div>
                                <div className='image'><img src="http://riminidecor.ru/img/dizsten/Ottocento1.jpg" alt="" /></div>
                                <div className='image'><img src="https://oikos-artplay.ru/wp-content/uploads/2020/06/ot1.jpeg" alt="" /></div>
                            </div>
                        </div>
                        <div className='product-text'>
                            {/* <h1>{value.cateName}</h1> */}
                            <p><span>Ta’rifi:</span>Akrilik kopolimerlar asosli ishlatishga tayyor dekorativ qoplama.</p>
                            <p><span>Xarakteristikasi:</span> Surilganida, travertin tabiiy tosh qoplamasiga, ko’rinish xususiyatlari bo’yicha juda o’xshash fakturalar chiqarish mumkin. Uzoq muddatga chidaydigan tashqi va ichki yuzalar qoplamasi.</p>
                            <p><span>Ishlatilish joylari:</span> Binolarning tashqi va ichki devor yuzalarining pardozi. Sement suvoq qilingan yuzalarga, beton, gips, taxta ustiga yaxshi suriladi.</p>
                            <p><span>Yuzaylarning tayyorlanishi:</span> Yog’li dog’lar, kir va begona jismlar uzoqlashtiriladi. Shishib chiqqan, do’ppaygan va boshqa noteks yuza qismlari tekislanadi. Yoriqlar va teshiklar to’ldiriladi. Yuza tayyorlangandan so’ng DEKOPRIMER bo’yoq astar suriladi.</p>
                            <p><span>Ishlatilishi:</span> Yuzaga, astar bo’yoq surilgandan kamida 12 soatdan keyin po’lat andava bilan suriladi.  Birinchi bo’lib devorga 1,5-2 mm qalinlikda tekis suriladi va qattiq shyotka yoki mos uskuna yordamida chuqurchalar xosil qilinadi, bir oz qattiqlashgandan keyin po’lat andava bilan silliqlanadi. Suvoq yetarlicha qurigandan keyin chizg’ich bilan terilgan tosh shakli berish uchun chiziladi. TRAVERTIN to’liq qurishi 24 soat.</p>
                            <p><span>So’ngi pardozlash:</span> Shakl berilgan yuza to’liq qurigandan keyin yuzaga valik bilan DEKOLAK (yoki boshqa shaffof akril lok) 1:5 nisbatta suv bilan aralashtirilib suriladi. Yuza to’liq qurigach DEKOCOLOR bo’yog’i surilib qurimasidan yuzadagi ortiqcha suyuqlik namlangan gubka, yoki birorbir yomshoq yuzali material bilan olib tashlanadi. Bo’yoq tabaqasi to’liq qurigandan keyin DEKOLAK  (yoki boshqa shaffof akril lok) 1:3 nisbatda suv bilan aralashtirilib maklovitsa bilan bo’shliq qoldirmasdan suriladi.</p>
                            <p><span>Sarfiyat:</span> 1.6-1.8 kg - 1 м2 .</p>
                            <p><span>Qadoqlanishi:</span> 25 kg plastik idishlarda.</p>
                            <p><span>Saqlanish muddati:</span> Xona xaroratida, yopiq idishda - 1 yil. </p>
                        </div>
                    </div>

                    <input type="text"/>

                    <Related/>

                </div>

                </>
            )
        })}
    </>
  )
}

export default Product_details