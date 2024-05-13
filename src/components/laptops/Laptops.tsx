import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Laptops.scss'
import { Product } from "../../types";

const Laptops = () => {
    const [laptops, setLaptops] = useState<Product[]>([])
   
    useEffect(() => {
        axios("https://dummyjson.com/products/category/Laptops")
        .then(res => setLaptops(res.data.products))
    }, [])
 

  return (
    <>
      <div className="swiper_content">
        <h1 className="swiper_title">Super offers at the categories</h1>
        <p className="swiper_text">Up to 60% off the brands you love.</p>
        <Link to='/laptops'><button className="swiper_btn">Shop Now</button></Link>
      </div>
      <div className="laptops">
       {laptops.slice(0, 2).map(laptop => 
        <div className="laptop" key={laptop.id}>
        <Link to='/laptops'><img src={laptop.thumbnail}  width={300}  alt="" /></Link>
        </div>
       )}
      </div>
    </>
  );
};

export default Laptops;
