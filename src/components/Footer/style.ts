import { styled } from 'styled-components';

export const FooterWrapper = styled.div`
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: all 300ms ease;
  
  & a {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    cursor: pointer;
  }
  
  & a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  & a:active {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  `
  

