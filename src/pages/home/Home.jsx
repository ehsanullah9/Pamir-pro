import { Container } from 'react-bootstrap';
import Mynavbar from '../../components/my-navbar/My-navbar';
import mainimg from '../../assets/images/intro02.webp'
import './Home.css'
import Homeslider from '../../components/slider/Homeslider';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Myfooter from '../../components/my-footer/Myfooter';
import Partaner from '../../components/partaner/Partaner';

function Home(){
    return(
            <>
                <Mynavbar/>
                <Homeslider className='p-absolute' />
                <Partaner />
                <Myfooter />

            </>
    )
}
export default Home;