import { useCV } from "../../../context/CvContext"
import './About.styles'
import { StyledAbout, 
         StyledSectionTitle,
         StyledSubTitle,
         StyledAboutImage,
         StyledAboutBody } from "./About.styles"

export const About = () => {
    const data = useCV();
    return (
        <StyledAbout className="about-me" id="about">
            <StyledSectionTitle className="section__title section__title--about">Who I am</StyledSectionTitle>
            <StyledSubTitle className="section__subtitle section__subtitle--about">Frontend Engineer based in Denmark</StyledSubTitle>
            <StyledAboutBody className="about-me__body">
                {data.about.resume.map((line, index) => (<p key={index}>{line}</p>))}                
            </StyledAboutBody>
            <StyledAboutImage src={data.about.image} alt="peter mujuni" className="about-me__img" />
            {/* <button className="btn cv-btn">See CV</button> */}
        </StyledAbout>
    )
}
