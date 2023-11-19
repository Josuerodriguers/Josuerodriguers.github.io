import Skill from '../Skill/Skill'
import { SkillsWrapper } from './style'


function SkillsSections() {
  return (
    <SkillsWrapper>
      <article>
        <Skill title='HTML & CSS'> 
        Mergulho na arte da criação web através da combinação de HTML semântico e CSS estruturado. Minha abordagem não se limita a funcionalidade, mas se estende à entrega de experiências excepcionais aos usuários.
        </Skill>
        <Skill title='Javascript' >  
        Minhas habilidades em JavaScript transcendem a mera escrita de código. Possuo um profundo entendimento da lógica de programação, JavaScript assíncrono, programação funcional, manipulação do DOM e gestão de eventos.
        </Skill> 
        <Skill title='React'>
        Domino o React, uma biblioteca crucial para o desenvolvimento de interfaces modernas. Minha experiência abrange desde a criação de componentes funcionais e de classe até o gerenciamento de estado, o uso de diversos hooks nativos e a criação de hooks personalizados.
        </Skill>
        <Skill title='Styled-components, CSS-Modules'>
        Minhas habilidades de estilização são fundamentais, destacando-me na criação de estilos robustos e dinâmicos. Utilizo técnicas avançadas, como CSS Modules e Styled-components, para proporcionar uma experiência visual única.
        </Skill>
        <Skill title='Jest, React Testing Library'>
        Considero essencial a implementação de testes usando Jest e React Testing Library. Essas ferramentas poderosas garantem robustez e confiabilidade, assegurando que o código funcione consistentemente em todas as situações.
        </Skill>
      </article>

      
    </SkillsWrapper>


    
  )
}

export default SkillsSections