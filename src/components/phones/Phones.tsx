import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "../../types";

const Phones = () => {
    const [phones, setPhones] = useState<Product[]>([])
   
    useEffect(() => {
        axios("https://dummyjson.com/products/category/smartphones")
        .then(res => setPhones(res.data.products))
    }, [])
 

  return (
    <>
      <div className="swiper_content">
        <h1 className="swiper_title">Get discount up to 40%</h1>
        <p className="swiper_text">You can pay month by month now</p>
        <Link to='/smartphones'><button className="swiper_btn">Shop Now</button></Link>
      </div>
      <div className="laptops">
       {phones.slice(3, 5).map(phone => 
        <div className="laptop" key={phone.id}>
        <Link to='/smartphones'><img src={phone.thumbnail} width={300}  alt="" /></Link>
        </div>
       )}
      </div>
    </>
  );
};

export default Phones;
