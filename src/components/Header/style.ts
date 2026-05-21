import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  font-size: 18px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  height: 64px;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary}CC;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}33;
  z-index: 10;
  transition: background-color 300ms ease, border-color 300ms ease;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const MenuWrapper = styled.nav`
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  @media screen and (max-width: 768px) {
    display: none;
  }

  & ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 28px;
    pointer-events: auto;
  }

  & a {
    text-decoration: none;
    opacity: 0.75;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    position: relative;
    transition: opacity 200ms ease;

    &::after {
      content: "";
      height: 2px;
      background: linear-gradient(90deg, #7C3AED, #A78BFA);
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0%;
      border-radius: 2px;
      transition: all 250ms ease;
    }

    &:hover {
      opacity: 1;
      &::after {
        width: 100%;
        left: 0%;
      }
    }
  }
`

export const BrandWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`

export const LogoMark = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #7C3AED, #A78BFA);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.45);
  user-select: none;
`

export const BrandName = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.01em;

  @media (max-width: 400px) {
    display: none;
  }
`

export const ToggleThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary}22;
  border: 1px solid ${({ theme }) => theme.colors.secondary}55;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  transition: background-color 200ms ease, border-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}44;
    border-color: ${({ theme }) => theme.colors.secondary}99;
  }
`
