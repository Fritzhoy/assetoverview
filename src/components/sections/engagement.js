import React from 'react'
import styled from 'styled-components'
import Iframe from '../iframe';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  background-color: ${props => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
const Container = styled.div`
width: 90%;
min-height: 80vh;
margin: 0 auto;
display: grid;
grid-template-rows: auto;
grid-template-columns: 1fr;
background-color: ${props => props.theme.body};
grid-gap: 20px;
border-bottom: 2px solid ${(props) => props.theme.text};
`
const Box = styled.div`
width: 100%;
height: 100%;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.body};
`

const Engagement = (chain) => {
  return(
    <Section id="engagement">
      <Title>Engagement</Title>
      <Container>
        <Box>
         <Iframe link="https://dune.com/embeds/1656158/2745467/c43c274f-fab7-4c42-936e-dadc5dbf7388" title="Total Nº Unique Traders over time"/>
         </Box>
         <Box>
         <Iframe link="https://dune.com/embeds/1656158/2745504/2f8c0d08-774b-4642-b159-7656d0ca1e43" title="Weekly New Traders"/>
        </Box>
        </Container>
        <SubTitle>Daily GMX Token Holders</SubTitle>
        <Box>
        <Iframe link="https://dune.com/embeds/1781172/2935109/a823f1a0-b403-47dd-af08-7a7e1a404ee0" title="GMX Token Holders"/> 
        </Box>
      </Section>
  )
}
export default Engagement
