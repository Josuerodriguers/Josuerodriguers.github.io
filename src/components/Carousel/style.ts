import { styled } from 'styled-components';


export const CarouselWrapper = styled.div`
  width: fit-content;
  min-width: 270px;
  position: relative;
  margin: 29px auto;

  & button {
    position: absolute;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.arrowBackground};
    border: none;
    cursor: pointer;
    transition: transform 200ms ease, opacity 200ms ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.85;
    }
  }

  & button:nth-of-type(1) {
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
  }

  & button:nth-of-type(2) {
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
  }

  @media (max-width: 699px) {
    width: 270px;
    & ul { width: 270px; }
  }

  @media (min-width: 700px) {
    width: 570px;
    & ul { width: 570px; }
  }

  @media (min-width: 1000px) {
    width: 860px;
    & ul { width: 860px; }
  }

  @media (min-width: 1300px) {
    width: 1140px;
    & ul { width: 1140px; }
  }
`;

export const CarouselContainer = styled.ul`
  display: flex;
  overflow: auto;
  min-width: 270px;
  align-items: center;
  scroll-behavior: smooth;
  padding: 1.5rem 1rem;
  position: relative;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.li`
  position: relative;
  padding: 14px;
  height: 420px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor}33;
  flex: none;
  cursor: pointer;
  transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.07);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(124, 58, 237, 0.22);
    border-color: ${({ theme }) => theme.colors.borderColor}88;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & h3 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  & p {
    margin-bottom: 1rem;
    width: 251px;
    line-height: 1.6;
    font-size: 0.75rem;
    text-align: justify;
    color: ${({ theme }) => theme.colors.primaryText};
    opacity: 0.8;
  }
`;

export const ArrowsWrapper = styled.div`
  text-align: center;
`

export const ImgContainer = styled.div`
  width: 250px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.75rem;
  height: 130px;

  &:before {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    content: '';
    background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%);
    z-index: 1;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  gap: 0.35rem;

  & span {
    padding: 0.25rem 0.6rem;
    background-color: ${({ theme }) => theme.colors.borderColor}18;
    border: 1px solid ${({ theme }) => theme.colors.borderColor}55;
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: 0.68rem;
    font-weight: 500;
    border-radius: 20px;
    letter-spacing: 0.02em;
    transition: background-color 200ms ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.borderColor}30;
    }
  }
`
