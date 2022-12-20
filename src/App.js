import React, { useEffect} from 'react';
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
  
  return (
    <>
     <GlobalStyles/>
      <ThemeProvider theme={dark}>
      <Navigation/>
      {/* <FinancialMetrics/> */}
      <Engagement/>
      <Token/>
      <TokenBreakdown/>
      <ScrollToTop/>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
