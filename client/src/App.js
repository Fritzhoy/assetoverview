import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {dark} from './styles/Themes'
import Navigation from './components/Navigation';
import FinancialMetrics from './components/sections/financialMetrics';
import Engagement from './components/sections/engagement';
import Token from './components/sections/token';
import TokenBreakdown from './components/sections/tokenBreakdown';
import Footer from './components/Footer';


function App() {

  const getInicialState = () => {
    const chain = "Arbitrum";
    return chain;
  }
  const [chain, setChain] = useState(getInicialState);

  const handleChange = (e) => {
    setChain(e.target.chain);
  };

  return (
    <>
     <GlobalStyles/>
      <ThemeProvider theme={dark}>
      <Navigation chain={chain} onChange={handleChange}/>
      <FinancialMetrics/>
      <Engagement/>
      <Token/>
      <TokenBreakdown chain={chain}/>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
