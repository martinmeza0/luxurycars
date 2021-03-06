import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
  
const Menu = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <header>
                <Nav>
                    <NavButton onClick={() => setOpenNav(!openNav)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </NavButton>
                    <Navbar display={openNav ? 'flex' : 'none'} transition={openNav ? '20px' : '-500px'}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">Support</NavLink>
                        </li>
                    </Navbar>
                </Nav>
            </header>
        </>
    )
}

//Styles
const Nav = styled.nav`
    background-color: #191C24;
    @media (max-width: 768px) {
        padding: 25px 0;
    }
`
const Navbar = styled.ul`
        text-align: right;
        margin-right: 10vw;
        & > li {
        display: inline-block;
        }
        @media (max-width: 768px) {
            background: #191C24;
            position: absolute;
            top: ${props => props.transition};
            display: ${props => props.display};
            margin-top: 24px;
            flex-direction: column;
            width: 100%;
            transition: top .3s ease-in-out;
            & > li {
                text-align: center;
                border-bottom: 1px solid #ccc;
            }
        }
`
const NavLink = styled(Link)` 
    display: inline-block;
    padding: 10px 20px;
    line-height: 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    &:hover {
        color: #A81010;
        transition: color .2s ease-in-out;
    }
    @media (max-width: 768px) {
        padding: 10px 0;
        width: 100%;
    }
`
const NavButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    float: right;
    top: 1rem;
    right: 2rem;
    width: 30px;
    height: 21px;
    display: none;
    flex-direction: column;
    justify-content: space-between;

    & > .bar {
        height: 3px;
        width: 100%;
        background: #ffffff;
        border-radius: 10px;
    }
    &:focus {
        height: 24px;
        transition: height .3s ease;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`
export default Menu
