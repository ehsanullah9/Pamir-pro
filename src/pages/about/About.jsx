import { Container , Col ,Row} from 'react-bootstrap';
import Mynavbar from '../../components/my-navbar/My-navbar';
import './About.css'
import Myfooter from '../../components/my-footer/Myfooter';
import about from '../../assets/images/about.jpg'
function About(){
    return(
        <>
        <Mynavbar />
        <Container className='border  my-5'>
            <Row className='p-2'>
                <Col lg={6} md={12}>
                <h1 style={{fontFamily:'lalezar' ,marginBottom:'30px'}}>درباره ما</h1>
                <p style={{textAlign:'justify'}}>ما اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد کها اریه دهند حدمات کردت کارت الکترونیکی  بسته های انترنتی یو سی های پابجی در عصره وفت استیم حدمات ما شامل شرکت های مخابرانی
                افغانستان ترکیه ایران میباشد که
                </p>
                </Col>
                <Col lg={6} md={12}>
                    <img  className='mg-fluid'/>
                </Col>
            </Row>

        </Container>
        <Myfooter/>
        
        </>
    )
}
export default About;