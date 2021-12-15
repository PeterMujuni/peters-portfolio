import React from 'react';
import { GetIcons } from '../../../components/IconComponent/IconComponent';
import { StyledSkill,
        StyledIconSection,
        StyledProgress } from './Skills.styles'

type SkillProps = {
    data: {
        name: string,
        icon: string,
        progressValue: string,
        color: string
    }[]
}
export const Skill = ({data}: SkillProps) => {
    return (
        <>
            {data.map((item, index) => {
                
                return (                    
                    <StyledSkill key={index} className="skill">
                        <StyledIconSection className="icon-section"><GetIcons iconName={item.icon} style={item.color}/></StyledIconSection>
                        <StyledProgress max="100" value={item.progressValue}>95%</StyledProgress>
                    </StyledSkill>                     
                );
            })}
        </>
    )
}
