import React from 'react'
import styled from 'styled-components'
import Iframe from '../iframe';
const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`
const Container = styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
 font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`
const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontml};
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin: 1rem auto;
  width: fit-content;
`


const Token = () => {
  return (
    <Section id="token">
      <Title>Token</Title>
      <SubTitle>GMX Token Market Cap</SubTitle>
      <Container>
      <Iframe link="https://dune.com/embeds/1780972/2934777/a1a00159-2ee8-4f24-a8d8-571f642540f6" title="GMX Weekly Market Cap"/>
    </Container>
    <Container>
    <Box> <SubTitle>GMX Total Circulating Supply</SubTitle>
      <Iframe link="https://dune.com/embeds/1780972/2935362/51bf4c04-6709-4669-a99b-2276ab1bb3d5" title="Total Circulating Supply"/>
      </Box>
      <Box> <SubTitle>24h GMX Price Change</SubTitle>
      <Iframe link="https://dune.com/embeds/1780972/2934776/d269447d-b8f7-4031-9446-9ae20dfa0c01" title="GMX Price Change"/>
      </Box> 
    </Container>
    </Section>
  )
}
export default Token
