import { useEffect, useState } from 'react'
import './ProductsCarousel.scss'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { Product } from '../../types';

const ProductsCarousel = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        axios("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
    } ,[])


  return (
    <>
    <div className='products__container' style={{marginTop: '40px'}}>
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
                <Link to={`/product/${product.id}`}><img src={product.images[3]} alt="" /></Link>
                <p>{product.title}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <h1 className='score_trends'>Score these trending kicks <Link to={'/all-products'}>See all <FaArrowRight/></Link></h1>
      </div>
    </>
  )
}

export default ProductsCarousel