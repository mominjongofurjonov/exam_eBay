import './Header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Styles.scss';
import { Scrollbar } from 'swiper/modules';
import Laptops from '../laptops/Laptops';
import Phones from '../phones/Phones';
import Sunglasses from '../sunglasses/Sunglasses';
import MensWatches from '../mensWatches/MensWatches';

const Header = () => {

 

  return (
    <>
         
            <div className='swiper_container'>
            <Swiper scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper">
                <SwiperSlide>
                 <Laptops/>
                </SwiperSlide>
                <SwiperSlide><Phones/></SwiperSlide>
                <SwiperSlide><Sunglasses/></SwiperSlide>
                <SwiperSlide><MensWatches/></SwiperSlide>
           </Swiper>
            </div>
    </>
  )
}

export default Header