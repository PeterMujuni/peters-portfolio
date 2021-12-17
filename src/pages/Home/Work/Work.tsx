import { useCV } from "../../../context/CvContext"
import { StyledWorkSection,
         StyledPortfolioDiv,
         StyledPortfolioItem,
         StyledPortfolioImg } from "./Work.styles";

export const Work = () => {
    const data = useCV();

    return (
        <StyledWorkSection className="my-work" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <StyledPortfolioDiv className="portfolio">
                {data.projects.map((project, index) => {
                    return (
                        <StyledPortfolioItem key={index} href={project.link} className="portfolio__item">
                            <StyledPortfolioImg src={project.imageUrl} alt="" className="portfolio__img" />
                        </StyledPortfolioItem>
                    )
                })}
                
            </StyledPortfolioDiv>
        </StyledWorkSection>
    )
}
