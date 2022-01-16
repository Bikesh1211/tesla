import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width:100vw;
display:flex;
justify-content:center;
`

const FooterContainer = styled.div`
display:flex;
        li{
            list-style:none;
            font-size:14px;
            margin:10px;
            text-align:center;
        }
        @media(max-width:600px){
            display:block;
            li{
                margin-top:0;

            }
            
        }
`


export const Footer = () => {
    return (
        <Container>
            <FooterContainer>

        <li>Tesla &copy; 2022</li>
        <li>Privacy & Legal</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Engage</li>
        <li>Locations</li>
            </FooterContainer>
        
            
        </Container>
    )
}
