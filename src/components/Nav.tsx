import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import Flex from './layout/Flex';
import Navigation from './Navigation';

const StyledNav = styled.nav`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 5% 1fr 1fr 5%;
  min-height: 10vh;
  padding: 0.5rem 1.25rem;
  background-color: ${(props) => props.theme.color.dark};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 5% 2fr 1fr 5%;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.large};
  margin-right: 1ch;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.large};
  letter-spacing: 1ch;
  font-weight: 200;
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const StyledFlex = styled(Flex)`
  grid-column: 2/3;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledFlex flexProps={{ align: 'center' }}>
        <StyledIcon icon={faTooth} />
        <StyledHeader>Toothy</StyledHeader>
        <StyledIcon icon={faTooth} />
      </StyledFlex>
      <Navigation />
    </StyledNav>
  );
};

export default Nav;
