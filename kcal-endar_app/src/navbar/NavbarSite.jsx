import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbarStyle-style.css'
import logo from '../-assets/logo/Logo.name.png';
import '../-common/colors.css';
import '../-common/font.css';
import avatar from '../-assets/icons/user-avatar-blue.svg';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

export function NavbarSite() {

    const [navCollapse, setNavCollapse] = useState(false);

    const isVisible = useMediaQuery({ query: '(max-width: 1279px)' });

    useEffect(() => {
        setNavCollapse(isVisible);
    }, [isVisible])

    return (
        <Navbar bsPrefix='navbar' expand="lg" id='navbar-style' fixed="top">
            <Container id='navbar-container'>
                <Navbar.Brand href="#home" id='navbar-brand-logo'>
                    <img src={logo} alt='KCALendar' id='navbar-logo' />
                </Navbar.Brand>
                <Navbar.Brand id='navbar-brand-visible'>
                    <Nav.Link href="#chi-siamo" className='navbar-link'>Chi siamo</Nav.Link>
                    <Nav.Link href="#come-funziona" className='navbar-link'>Come funziona</Nav.Link>
                    <Nav.Link href="#professionisti" className='navbar-link'>I nostri professionisti</Nav.Link>
                    <Nav.Link href="#ricette" className='navbar-link'>Ricette</Nav.Link>
                </Navbar.Brand>
                {navCollapse &&
                    <Navbar.Collapse id="navbar-collapse">
                        <Nav>
                            <Nav.Link href="#chi-siamo" className='navbar-link'>Chi siamo</Nav.Link>
                            <Nav.Link href="#come-funziona" className='navbar-link'>Come funziona</Nav.Link>
                            <Nav.Link href="#professionisti" className='navbar-link'>I nostri professionisti</Nav.Link>
                            <Nav.Link href="#ricette" className='navbar-link'>Ricette</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>}
                <Navbar.Brand id='navbar-brand-avatar'>
                    <Nav.Link href="#profile">
                        <img src={avatar} width="40" height="40" />
                    </Nav.Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}