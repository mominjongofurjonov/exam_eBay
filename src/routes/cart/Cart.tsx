import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { deleteItem, plusLike } from '../../redux/mainSlice';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa6';
import { Product, State } from '../../types';


const Cart = () => {

  const dispatch = useDispatch();
  const likedata = useSelector(( state: State) => state.actions.stored);

  const removeFromCart = (product: Product) => {
    dispatch(deleteItem(product))
  }

  const handleLikeProduct = (id: Product) => {
    dispatch(plusLike(id))
  }


  return (
    <div>
      <h1 className="page_title"><i>{likedata.length}   items in your cart</i></h1>
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
            <button className='add_to_wishlist' onClick={() => handleLikeProduct(product)}> <span>add to  watchlist</span> <FaHeart /></button>
            <button className='add_to_wishlist' onClick={() => removeFromCart(product)}> <span>remove from cart</span> <MdOutlineLocalGroceryStore /></button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Cart