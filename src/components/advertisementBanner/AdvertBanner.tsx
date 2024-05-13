import { MdArrowForward } from "react-icons/md"
import logo from '../../assets/ebay_logo.png'
import bannerimg from '../../assets/bannerimg.jpg'
import bannerimg2 from '../../assets/bannerimg2.png'
import './advert.scss'
import { Link } from "react-router-dom"

const AdvertBanner = () => {
  return (
    <div className='advert_banner'>
     <div className='advert'>
        <div className='advert_texts'>
        <p className="advert_title">Featured</p>
                <img src={logo} width={100} height={40} alt="" />
                <h2 className="advert_bold_text">Deals made easy all year long.</h2>
                <b className="advert_p_text">Free shipping. Best prices.</b>
                <Link className="advert_link" to="/all-products"><button className="advert_button">Shop now <MdArrowForward className="arrow_icon" /></button></Link>
        </div>
            <img className="advert_img" src={bannerimg} alt="" />
            <img  className="advert_img2" src={bannerimg2} alt="" />
     </div>
    </div>
  )
}

export default AdvertBanner