import React from 'react'
import styled from "styled-components"
import { BsXLg } from "react-icons/bs";

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
align-items:center;
justify-content: space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;

`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex: 1;

@media(max-width:780px){
    display:none;

}
    a{
        font-weight:550;
        text-decoration: none;
        padding:0 20px;
        flex-wrap: nowrap;
        font-size: 15px;
    }
`

const RightMenu = styled.div`
    a{
        font-weight:550;
        text-decoration: none;
        margin-right: 20px;
        font-size: 15px;
    }
`
const MenuDropdown = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style: none;
padding:20px;
display:flex;
flex-direction:column;
text-align: start;


        a{
            text-decoration:none;
        }

li{
    padding:15px 0;
    // border-bottom: 1px solid rgba(0,0,0, .2)
}
        a{
            font-weight:550;
        }
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
function Header() {
    return ( 
        <Container>
            <a href='#Tesla'>
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                <a href='#link'>Model S</a>
                <a href='#link'>Model 3</a>
                <a href='#link'>Model X</a>
                <a href='#link'>Model Y</a>
                <a href='#link'>Solar Roof</a>
                <a href='#link'>Solar Panels</a>

            </Menu>
            <RightMenu>
                <a href='#shop'>Shop</a>
                <a href='#shop'>Account</a>
                <a href='#shop'>Menu</a>
            </RightMenu>

            <MenuDropdown>
                <CloseWrapper>
                <BsXLg/>
                </CloseWrapper>
                <li> <a href='h'>Existing Inventory</a> </li>
                <li> <a href='h'>Used Inventory</a> </li>
                <li> <a href='h'>Cybertruck</a> </li>
                <li> <a href='h'>Model S</a> </li>
                <li> <a href='h'>Model X</a> </li>
                <li> <a href='h'>MOdel 3</a> </li>
                <li> <a href='h'>MOdel Y</a> </li>

            </MenuDropdown>
        </Container>
    )
}

export default Header
