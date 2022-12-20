import React from 'react'
import styled from 'styled-components'
import Iframe from './iframe';

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
const Container = styled.div`
width: 90%;
min-height: 80vh;
margin: 0 auto;
display: grid;
grid-template-rows: auto;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
border-bottom: 2px solid ${(props) => props.theme.text};
padding-top: 40px;
`
const Box = styled.div`
width: 100%;
height: 100%;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Engagement = (chain) => {
  return(
    <Section>
      <Title>Engagement</Title>
      <Container>
        <Box>
         <Iframe link="https://dune.com/embeds/1656158/2745467/c43c274f-fab7-4c42-936e-dadc5dbf7388" title="Total Nº Unique Traders over time"/>
         </Box>
         <Box>
         <Iframe link="https://dune.com/embeds/1656158/2745504/2f8c0d08-774b-4642-b159-7656d0ca1e43" title="Weekly New Traders"/>
        </Box>
        </Container>
        <SubTitle>GMX Token Holders</SubTitle>
        <Container>
        <Iframe link="https://dune.com/embeds/1688118/2791835/a9832bf2-1dba-4327-aa94-5dc1b0995aa8" title="GMX Token Holders"/> 
        </Container>
      </Section>
  )
}
export default Engagement
