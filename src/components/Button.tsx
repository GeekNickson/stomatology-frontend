import { FC } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface ButtonProps {
  type: ButtonType;
  className?: string;
}
const StyledButton = styled.button`
  outline: none;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 0.3em 0.65em;
  border: none;
  border-radius: 1rem;
  text-align: center;
  font-weight: 200;
  font-size: 3.6rem;
  cursor: pointer;
`;

export const Button: FC<ButtonProps> = ({ children, type, className }) => {
  return (
    <StyledButton type={type} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
