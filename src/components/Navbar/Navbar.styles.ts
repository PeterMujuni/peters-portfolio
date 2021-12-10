import styled from "styled-components";
import { variables } from "../../core-ui/variables.styles";


export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: ${variables.color.light};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0.5px 0.5px 7px grey;
`

export const StyledLogo = styled.div`
    max-width: 100px;
`
export const StyledButton = styled.button`
    padding: .5em;
    background: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 1em;
    z-index: 1000;
`

export const StyledSpan = styled.span`
    display: block;
    position: relative;
    background: ${variables.color.accent};
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
    &:before {
        background: ${variables.color.accent};
        width: 2em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
        top: 6px;
        content: "";
        position: absolute; 
        left: 0;
        right: 0;
    }
    &:after {
        background: ${variables.color.accent};
        width: 2em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
        bottom: 6px;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
    }
`

export const StyledNav = styled.nav`
    position: fixed;
    background: ${variables.color.dark};
    color: ${variables.color.light};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transform: translateX(100%);
    transition: transform 250ms cubic-bezier(.5,0,.5,1);
`

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const StyledAnchor = styled.a`
    color: inherit;
    font-weight: ${variables.fontWeight.bold};
    font-size: ${variables.fontSize.fsH2};
    text-decoration: none;
    &:hover {
        color: ${variables.color.accent};
    }
`