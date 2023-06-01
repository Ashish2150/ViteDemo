import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

    const Nav = styled.nav`
        .navbar-list {
            display: flex;
            gap: 1.4rem;
        }
        li{
            list-style: none;
            .navbar-link {
                &:link,
                &:visited {
                    display: inline-block;
                    color : ${({theme}) => theme.colors.black};
                }
                &:hover,
                &:active {
                    color: ${({theme})=> theme.colors.helper};
                }
            }
        }
        a{
            text-decoration: none
        }
    `

    return( 
    <Nav>
        <div className= "menuIcon">
        <ul className="navbar-list">
            <li>
                <NavLink to="/" className = "navbar-link">Home </NavLink>
            </li>
            <li>
                <NavLink to="/about" className = "navbar-link">About </NavLink>
            </li>
            <li>
                <NavLink to="/service" className = "navbar-link">Services </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className = "navbar-link">Contact </NavLink>

            </li>
        </ul>
        </div>
    </Nav>
    )
}

export default NavBar