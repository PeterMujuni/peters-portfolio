import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './core-ui/global.styles';
import { variables } from './core-ui/variables.styles';
import { CvProvider } from './context/CvContext';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <CvProvider>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        <div className="App">
          <Navbar />
        </div>
      </ThemeProvider>
    </CvProvider>
  );
}

export default App;
