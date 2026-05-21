import { useContext } from 'react';
import ThemeContext from '../../context/context-theme';
import { Moon, SunDim } from '@phosphor-icons/react';
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import {
  HeaderWrapper,
  BrandWrapper,
  LogoMark,
  MenuWrapper,
  ToggleThemeButton,
} from './style';

function Header() {
  const { theme, updateTheme } = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <BrandWrapper href="#">
        <LogoMark>J</LogoMark>
      </BrandWrapper>

      <div>
        <ToggleThemeButton
          onClick={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {
            (theme === 'dark')
            ? <SunDim size={20} color="#f5f0f0" weight="fill" />
            : <Moon size={20} color="#fff" weight="fill" />
          }
        </ToggleThemeButton>

        <MenuHamburguer />

        <MenuWrapper>
          <ul>
            <li><a href="#">Home</a></li>
            {/* <li><a href="#experiencia">Experiência</a></li> */}
            <li><a href="#front-end">Front-End</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  )
}

export default Header
