import axios from 'axios'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AllProducts.scss'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { addItem, plusLike } from '../../redux/mainSlice'
import { Product } from '../../types';

const AllProducts = () => {
    const dispatch = useDispatch();
    const addToCart = (product : Product) => {
        product.count = 1
        dispatch(addItem(product))
      }
    
      const handleLikeProduct = (product : Product) => {
        dispatch(plusLike(product))
      }

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        axios("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
    }, [])


  return (
    <div>
        <h1 className='all_products_title'>All categories and products</h1>
        <div className='all_products_wrapper'>
        {products.slice(0, 28).map(product => (
        <div key={product.id} className='product_cart_wrapper'>
            <Link to={`/product/${product.id}`}><img src={product.thumbnail} alt="" /></Link>
            <h2 className='pr_title'>{product.title}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'>${product.price} <span> 30% off</span></p>
            <button className='add_to_wishlist' onClick={() => handleLikeProduct(product)}> <span>add to watchlist</span> <FaRegHeart/></button>
            <button className='add_to_wishlist' onClick={() => addToCart(product)}> <span>add to cart</span> <MdOutlineLocalGroceryStore/></button>
        </div>
       ))}
        </div>
    </div>
  )
}

export default AllProducts