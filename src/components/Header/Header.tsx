import { useContext } from 'react';
import ThemeContext from '../../context/context-theme';
import { Moon, SunDim } from '@phosphor-icons/react';
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import { 
  HeaderWrapper, 
  MenuWrapper,
  ToggleThemeButton,
   } from './style';

function Header() {
  const { theme, updateTheme } = useContext(ThemeContext)
  return (
    <HeaderWrapper>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <div>
        <ToggleThemeButton
          onClick={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {
            (theme === 'dark') 
            ? <SunDim size={24} color="#f5f0f0" weight="fill" />
            : <Moon size={24} color="#fff" weight="fill" />
          }
        </ToggleThemeButton>

        <MenuHamburguer />
        
        <MenuWrapper>
          <ul>
            <li>
              <a href="#">Home</a>  
            </li>
            <li>
              <a href="#front-end">Front-End</a> 
            </li>
            <li>
              <a href="#">Back-End</a>  
            </li>
            <li>
              <a href="#projetos">Projetos</a>  
            </li>
          </ul>
        </MenuWrapper>
      </div>
  </HeaderWrapper>
  )
}

export default Header