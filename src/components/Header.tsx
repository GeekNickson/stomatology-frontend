import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledNavbar = styled(Navbar)`
  min-height: 8vh;
`;

const Header = () => {
  return (
    <StyledNavbar bg="light" expand="lg">
      <Container>
        <NavbarBrand>Toothy</NavbarBrand>
        <NavbarToggle aria-controls="nav" />
        <NavbarCollapse id="nav">
          <Navigation />
        </NavbarCollapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
