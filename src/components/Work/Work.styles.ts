import styled from "styled-components";
import { variables } from "../../core-ui/variables.styles";

// my-work => section
export const StyledWorkSection = styled.section`
    background: ${variables.color.dark};
    color: ${variables.color.light};
    text-align: center; 
`
// section-title => h2

// p section__subtitle section__subtitle--work => p

// portfolio => div
export const StyledPortfolioDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1000px;
    margin: 0 auto;
`
// portfolio__item => a
export const StyledPortfolioItem = styled.a`
    background: ${variables.color.accent};
    overflow: hidden;
    &:focus {
        position: relative;
        z-index: 2;
        .portfolio__img{
            transform: scale(1.2);
            opacity: 0.75;
        }
    }
`
// portfolio__img = img
export const StyledPortfolioImg = styled.img`
    transition: 
    transform 750ms cubic-bezier(.5,0,.5,1),
    opacity 250ms linear;
    &:hover {
        transform: scale(1.2);
        opacity: 0.75;
    }
`