import { useHistory } from 'react-router-dom';
import { FEEDBACK_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utils/constants/routes.constants';
import { useAppDispatch, useAppSelector } from '../shared/hooks/hooks';
import { logout } from '../shared/store/slices/auth-slice';
import { Nav, NavLink, Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
const StyledAvatar = styled(Image)`
  width: 3rem;
  height: 3rem;
`;

const Navigation = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.authReducer);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const handleProfileClick = () => {
    history.push(`/profile/${user?.id}`);
  };

  return (
    <>
      <Nav justify className="align-items-center justify-content-center flex-grow-3">
        <LinkContainer to={HOME_ROUTE}>
          <NavLink>Home</NavLink>
        </LinkContainer>
        <LinkContainer to={HOME_ROUTE + '/#specialists'}>
          <NavLink>Specialists</NavLink>
        </LinkContainer>
        <LinkContainer to={HOME_ROUTE + '/#services'}>
          <NavLink>Services</NavLink>
        </LinkContainer>
        {isAuthenticated && user?.roleName === 'USER' && (
          <LinkContainer to={FEEDBACK_ROUTE}>
            <NavLink>Feedback</NavLink>
          </LinkContainer>
        )}
      </Nav>
      <Nav className="align-items-center justify-content-end">
        {isAuthenticated ? (
          <>
            <p className="mb-0 ms-1">
              Hello, <strong>{user?.firstName}</strong>
            </p>
            <NavDropdown
              id="nav-dropdown"
              title={
                <StyledAvatar
                  className="avatar"
                  src={process.env.REACT_APP_API_URL + 'images/' + user?.profilePictureUrl}
                  roundedCircle
                  thumbnail
                />
              }
            >
              <NavDropdown.Item onClick={handleProfileClick}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogoutClick}>Logout</NavDropdown.Item>
            </NavDropdown>
          </>
        ) : (
          <LinkContainer to={LOGIN_ROUTE}>
            <NavLink>Sign In</NavLink>
          </LinkContainer>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
