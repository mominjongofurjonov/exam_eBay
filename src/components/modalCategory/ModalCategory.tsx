import { Link } from 'react-router-dom'
import './ModalCategory.scss'   
import { MdChevronRight } from "react-icons/md";

const ModalCategory = ({
    setisModalActive2,
  }: {
    setisModalActive2: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
  return (
    <div>
        <div className='category_modal' onClick={() => setisModalActive2(false)}>
        <ul className='modal_ul'>
            <li><Link to='/smartphones'>Smartphones</Link></li>
            <li><Link to='/laptops'>Laptops</Link></li>
            <li><Link to='/fragrances'>Fragrances</Link></li>
            <li><Link to='/skincare'>Skincare</Link></li>
            <li><Link to='/groceries'>Grocries</Link></li>
        </ul>
        <ul className='modal_ul'>
           <li><Link to='/furniture'>Furniture</Link></li>
            <li><Link to='/tops'>Tops</Link></li>
            <li><Link to='/home-decoration'>Home-decoration</Link></li>
            <li><Link to='/womens-dress'>Women's-dress</Link></li>
            <li><Link to='/womens-shoes'>Women's-shoes</Link></li>
        </ul>
        <ul className='modal_ul'>
            <li><Link to='/mens-shirts'>Men's-shirts</Link></li>
            <li><Link to='/mens-shoes'>Men's-shoes</Link></li>
            <li><Link to='/mens-watches'>Men's-watches</Link></li>
            <li><Link to='/womens-watches'>Woman's-watches</Link></li>
            <li><Link to='/womens-bags'>Woman's-bags</Link></li>
        </ul>
        <ul className='modal_ul'>
            <li><Link to='/womens-jewellery'>Woman's-jewellery</Link></li>
            <li><Link to='/sunglasses'>Sunglasses</Link></li>
            <li><Link to='/automotive'>Automotive</Link></li>
            <li><Link to='/motorcycle'>Motorcycle</Link></li>
            <li><Link to='/lighting'>Lighting</Link></li>
        </ul>
        <Link className='view_all' to='/all-products'>View all categories <MdChevronRight /></Link>
        </div>
    </div>
  )
}

export default ModalCategory