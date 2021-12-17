import { useCV } from "../../context/CvContext"
import { SiLinkedin, SiGithub } from "react-icons/si";
import { StyledFooter,
         StyledFooterLink,
         StyledSocialList,
         StyledSocialListItem,
         StyledSocialListLink } from "./Footer.styles";

export const Footer = () => {
    const data = useCV();
    return (
        <StyledFooter className="footer">
            <StyledFooterLink href={`mailto:${data.Info.email}`} className="footer__link">kontakt@petermujuni.dk</StyledFooterLink>
            <StyledSocialList className="social-list">
                <StyledSocialListItem className="social-list__item">
                    <StyledSocialListLink href={data.Info.githubLink} className="social-list__link">
                        <SiGithub />
                    </StyledSocialListLink></StyledSocialListItem>
                <StyledSocialListItem className="social-list__item">
                    <StyledSocialListLink href={data.Info.linkedinLink} className="social-list__link">
                        <SiLinkedin />
                    </StyledSocialListLink>
                </StyledSocialListItem>
            </StyledSocialList>
        </StyledFooter>
    )
}


