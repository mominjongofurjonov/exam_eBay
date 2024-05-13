import { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { Product } from '../../types';

const DailyProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
    } ,[])


  return (
    <>
    <div className='products__container' style={{marginBottom: '40px'}}>
    <h1 style={{marginTop: '40px'}} className='score_trends'>Today's Deals - All With Free Shipping See all<Link to={'/all-products'}>See all <FaArrowRight/></Link></h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 25,
            }
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay]}
          className="mySwiper"
        >
          {
            products.map(product => (
              <SwiperSlide key={product.id} className='products__slide'>
                <Link to={`/product/${product.id}`}><img src={product.images[2]} alt="" /></Link>
                <p>{product?.price}$ - 80%</p>

              </SwiperSlide>
            ))
          }
        </Swiper>
        
      </div>
    </>
  )
}

export default DailyProducts