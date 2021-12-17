import { useCV } from "../../context/CvContext";
import { StyledHeader, 
        StyledLogo, 
        StyledButton, 
        StyledSpan,
        StyledNav,
        StyledUl,
        StyledAnchor } from "./Navbar.styles";

export const Navbar = () => {
    const data = useCV();

    const handleClick = () => {
        document.body.classList.toggle('nav-open');
    }

    return (
        <StyledHeader className="header">
            <StyledLogo className="logo">
                <img src={data.Info.logo} alt="" />
            </StyledLogo>
            <StyledButton onClick={handleClick} className="nav-toggle" aria-label="toggle navigation">
                <StyledSpan className="hamburger"></StyledSpan>
            </StyledButton>
            <StyledNav className="nav">
                <StyledUl className="nav__list">
                    <li className="nav__item"><StyledAnchor href="#home" className="nav__link" onClick={handleClick}>Home</StyledAnchor></li>
                    <li className="nav__item"><StyledAnchor href="#skills" className="nav__link" onClick={handleClick}>Skills</StyledAnchor></li>
                    <li className="nav__item"><StyledAnchor href="#about" className="nav__link" onClick={handleClick}>About me</StyledAnchor></li>
                    <li className="nav__item"><StyledAnchor href="#work" className="nav__link" onClick={handleClick}>My Work</StyledAnchor></li>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    )
}
