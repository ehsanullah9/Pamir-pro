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
import plogo from '../../assets/images/logo.png'

function Home(){
    return(
            <>
                <Mynavbar/>
                <Homeslider className='p-absolute' />
                <Container>
            <Row className='align-items-center'>
                <Col lg={7} md={12}>
                <h1 style={{fontFamily:'lalezar' ,marginBottom:'30px'}}> پامیر تلکام</h1>
                <h4 style={{fontFamily:'lalezar' ,marginBottom:'20px' }}> خدمات تاپ اپ کردت کارت و سوشیال میدیا</h4>
                <p style={{textAlign:'justify'}}>ما اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد که
                </p>
                </Col>
                <Col lg={5} md={12}>
                    <img src={plogo} className='img-fluid'/>
                </Col>
            </Row>

                <h1 className='' style={{fontFamily:'lalezar'}}>شبکه های افغانستان</h1>

                    <Row className='py-4 my-5'>
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