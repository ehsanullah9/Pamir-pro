import './My-navbar.css'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Mynavbar(){
    const expand = 'md';
    return(
        <>
         <Navbar expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Link to='/' className='nav-link'>
          <Navbar.Brand style={{fontFamily:'lalezar',color:'blue'}}>پامیر تلکام </Navbar.Brand>
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
                  پامیر تلکام
                </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3" style={{fontFamily:'lalezar'}}>
                  <Link to='/' className='nav-link'>صفحه اصلی</Link>
                  <Link to='/services' className='nav-link'>خدمات </Link>
                  <Link to='/about' className='nav-link'>درباره ما</Link>
                  <Link className='nav-link'>ورود</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>

    )
}
export default Mynavbar;