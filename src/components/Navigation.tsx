import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Cheeseburger from './Cheeseburger';
import { useState } from 'react';

const StyledNavLinks = styled.ul<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: ${({ theme }) => theme.color.secondary};
    z-index: 1;
    opacity: 0;
    position: absolute;
    right: 100%;
    width: 100%;
    min-height: 80vh;
    top: 10vh;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: all 0.75s ease-in-out;

    ${(props) =>
      props.active &&
      css`
        right: 0;
        opacity: 1;
      `}
  }
`;

const StyledNavLink = styled(NavLink)<{ color?: string }>`
  padding: 1rem 1.25rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.color || props.theme.color.light};
  text-decoration: none;
  text-align: center;
  border-radius: 1rem;

  &:hover {
    color: ${(props) => props.theme.color.dark};
    background-color: ${(props) => props.color || props.theme.color.primary};
    transition: 0.75s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ theme }) => theme.color.dark};
  }
`;

const StyledCheeseburger = styled(Cheeseburger)`
  justify-self: end;
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledNavLinks active={open}>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">Services</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">Specialists</StyledNavLink>
        </li>
        <li>
          <StyledNavLink color="#EBC0DC" to="/">
            Sign In
          </StyledNavLink>
        </li>
      </StyledNavLinks>
      <StyledCheeseburger setOpen={setOpen} open={open} />
    </>
  );
};

export default Navigation;
