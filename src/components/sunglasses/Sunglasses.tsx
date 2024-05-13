import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "../../types";

const Sunglasses = () => {
    const [sunglassess, setSunglassess] = useState<Product[]>([])
   
    useEffect(() => {
        axios("https://dummyjson.com/products/category/sunglasses")
        .then(res => setSunglassess(res.data.products))
    }, [])
 

  return (
    <>
      <div className="swiper_content">
        <h1 className="swiper_title">eBay represents you  sunglasses</h1>
        <p className="swiper_text">Get  ready for hot summer days with eBay</p>
        <Link to='/sunglasses'><button className="swiper_btn">Shop Now</button></Link>
      </div>
      <div className="laptops">
       {sunglassess.slice(3, 5).map(glasses => 
        <div className="laptop" key={glasses.id}>
        <Link to='/sunglasses'><img src={glasses.thumbnail} width={300}  alt="" /></Link>
        </div>
       )}
      </div>
    </>
  );
};

export default Sunglasses;
