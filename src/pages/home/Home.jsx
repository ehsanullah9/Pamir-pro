import { Container } from 'react-bootstrap';
import Mynavbar from '../../components/my-navbar/My-navbar';
import mainimg from '../../assets/images/intro02.webp'
import './Home.css'
import HeroSection from '../../components/heroSection/HeroSection';
import Homeslider from '../../components/slider/Homeslider';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Myfooter from '../../components/my-footer/Myfooter';

function Home(){
    return(
            <>
                <Mynavbar/>
                <Homeslider />
                <Myfooter />

            </>
    )
}
export default Home;