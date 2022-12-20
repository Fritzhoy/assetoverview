import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {dark} from './styles/Themes'
import Navigation from './components/navigation';
import FinancialMetrics from './components/sections/financialMetrics';
import Engagement from './components/sections/engagement';
import Token from './components/sections/token';
import TokenBreakdown from './components/sections/tokenBreakdown';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

function App() {
  

  const getInicialState = () => {
    const chain = "Arbitrum";
    return chain;
  }
  const [chain, setChain] = useState(getInicialState);

  const handleChange = (e) => {
    setChain(e.target.chain);
  };
  console.log(chain);

  return (
    <>
     <GlobalStyles/>
      <ThemeProvider theme={dark}>
      <Navigation/>
      {/* <FinancialMetrics/> */}
      <Engagement/>
      <Token/>
      <TokenBreakdown chain={chain}/>
      <ScrollToTop/>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
