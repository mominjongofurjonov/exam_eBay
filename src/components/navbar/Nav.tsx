import { Link } from 'react-router-dom'
import './Nav.scss'
import { FaRegBell } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../assets/ebay_logo.png'
import ModalCategory from '../modalCategory/ModalCategory';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Nav = () => {

    const  navigate  = useNavigate();
    const [isModalActive, setisModalActive] = useState<boolean>(false);
    const [isModalActive2, setisModalActive2] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [category, setCategory] = useState<string[]>([]);
     useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(res => setCategory(res.data))
     })


    const handleSubmidSearch = (e: React.FormEvent) => {
       e.preventDefault();
       if(category.includes(inputValue)){
        navigate(`/${inputValue}`)
       }else{
        navigate(`/not-found`)
       }
    }

  return (
    <div>
      <div className="nav">
        <div className='inner_nav'>
          <ul className='left_ul'>
            <li>Hi! <Link to="/login" className='li_links'>Log in</Link> or <Link to="/register" className='li_links'>Register</Link></li>
            <li>Daily deals</li>
            <li>Help & Contact</li>
          </ul>
          <ul className='right_ul'>
            <li>Sell</li>
            <li className={`list__item ${isModalActive ? "item-active" : ""}`} onClick={() => setisModalActive(!isModalActive)}>Watchlist <FaChevronDown className='chevron_icon'/>
            {isModalActive && 
            <Modal  />}
            </li>
            <li className='modal_select'>
                <select className='select' style={{outline: 'none', border: 'none'}}>
                    <option value="">My eBay</option>
                    <option value="">Summary</option>
                    <option value="">Recently viewed</option>
                    <option value="">Bids/offers</option>
                    <option value="">Watchlist</option>
                    <option value="">Purchase History</option>
                    <option value="">Buy again</option>
                    <option value="">Selling</option>
                    <option value="">Saved searchs</option>
                    <option value="">Saved sellers</option>
                    <option value="">Messages</option>
                </select>
            </li>
            <li><FaRegBell className='icon_bell'/></li>
            <li><Link to="/cart"><PiShoppingCartBold className='icon_cart'/></Link></li>
          </ul>
          
        </div>
        <div className='line'></div>
        <div className='inner_nav2'>
        <img src={logo}  width={100} alt="" />
        <form className='nav_form' onSubmit={handleSubmidSearch}>
            <p className='shop_by'  onClick={() => setisModalActive2(!isModalActive2)}>Shop by category  <FaChevronDown className='chevron_icon'/> {isModalActive2 && <ModalCategory   setisModalActive2={setisModalActive2}/>}</p>
        <input className='nav_input' type="text"  placeholder='Search for anything' onChange={(e) => setInputValue(e.target.value)}/>
        <button className='search_icon'><IoSearchOutline /></button>
        <select className='select_2'>
            <option value="">Everything else</option>
            <option value="">All categories</option>
            <option value="">Antiques</option>
            <option value="">Art</option>
            <option value="">Baby</option>
            <option value="">Books</option>
            <option value="">Business & Industrial </option>
            <option value="">Cameras & photos </option>
            <option value="">Cell phones & Accessories </option>
            <option value="">Clothing shoes &  Accessories</option>
            <option value="">Collectibles </option>
            <option value="">Computers/Tablets & Networking </option>
            <option value="">Consumer Electronics</option>
            <option value="">Crafts </option>
            <option value="">Dolls & Bears </option>
            <option value="">DVD & Movies</option>
            <option value="">eBay Motors</option>
            <option value="">Entertainment  Memorabilia</option>
            <option value="">Gift cards & Coupons </option>
            <option value="">Healthy & Beauty </option>
        </select>
        <button className='search_btn'>Search</button>
        </form>
        <p className='advanced'>Advanced</p>
        </div>
        <div className='line'></div>
        <div className='container'>
                <ul className='categories'>
                    {category.map(category => <li key={category}><Link to={`/${category}`}>{category}</Link></li>)}
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Nav