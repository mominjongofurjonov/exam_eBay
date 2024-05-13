import  { useState, useEffect } from 'react'
import  axios from 'axios'
import { useParams } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch } from 'react-redux'
import { addItem, plusLike } from '../../redux/mainSlice'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Product } from '../../types';


const SinglePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [products, setProducts] = useState<Product>({ id: 0, title: '', description: '', price: 0, discountPercentage: 0, rating: 0, stock: 0, brand: '', category: '', thumbnail: '', images: [] })
    const {id} = useParams();

    const dispatch = useDispatch();
    const addToCart = (product : Product) => {
        product.count = 1
        dispatch(addItem(product))
      }
    
      const handleLikeProduct = (product : Product) => {
        dispatch(plusLike(product))
      }

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`)
        .then(res => setProducts(res.data))
    }, [])

    console.log(products)


  return (
    <>
       <div className='single_page_wrapper'>
        <h1 className='single_page_extra'>EXTRA <span>10%</span> OFF 3+ ITEMS WITH CODE <span>10OFF2023TECH</span></h1>
    <div className='single_page_container'>
    <div className='swiper_controller'>
     <Swiper 
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper_wrapper"
      >
        {
            products?.images?.map(img => <SwiperSlide key={img}><img src={img} alt="" /></SwiperSlide>)
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper_wrapper2"
      >
        {
            products?.images?.map(img => <SwiperSlide className='swiper_slide1' key={img}><img src={img} alt="" /></SwiperSlide>)
        }
        
      </Swiper>
     </div>
    <div className='single_page_content'>
    <h1 className='single_page_product_title'><span>name:</span> {products?.title}</h1>
     <p className='single_page_product_category'><span>category: </span> {products?.category}</p>
     <p className='single_page_product_brand'><span>brand: </span>{products?.brand}</p>
     <p className='single_page_product_rating'><span>rating: </span> {products?.rating}</p>
     <p className='single_page_product_description'><span>description: </span> {products?.description}</p>
     <p className='single_page_product_price'><b>price: </b> {products?.price}$ <span>{products?.discountPercentage}% off</span></p>
     <div className='single_page_buttons'>
     <button className='add_to_wishlist' onClick={() => handleLikeProduct(products)}> <span>add to watchlist</span> <FaRegHeart/></button>
     <button className='add_to_wishlist' onClick={() => addToCart(products)}> <span>add to cart</span> <MdOutlineLocalGroceryStore/></button>
     </div>
    </div>
     
    </div>
     
       
       </div>
    </>
  )
}

export default SinglePage