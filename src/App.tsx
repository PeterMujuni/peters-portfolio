import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatedLogo, GlobalStyle } from './core-ui/global.styles';
import { variables } from './core-ui/variables.styles';
import { CvProvider } from './context/CvContext';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import logo from './logo.svg'

import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <CvProvider>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        <div className="App">
          <Navbar />
          <Home />
          <Footer />
          {/* <AnimatedLogo src={logo} className='logo'/> */}
        </div>
      </ThemeProvider>
    </CvProvider>
  );
}

export default App;
