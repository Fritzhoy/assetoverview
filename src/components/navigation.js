import React from 'react'
import styled from 'styled-components'
import Logo from './logo'


const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`
const MenuItem = styled.li `
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};  
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%; 
}
`

const Navigation = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"

    })
  }
  return (
   <Section id="nav">
    <NavBar>
      <Logo/>
      <Menu>
        <MenuItem onClick={() => scrollTo("financialMetrics")}>Financial Metrics</MenuItem>
        <MenuItem onClick={() => scrollTo("engagement")}>Engagement</MenuItem>
        <MenuItem onClick={() => scrollTo("token")}>Token</MenuItem>
        <MenuItem onClick={() => scrollTo("tokenbreakdown")}>Token Breakdown</MenuItem>
      </Menu>
    </NavBar>
   </Section>
  )
}
export default Navigation
