import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledNavbar = styled(Navbar)`
  min-height: 8vh;
`;

const Header = () => {
  const history = useHistory();
  return (
    <StyledNavbar bg="light" expand="lg" className="shadow">
      <Container>
        <NavbarBrand className="flex-lg-grow-1" role="button" onClick={() => history.push('/home')}>
          Toothy
        </NavbarBrand>
        <NavbarToggle aria-controls="nav" />
        <NavbarCollapse id="nav" className="justify-content-between">
          <Navigation />
        </NavbarCollapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
