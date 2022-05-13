import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Clinica <br/> Santa Clara  </h1>
                    <img style={{ border: '12px solid transparent' }} src={require('../img/hospital-logo.png')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/quienes-somos' activeStyle>
                        Quienes somos
                    </NavLink>
                    <NavLink to='/nuestros-servicios' activeStyle>
                        Nuestros servicios
                    </NavLink>
                    <NavLink to='/testimonios' activeStyle>
                        Testimonios
                    </NavLink>
                    <NavLink to='/datos-de-contacto' activeStyle>
                        Contactanos
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Inicia sesión</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
