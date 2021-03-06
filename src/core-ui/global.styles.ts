import styled, { createGlobalStyle, keyframes } from "styled-components"
import { variables } from "./variables.styles"


export const GlobalStyle = createGlobalStyle`
  // reset
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // General styles
  html{
    scroll-behavior: smooth;
  }

  body {
    background: ${variables.color.light};
    color: ${variables.color.dark};
    margin: 0;
    font-family: ${variables.fontFamily.sans};
    font-size: ${variables.fontSize.fsBody};
    line-height: 1.6;
  }

  img {
    display: block;
    max-width: 100%;
  }

  section {
    padding: 5em 2em;
  }

  :focus {
    outline: 3px solid ${variables.color.accent};
    outline-offset: 3px;
  }

  .btn {
      display: inline-block;
      padding: .5em 2.5em;
      background: ${variables.color.accent};
      color: ${variables.color.light};
      text-decoration: none;
      cursor: pointer;
      font-size: .8em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: ${variables.fontWeight.bold};
      transition: transform 200ms ease-in-out;
  }

  .btn:hover {
      transform: scale(1.1);
  }

  strong { font-weight: ${variables.fontWeight.bold};}

  /* :focus {
    outline: 3px solid var(--clr-accent);
    outline-offset: 3px;
  } */

  // Typography

  h1 {
      font-size: ${variables.fontSizeMobile.fsH1}
  }
  h2 {
    font-size: ${variables.fontSizeMobile.fsH2}
  }
  h3 {
    font-size: ${variables.fontSizeMobile.fsH3}
  }
  h4 {
    font-size: ${variables.fontSizeMobile.fsH4}
  }

  @media (min-width: 800px) {
    h1 {
      font-size: ${variables.fontSize.fsH1}
    }
    h2 {
      font-size: ${variables.fontSize.fsH2}
    }
    h3 {
      font-size: ${variables.fontSize.fsH3}
    }
    h4 {
      font-size: ${variables.fontSize.fsH4}
    }
  }

  .nav-open .nav {
    transform: translateX(0);
  }

  .nav-open .nav-toggle {
      position: fixed;
  }

  .nav-open .hamburger {
      transform: rotate(.625turn);
  }

  .nav-open .hamburger::before {
      transform: rotate(90deg) translateX(-6px);
  }

  .nav-open .hamburger::after {
      opacity: 0;
  }

  /* .section__title {
    margin-bottom: .25em;
  } */

  .section__title--intro {
      font-weight: ${variables.fontWeight.reg};
  }

  .section__title--intro strong {
      display: block;
  }

  .section__subtitle {
      /* margin: 0; */
      font-size: ${variables.fontSize.fsH3};
  }

  .section__subtitle--work {
      color: ${variables.color.accent};
      font-weight: ${variables.fontWeight.bold};
      margin-bottom: 2em;
  }
  
  .footer a {
    color: inherit;
    text-decoration: none;
  }
`

const rotate = keyframes`
  from {
    tranform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`