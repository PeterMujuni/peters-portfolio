import styled from "styled-components";
import { variables } from "../../core-ui/variables.styles";

// footer => footer
export const StyledFooter = styled.footer`
background: #111;
    color: ${variables.color.accent};
    text-align: center;
    padding: 2.5em 0;
    font-size: ${variables.fontSize.fsH3};

`
// footer__link => a
export const StyledFooterLink = styled.a`
    font-weight: ${variables.fontWeight.bold};
    &:hover {
        opacity: .7;
        text-decoration: underline;
    }
`
// social-list => ul
export const StyledSocialList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0 0;
    padding: 0;
`
// social-list__item => li
export const StyledSocialListItem = styled.li`
    margin: 0 .5em;
`
// social-list__link => a
export const StyledSocialListLink = styled.a`
    padding: .5em;
    &:hover {
        opacity: .7;
    }
`