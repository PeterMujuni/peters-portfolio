import styled from "styled-components";
import { variables } from "../../core-ui/variables.styles";
import bgImage from '../../../assets/images/services-bg.png'

// my-skills
export const StyledMySkills = styled.section`
    background: #303030;
    background-image: url(${bgImage});
    background-size: cover;
    background-blend-mode: multiply;
    color: ${variables.color.light};
    text-align: center;
`

// section__title--skills
export const StyledSectionTitle = styled.h2`
    color: ${variables.color.accent};
    position: relative;
    &::after {
        content: '';
        display: block;
        width: 2em;
        height: 1px;
        margin: 0.5em auto 1em;
        background: ${variables.color.light};
        opacity: 0.5;
    }
`

//skills
export const StyledDivSkills = styled.div`
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 800px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 1140px) {           
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: nowrap;
    

    /* .skill + .skill {
        margin-left: 2em;
    } */
    }
`

//skills-group
export const StyledSkillsGroup = styled.article`
    width: 100%;
    margin: 0 auto 2em;
    padding: 0 15px;
    @media (min-width: 800px) {
        &:last-child: margin: 0 auto;
    }
    @media (max-width: 1059px) and (min-width: 800px) {
    &:nth-child(2) {
        order: 1;
    }
    @media (max-width: 1140px) and (min-width: 800px) {
        width: 33%;
    }
}
`

export const StyledSubTitles = styled.h3`
    margin-bottom: 1.5em;
`

// skill
export const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    gap: 10px;
    justify-content: space-between;
`


export const StyledIconSection = styled.span`
    display: flex;
`

export const StyledProgress = styled.progress`
    display: inline-block;
    width: 100%;
    height: 10px;
    &[value] {
        /* Reset the default appearance */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        /* Get rid of default border in Firefox. */
        border: none;

        width: 100%;
        height: 10px;

        @media (max-width: 430px) {
            
            
            
        }
        @media (max-width: 383px) {
            
            
              
        }
    }
    &[value]::-webkit-progress-bar {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
        background-color: ${variables.color.light};
        border-radius: 2px;
    }
    &[value]::-webkit-progress-value {
    background-color: ${variables.color.accent};
    border-radius: 2px;  
    }
`