import React from 'react';
import styled from 'styled-components';
import Iframe from '../iframe';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
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

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
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
  font-size: ${(props) => props.theme.fontml};
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin: 1rem auto;
  width: fit-content;
`

const FinancialMetrics = () => {
  return(
    <Section id="financialMetrics">
      <Title>Financial Metrics</Title>
      <Container>
      <Box>
      <SubTitle>Arbitrum - Weekly Volume</SubTitle>
      <Iframe link="https://dune.com/embeds/1824971/3002835/7baeb525-1f71-46db-8b2b-0a18045347f2" title="GMX Arbitrum - Volume"/>
      </Box>
      <Box>
      <SubTitle>Arbitrum - Total Value Locked</SubTitle>
      <Iframe link="https://dune.com/embeds/1825612/3003828/a11d66bf-7a24-409a-86fc-e80892b00e61" title="GMX - Fees"/>
      </Box>
      <Box>
      <SubTitle>Arbitrum - Supply-side Fees by Trade Type</SubTitle>
      <Iframe link="https://dune.com/embeds/1824971/3003365/dcbf4833-2336-4617-8331-23726f701259" title="GMX - Fees"/>
      </Box>
      <Box>
      <SubTitle>Median Trade Size</SubTitle>
      <Iframe link="https://dune.com/embeds/1825580/3003791/b02ad05b-e571-418f-a89b-bad4815e7428" title="Median Trade Size"/>
      </Box>
      </Container>
      {/* <Container>
      <Box>
      <SubTitle> Avalanche - Weekly Volume</SubTitle>
      <Iframe link="https://dune.com/embeds/1825316/3003702/7cbb7764-da5c-4f9f-be6f-604fcd2ff8a8" title="GMX Arbitrum - Volume"/>
      </Box>
      <Box>
      <SubTitle>Avalanche - Supply-side Fees by Trade Type</SubTitle>
      <Iframe link="https://dune.com/embeds/1825316/3003777/b5d65c5d-510c-4341-b020-a11954e502b7" title="GMX - Fees"/>
      </Box>
      </Container> */}
    </Section>
  )
}
export default FinancialMetrics
