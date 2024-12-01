import './Myfooter.css'
import {Row , Col, Container} from 'react-bootstrap'
import { FaTelegramPlane ,FaFacebookF  } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

function Myfooter(){
    return(
        <Container fluid className='bg-secondary'> 
              <Row >
            <Col className='right'>
            <ul style={{fontFamily:'vazir , sansrif' ,color:'white' ,width:'200px'}} className='py-4'>
                <li className='py-2'><span><FaTelegramPlane size={25}/></span> تلگرام</li>
                <li className='py-2'><span><FaFacebookF size={25} /></span> فیسبوک</li>
                <li className='py-2'><span><TbWorld size={25} /></span> ساخت حساب</li>
                <li className='py-2'><span><FaWhatsapp size={25}/></span> واتسپ ما</li>
            </ul>
            </Col>
            <Col style={{textAlign:'end'}}>
            <h4>اکونت های بانکی</h4>
            </Col>
        </Row>
        </Container> 
    )
}
export default Myfooter;