import { Container ,Row ,Col } from 'react-bootstrap';
import Mynavbar from '../../components/my-navbar/My-navbar';
import Homeslider from '../../components/slider/Homeslider';
import Myfooter from '../../components/my-footer/Myfooter';
import Operators from '../../components/operators/Operators';
import afg from '../../assets/images/afg.png';
import mtn from '../../assets/images/mtn.png';
import salam from '../../assets/images/salam.png';
import roshan from '../../assets/images/roshan.png';
import etisalat from '../../assets/images/etisalate.png'

function Home(){
    return(
            <>
                <Mynavbar/>
                <Homeslider className='p-absolute' />
                <Container>
                <h1 className='my-5' style={{fontFamily:'lalezar'}}>شبکه های افغانستان</h1>

                    <Row className='py-4'>
                    <Col><Operators image={afg} /></Col>
                    <Col><Operators image={mtn} /></Col>
                    <Col><Operators image={salam} /></Col>
                    <Col><Operators image={roshan} /></Col>
                    <Col><Operators image={etisalat} /></Col>
                    </Row>
                <h1 className='my-5' style={{fontFamily:'lalezar'}}>شبکه های ترکیه</h1>
                <Row className='py-4'>
                    <Col><Operators image={afg} /></Col>
                    <Col><Operators image={mtn} /></Col>
                    <Col><Operators image={salam} /></Col>
                    <Col><Operators image={roshan} /></Col>
                    <Col><Operators image={etisalat} /></Col>
                    </Row>
                    <h1 className='my-5' style={{fontFamily:'lalezar'}}>شبکه های ایران</h1>
                <Row className='py-4'>
                    <Col><Operators image={afg} /></Col>
                    <Col><Operators image={mtn} /></Col>
                    <Col><Operators image={salam} /></Col>
                    <Col><Operators image={roshan} /></Col>
                    <Col><Operators image={etisalat} /></Col>
                    </Row>
                </Container>
                <Myfooter />

            </>
    )
}
export default Home;