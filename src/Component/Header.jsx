import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";
import styled from "styled-components"

const Header = () => {
    return (
        <MainHeader>
            <NavLink to= "/">
           <div>Header</div>
           </NavLink>
             <Navbar />
        </MainHeader>
    )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 3rem;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header


