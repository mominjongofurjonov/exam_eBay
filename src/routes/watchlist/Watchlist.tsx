import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addItem, deleteLike } from '../../redux/mainSlice';
import { FaHeartBroken } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Watchlist.scss'
import { Product } from '../../types';
import { State } from '../../types';


const Watchlist = () => {

  const dispatch = useDispatch();
  const likedata = useSelector((state: State) => state.actions.likes);

  const addToCart = (product: Product) => {
    dispatch(addItem(product))
  }

  const handleDislikeProduct = (product: Product) => {
    dispatch(deleteLike(product))
  }


  return (
    <div>
      <h1 className="page_title"><i>{likedata.length}   items in your watchlist</i></h1>
      <div className="all_cards_wrapper">
        {likedata.length === 0 ?
       <div className='start_shopping_btn_wrapper'> <Link to='/all-products'><button className='start_shopping'> Start shopping now</button></Link></div> 
        :
        likedata.map((product: Product) => (
          <div key={product.id} className='product_cart_wrapper'>
            <Link to={`/product/${product.id}`}><img src={product.thumbnail} alt="" /></Link>
            <h2 className='pr_title'>{product.title}</h2>
            <p className='description'>{product.description}</p>
            <p className='price'>${product.price} <span> 30% off</span></p>
            <button className='add_to_wishlist' onClick={() => handleDislikeProduct(product)}> <span>remove from watchlist</span> <FaHeartBroken /></button>
            <button className='add_to_wishlist' onClick={() => addToCart(product)}> <span>add to cart</span> <MdOutlineLocalGroceryStore /></button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Watchlist