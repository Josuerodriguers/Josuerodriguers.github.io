import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AboutWrapper, ImgProfile, AboutText, SocialMedia } from './style'

function About() {
  return (
      <AboutWrapper>
        <ImgProfile> 
          <img src="https://github.com/josuerodriguers.png" alt=""/>
        </ImgProfile>    
        <AboutText >
          <h1>Olá. </h1>
          <h2>Me chamo Josue Azevedo</h2>
          <p>Full Stack Deveveloper</p>
          <p>
            Sou um desenvolvedor Web FullStack,
            Buscando pela primeira oportunidade de mostras minhas habilidades e conhecimentos como desenvolvedor.
          </p>
          <SocialMedia>
            <a href="https://github.com/josuerodriguers" target="_blank">
              <GithubLogo size={28} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/josuerodriguers/" target="_blank">
              <LinkedinLogo size={28} weight="fill" />
            </a>
          </SocialMedia>
        </AboutText>
      </AboutWrapper>
  )
}

export default About