import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import './css/reset.css'
import axios from 'axios';
//https://desipossa.github.io/shop_cra/assets/data.json

const App = () => {
const [itm,setItm] = useState()
  useEffect(() => { 
    const url ='https://desipossa.github.io/shop_cra/assets/data.json'
    const getProduct = async () => {
      const res = await axios.get(url)
      console.log(res.data)
      const shopdata = res.data.slice(50, 140).map(it => {
        return {
          id:it.id,
          name: it.name,
          src: it.image_link,
          brnad: it.brand,
          cate: it.category,
          price: it.price * 1450,
          des: it.description,
          color: it.product_colors,
          time: it.created_at,
          type:it.product_type,
          
        }
      })
      setItm(shopdata);
      console.log(shopdata);
    }
    getProduct();
  },[])
  return (
      <>
        <Header />
        {
        itm ?
          <div>
            {
              itm.map((it, idx) => {
                return (
                  <ul key={it.id}>
                    {/* <li>{it.id}</li> */}
                    <li style={{ fontSize:'100px'}}>{idx}</li>
                    <li>{it.name}</li>
                    <li>{it.des}</li>
                    <li>{it.price.toLocaleString()} 원</li>
                    <li>{it.time} 에 올림</li>
                    <li>
                      <img src={it.src} alt="" />
                    </li>
                  </ul>
                )
              })
            }
          </div>
          : <div>로딩중입니다.</div>
      }       


          <Main />
          <Footer />
      </>
  )
}

export default App