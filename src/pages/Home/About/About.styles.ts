import styled from "styled-components";
import { variables } from "../../../core-ui/variables.styles"

export const StyledAbout = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-areas:
          "title img"
          "subtitle img"
          "text img";
        column-gap: 2em;    
    }
`

export const StyledSectionTitle = styled.h2`
    @media (min-width: 600px){
        grid-area: title;
    }
`

export const StyledSubTitle = styled.p`
    @media (min-width: 600px){
        grid-column: 1 / -1;
        grid-row: 2;
        position: relative;
        left: -1em;
        width: calc(100% + 2em);
        padding-left: 1em;
        padding-right: calc(200px + 4em);
        /* grid-area: subtitle; */
    }
`

export const StyledAboutImage = styled.img`
    @media (min-width: 600px){        
        grid-area: 1 / -1;
        grid-column: 2;
        grid-area: img;
        position: relative;
        z-index: 2;
    }
`

export const StyledAboutBody = styled.div`
    @media (min-width: 600px){        
        grid-area: text;
    }
`