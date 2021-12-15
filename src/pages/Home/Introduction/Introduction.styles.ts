import styled from "styled-components";
import { variables } from "../../../core-ui/variables.styles";

export const StyledIntro = styled.section`
    position: relative;
    text-align: center;
    margin-top: 4em;

    @media (min-width: 600px) {
        display: grid;
        width: min-content;
        margin: 0 auto;
        column-gap: 1em;
        grid-template-areas: 
            "img title"
            "img subtitle";
        grid-template-columns: min-content max-content;
        text-align: left;
    }
`

export const StyledSectionTitle = styled.h1`    
    @media (min-width: 600px){
        align-self: flex-end;
    }
`
export const StyledSubTitle = styled.p`
    text-transform: uppercase;

    @media (min-width: 600px){
        grid-column: -1 / 1;
        grid-row: 2;
        text-align: right;
        position: relative;
        left: -1em;
        width: calc(100% + 1.0em);
    }
`
export const StyledImage = styled.img`
    box-shadow: ${variables.boxShadow.bsOne};
    box-shadow: ${variables.boxShadow.bsTwo};

    @media (min-width: 600px){
        grid-area: img;
        min-width: 250px;
        position: relative;
        z-index: 2;
    }
`