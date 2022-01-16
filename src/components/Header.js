import React from 'react'
import styled from "styled-components"
import { BsXLg } from "react-icons/bs";
import { useState } from 'react';

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

@media(max-width:1090px){
    display:none;

}
    a{
        font-weight:550;
        text-decoration: none;
        padding:5px 20px;
        flex-wrap: nowrap;
        font-size: 16px;
        transition: all .2s ease-in;


    }

    a:hover{
        background-color: rgba(87, 87, 87, 0.2);
        border-radius:30px;

    }

`

const RightMenu = styled.div`
                display:flex;
    p{
        font-weight:550;
        text-decoration: none;
        font-size: 15px;
        padding: 5px 20px;
        transition: all .2s ease-in;
        cursor:pointer;

    }
    p:hover{
        background-color: rgba(87, 87, 87, 0.2);
        border-radius:30px;

    }

    @media (max-width:600px){
        #hide-on-phone{
            display:none;
        }
        #mobile-menu{
            background-color: rgba(87, 87, 87, 0.2);
            border-radius:30px;

        }
    }

`
const MenuDropdown = styled.div`
transition: transform 0.4s;
position: fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style: none;
padding:10px;
padding-left:30px;
display:flex;
flex-direction:column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
overflow:scroll;


        a{
            text-decoration:none;
        }

li{
    padding:12px 0;

}
        a{
            padding:5px;
        }
        a:hover{
            background-color: rgba(87, 87, 87, 0.2);
            border-radius:30px;
        }
`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`


const CustomClose = styled(BsXLg)`
cursor: pointer;
margin:10px;
`
function Header() {


    const [MenuOpen,  setMenuOpen] = useState(false)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    const [Account,  setAccount] = useState(false)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    return ( 
        <Container>
            <a href='Home.js'>
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
                <p id='hide-on-phone'>Shop</p>
                <p onClick= {()=>setAccount(true)} id='hide-on-phone'>Account</p>
                
                <p onClick= {()=>setMenuOpen(true)} id='mobile-menu'>Menu</p>


                {/* old righn menu */}
                {/* <a href='#shop' id='hide-on-phone'>Shop</a>
                <a href='#shop' id='hide-on-phone'>Account</a>
                <a href='#' onClick= {()=>setMenuOpen(true)} id='mobile-menu'>Menu</a> */}
            </RightMenu>

            <MenuDropdown show={MenuOpen}>
                <CloseWrapper>
                    <CustomClose onClick= {()=>setMenuOpen(false)}/>
                </CloseWrapper>
                <li> <a href='h'>Existing Inventory</a> </li>
                <li> <a href='h'>Used Inventory</a> </li>
                <li> <a href='h'>Trade-In</a> </li>
                <li> <a href='h'>Test Drive</a> </li>
                <li> <a href='h'>Cybertruck</a> </li>
                <li> <a href='h'>Roadster</a> </li>
                <li> <a href='h'>Semi</a> </li>
                <li> <a href='h'>Chargin</a> </li>
                <li> <a href='h'>Powerwall</a> </li>
                <li> <a href='h'>Commercial Energy</a> </li>
                <li> <a href='h'>Utilities</a> </li>
                <li> <a href='h'>Model S</a> </li>
                <li> <a href='h'>Model X</a> </li>
                <li> <a href='h'>Model 3</a> </li>
                <li> <a href='h'>Model Y</a> </li>
                <li> <a href='h'>Find Us</a> </li>
                <li> <a href='h'>Support</a> </li>
                <li> <a href='h'>Inventory Relation</a> </li>

            </MenuDropdown>
        </Container>
    )
}

export default Header
