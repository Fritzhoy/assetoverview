import React from 'react';
import styled from 'styled-components';

const Up = styled.div`
width:3rem;
height:3rem;
box-sizing: border-box;
margin: auto;
padding: 0;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
font-size: ${props => props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: all 0.2s
&:hover{
  transform: scale(1.2);
}
&:active{
  transform: scale(0.9);
}

`

const ScrollToTop = () => {

  const scrollToTop = () => {

    let element = document.getElementById("nav");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"

    })
  }
  return(
    <Up onClick = {() => scrollToTop()}>
      &#x2191;
    </Up>
  )
}

export default ScrollToTop