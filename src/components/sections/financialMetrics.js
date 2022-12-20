import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: yellow;
`

const FinancialMetrics = () => {
  return(
    <Section id="financialMetrics">
      <Container>
        <Box></Box>
      </Container>
    </Section>
  )
}
export default FinancialMetrics
