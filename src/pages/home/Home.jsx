import { Container } from 'react-bootstrap';
import Mynavbar from '../../components/my-navbar/My-navbar';
import mainimg from '../../assets/images/intro02.webp'
import './Home.css'
import HeroSection from '../../components/heroSection/HeroSection';
function Home(){
    return(
            <>
                <Mynavbar/>
                <Container fluid>
                    <HeroSection />
                </Container>
            </>
    )
}
export default Home;