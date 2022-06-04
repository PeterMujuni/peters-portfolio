import Button from "../Button/Button";
import Title from "../Title/Title";
import {GrLinkedin, 
        GrGithub, 
        GrFacebook, 
        GrInstagram, 
        GrTwitter,
        GrHtml5 } from 'react-icons/gr'
import './Main.css'


export const Main = () => {
  return (
    <main className="main">
      <Title />
      <section className="contact-buttons">
        <button className='button grey-bg' onClick={()=> window.location.href='https://github.com/PeterMujuni'}>
          
            <GrGithub />
            Github
          
        </button>
        <button className='button blue-bg' onClick={()=> window.location.href='https://www.linkedin.com/in/petermujuni/'}>
            
              <GrLinkedin />
              Linkedin
            
        </button>
      </section>
      <section id="about-section">
        <h2>About</h2>
        <p>Full stack Engineer, Peter Mujuni contributes to the improvement of web applications through accessibility, 
          newest trends and strong focus on high quality code. He reaches his results through planning, 
          documenting, implementing and executing.</p>
      </section>
      <section id="interests-section">
        <h2>Technologies</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap 5</li>
          <li>JavaScript ES7</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Java</li>
        </ul>
      </section>
      <section id="social-icons">
        <a href=""><GrGithub /></a>
        <a href=""><GrFacebook /></a>
        <a href=""><GrInstagram /></a>
        <a href=""><GrTwitter /></a>
      </section>
    </main>
  )
}