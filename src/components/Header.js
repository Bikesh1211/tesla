import React from 'react'
import styled from "styled-components"

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
        </Container>
    )
}

export default Header
