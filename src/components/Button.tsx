import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 0.5em 1.25em;
  border: none;
  border-radius: 1rem;
  text-align: center;
  font-weight: 200;
  font-size: 3.6rem;
  cursor: pointer;
`;

function Button({ children }: { children: ReactNode }) {
  return <StyledButton> {children} </StyledButton>;
}

export default Button;
