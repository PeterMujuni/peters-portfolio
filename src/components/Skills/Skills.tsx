import {StyledMySkills,
        StyledSectionTitle,
        StyledDivSkills,
        StyledSkillsGroup,
        StyledSubTitles} from './Skills.styles'
import { useCV } from '../../context/CvContext'
import { Skill } from './Skill'

export const Skills = () => {
    const data = useCV()

    

    return (
        <StyledMySkills className="my-skills" id="skills">
            <StyledSectionTitle className="section__title section__title--skills">Skills</StyledSectionTitle>
                               
            <StyledDivSkills className="skills">

                <StyledSkillsGroup className="skills-group">
                    <StyledSubTitles>Front-end</StyledSubTitles>
                        <Skill data={data.frontendskills} />
                </StyledSkillsGroup>  

                <StyledSkillsGroup className="skills-group">
                    <StyledSubTitles>Back-end</StyledSubTitles>
                    <Skill data={data.backendskills} />
                </StyledSkillsGroup>  

                <StyledSkillsGroup className="skills-group">
                    <StyledSubTitles>Other</StyledSubTitles>
                    <Skill data={data.otherskills} />
                </StyledSkillsGroup>  
                
            </StyledDivSkills>
            <a href="#work" className="btn">My Work</a>
        </StyledMySkills>
    )
}
