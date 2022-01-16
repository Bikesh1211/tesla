import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'


const Wrap = styled.div `

h1{
    font-size:50px;
    font-family: serif;
    font-weight:500;
    margin-bottom:10px;
}
a{
    color: rgb(58, 58, 10);

}
width: 100vw;
height: 100vh;
background-image:url('/images/model-s.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div `
padding-top: 15vh;
text-align:center;

`

const ButtonGroup = styled.div `
display:flex;
margin-bottom: 10px;
@media (max-width:768px){
    flex-direction: column;
    margin:10px;
}

`
const LetfBtn = styled.div `
background-color: rgb(40, 41, 40);
height:40px;
width:280px;
color:white;
display:flex;
justify-content: center;
align-items:center;
border-radius: 100px;
opacity: 0.8;
cursor:pointer;
margin:8px
text-transform: uppercase;
@media (max-width:768px){
    width:90vw;
}



`

const RightBtn = styled(LetfBtn)
`
background-color:white;
color:black;
opacity:0.8;
margin-left:20px;
@media (max-width:768px){
    margin-top:10px;
    margin-left:0;

}

`

const DownArrow = styled.img `
margin-top: 10px;
height: 40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
display:flex;
justify-content:center;
margin-bottom:50px;
`

const DownArrowContainer = styled.div`
display:flex;
justify-content:center;
`

const Button = styled.div`
`

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
    return ( 
        <Wrap bgImage={backgroundImg}>
            <Fade Top>

        <ItemText >
        <h1>{title}</h1> 
        <p>{description}</p>
        </ItemText>
            </Fade>


        <Button >
        <Fade Top>
        <ButtonGroup>
        <LetfBtn >
        {leftBtnText}
        </LetfBtn> 
        { rightBtnText &&

            <RightBtn >
                {rightBtnText}
            </RightBtn> 
            }

        </ButtonGroup>
        </Fade>
        <DownArrowContainer>

        <DownArrow src = "images/down-arrow.svg" / >
        </DownArrowContainer>


        </Button> </Wrap>
    )
}

export default Section