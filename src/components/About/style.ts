import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  margin-bottom: 40px;
  gap: 48px;
  animation: ${fadeIn} 0.8s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 16px;
    gap: 32px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ImgProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  height: 320px;

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 280px;
    height: 280px;
    background: linear-gradient(-45deg, #A78BFA 0%, #7C3AED 50%, #4F46E5 100%);
    z-index: 0;
    transform: scale(1.05);
    filter: blur(28px);
    opacity: 0.6;
    animation-name: rotate1;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotate1 {
    0%   { transform: scale(1.05) rotate(0deg);   opacity: 0.6; }
    50%  { transform: scale(1.12) rotate(180deg); opacity: 0.4; }
    100% { transform: scale(1.05) rotate(360deg); opacity: 0.6; }
  }

  & img {
    position: relative;
    z-index: 1;
    object-fit: cover;
    height: 270px;
    width: 270px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.secondary}66;
  }

  @media (max-width: 768px) {
    min-width: 240px;
    height: 240px;

    &::before {
      width: 210px;
      height: 210px;
    }

    & img {
      height: 200px;
      width: 200px;
    }
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  & h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.1;
    background: linear-gradient(135deg, #A78BFA, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  & p:nth-of-type(1) {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  & p:nth-of-type(2) {
    line-height: 1.7;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryText};
    opacity: 0.85;
    max-width: 520px;
  }

  @media (min-width: 769px) {
    max-width: 580px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 4px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary}18;
    border: 1px solid ${({ theme }) => theme.colors.secondary}44;
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    cursor: pointer;
    transition: background-color 200ms ease, border-color 200ms ease, transform 200ms ease;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.colors.secondary}35;
    border-color: ${({ theme }) => theme.colors.secondary}99;
    transform: translateY(-2px);
  }

  & a:active {
    transform: translateY(0);
  }
`
