import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "../../types";

const MensWatches = () => {
    const [watches, setWatches] = useState<Product[]>([])
   
    useEffect(() => {
        axios("https://dummyjson.com/products/category/mens-watches")
        .then(res => setWatches(res.data.products))
    }, [])
 

  return (
    <>
      <div className="swiper_content">
        <h1 className="swiper_title">Now we have  new watches</h1>
        <p className="swiper_text">Up to 20% off from any ones</p>
        <Link to='/mens-watches'><button className="swiper_btn">Shop Now</button></Link>
      </div>
      <div className="laptops">
       {watches.slice(3, 5).map(watch => 
        <div className="laptop" key={watch.id}>
        <Link to='/mens-watches'><img src={watch.thumbnail} width={300}  alt="" /></Link>
        </div>
       )}
      </div>
    </>
  );
};

export default MensWatches;
