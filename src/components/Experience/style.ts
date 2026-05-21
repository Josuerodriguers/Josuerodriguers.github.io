import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

export const ExperienceSection = styled.section`
  max-width: 860px;
  margin: 40px auto;
  padding: 0 24px;
  animation: ${fadeUp} 0.6s ease;
`;

export const ExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor}33;
  border-left: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.08);
  transition: box-shadow 300ms ease;

  &:hover {
    box-shadow: 0 8px 40px rgba(124, 58, 237, 0.16);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderColor}33;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const RoleTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const CompanyName = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  transition: opacity 200ms ease;

  &:hover { opacity: 0.75; }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Badge = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary}18;
  border: 1px solid ${({ theme }) => theme.colors.secondary}44;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.02em;
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}44, transparent);
  margin-bottom: 18px;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.primaryText};
  opacity: 0.85;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
    margin-top: 8px;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 16px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  transition: opacity 200ms ease;

  &:hover { opacity: 0.7; }
`;
