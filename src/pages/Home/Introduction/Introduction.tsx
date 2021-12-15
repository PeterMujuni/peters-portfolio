import { useCV } from "../../../context/CvContext"
import { StyledIntro,
        StyledSectionTitle,
        StyledImage,
        StyledSubTitle } from "./Introduction.styles";

export const Introduction = () => {
    const data = useCV();
    return (
        <StyledIntro className="intro" id="home">
            <StyledSectionTitle className="section__title section__title--intro">
                Hi, I am <strong>{data.personligInfo.name}</strong>
            </StyledSectionTitle>
            <StyledSubTitle className="section__subtitle section__subtitle--intro">front-end developer</StyledSubTitle>
            <StyledImage src={data.personligInfo.image} alt="peter mujuni" className="intro__img" />
        </StyledIntro>
    )
}
