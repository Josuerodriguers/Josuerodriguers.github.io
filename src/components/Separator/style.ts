import styled, { keyframes } from 'styled-components';

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SeparatorWrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-left: 4px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 2px 20px ${({ theme }) => theme.colors.secondary}28;
  color: ${({ theme }) => theme.colors.gray100};
  min-width: 370px;
  width: 100%;
  transition: all 300ms ease;
  animation: ${slideFromLeft} 0.5s ease;

  & h1 {
    margin-left: 24px;
    line-height: 80px;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
`
