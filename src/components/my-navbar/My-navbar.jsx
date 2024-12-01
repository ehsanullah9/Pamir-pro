import './My-navbar.css'
import {Button, Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'


function Mynavbar(){
    const expand = 'md';
    return(
        <>
         <Navbar expand={expand} className='nav-link bg-success'>
          <Container >
          <Link to='/' >
          <Navbar.Brand style={{fontFamily:'lalezar',color:'blue'}}>
          <span><img src={logo} className='log-img m-3' /></span>
          پامیر تلکام
          </Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Link to='/' className='nav-link'>
                <Offcanvas.Title style={{fontFamily:'lalezar',color:'blue'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                <span><img src={logo} className='log-img m-3' /></span>
                   پامیر تلکام
                </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1"  style={{fontFamily:'lalezar',fontSize:'18px'}}>
                  <Link to='/' className='nav-link text-4 '>صفحه اصلی</Link>
                  <Link to='/services' className='nav-link '>خدمات ما </Link>
                  <Link to='/about' className='nav-link '>درباره ما</Link>
                  <Link className='nav-link '>ورود</Link>
                </Nav>
              </Offcanvas.Body>
          
          </Navbar.Offcanvas>

          <Link to='https://seller.pamirtelecom.net/login' className='nav-link'>
            <button className='btn btn-outline-primary' style={{fontFamily:'lalezar'  }}>ساخت حساب کاربری</button>
          </Link>
          </Container>

        </Navbar>
        </>

    )
}
export default Mynavbar;