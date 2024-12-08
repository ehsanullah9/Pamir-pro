import './My-navbar.css'
import {Button, Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink , Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'


function Mynavbar(){
    const expand = 'md';
    return(
        <>
         <Navbar expand={expand} className='nav-link bg-light'>
          <Container >
          <Link to='/' className='nav-link'>
          <Navbar.Brand style={{fontFamily:'lalezar',color:'green'}}>
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
                <Offcanvas.Title style={{fontFamily:'lalezar',color:'green'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                <span><img src={logo} className='log-img ' /></span>
                   پامیر تلکام
                </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1"  style={{fontFamily:'lalezar',fontSize:'22px'}}>
                  <NavLink to='/' className='nav-link text-4'>صفحه اصلی</NavLink>
                  <NavLink to='/services' className='nav-link '>خدمات ما </NavLink>
                  <NavLink to='/about' className='nav-link'>درباره ما</NavLink>
                </Nav>
              </Offcanvas.Body>
          
          </Navbar.Offcanvas>

            <a href='intro02.webp' download="intro02.webp" className='btn btn-outline-success' style={{fontFamily:'lalezar'  }}>دانلود اپلکیشن موبایل</a>
          </Container>

        </Navbar>
        </>

    )
}
export default Mynavbar;