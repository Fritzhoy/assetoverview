import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Iframe from '../iframe';
import Dropdown from '../dropdown'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`
const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin: 1rem auto;
  width: fit-content;
`
const Container = styled.div`
width: 90%;
min-height: 80vh;
margin: 0 auto;
display: grid;
border-bottom: 2px solid ${(props) => props.theme.text};
grid-template-rows: auto;
grid-template-columns: 1fr;
grid-gap: 20px;
padding-top: 40px;
`

const Box = styled.div`
width: 100%;
height: 100%;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
`
const DropdownItem = styled.div`
margin: 0 1rem;
width: fit-content; 
font-size: ${(props) => props.theme.fontml};
color: ${props => props.theme.text};

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
}
&:hover::after{
  width: 50%; 
}
`

const TokenBreakdown = () => {
  
  let chains = ["Arbitrum", "Avalanche"];

  const [selectedChain, setSelectedChain] = useState("Arbitrum");


  const handleValueChange = (e) => {
    setSelectedChain(e.target.value);
  };

    useEffect = (() => {
      return console.log(setSelectedChain);;
     
    }, [selectedChain]);

  return (
    <Section id="tokenbreakdown">
      <Title>Token Breakdown</Title>
      <SubTitle>Swaps</SubTitle>
      {/* <DropdownItem><Dropdown values={chains} onChange={handleValueChange}/>
      </DropdownItem> */}
    <Container>
    <Box>
      <Iframe link="https://dune.com/embeds/1681834/2782691/34876269-4256-419c-92a7-c65bb114ecc1" title="[FEE] Swaps by Token"/>
    <Iframe link="https://dune.com/embeds/1681834/2782560/f4391bff-b657-4520-8cf7-925967c6d5cb" title="Swaps Volume by Tokens"/></Box>
    <Box><Iframe link="https://dune.com/embeds/1681834/2782561/07631e09-9966-4c4a-894c-a8a943a5d3c6" title="[FEE] Swaps FEE by Token"/></Box>
    </Container>
    <SubTitle>Margin Trade</SubTitle>
    <Container>
    <Box>
    <Iframe link="https://dune.com/embeds/1681840/2782575/131bec55-fb87-4eb5-843b-dc38c997d7cd" title="Margin Trading"/>
    <Iframe link="https://dune.com/embeds/1681840/2782574/579ec09b-2b2a-4072-9646-a30f3bb9eef1" title="Margin Trading FEEs by Tokens"/>
    </Box>
    <Box> <Iframe link="https://dune.com/embeds/1681840/2782575/318288bb-2853-4474-8bde-f7ea9fedf412" title="Margin Trading Volume by Tokens"/></Box>
    </Container>
    </Section>
  )}
export default TokenBreakdown
