import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation' 
import 'swiper/css/pagination' 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/images/slider1.png'
import slide2 from '../../assets/images/slider2.png'
import slide3 from '../../assets/images/slider3.png'
import slide4 from '../../assets/images/slider4.png'

function Homeslider(){
 
    return(
      
     <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper p-relative"
      >
       
        <SwiperSlide ><img src={slide1}    style={{height:'40%', width:'100%'}}   className='img-fluid' /></SwiperSlide>
          <SwiperSlide><img src={slide2}    style={{height:'40%', width:'100%'}} className='img-fluid' /></SwiperSlide>
          <SwiperSlide><img src={slide3}   style={{height:'40%', width:'100%'}}  className='img-fluid' /></SwiperSlide>
          <SwiperSlide><img src={slide4}  style={{height:'40%', width:'100%'}}   className='img-fluid' /></SwiperSlide>
        <SwiperSlide ><img src={slide1}    style={{height:'40%', width:'100%'}}   className='img-fluid' /></SwiperSlide>   
        </Swiper>
      );
}
export default Homeslider;