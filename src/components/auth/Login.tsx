import styled from 'styled-components';
import Button from '../Button';
import Flex from '../layout/Flex';

const StyledCard = styled(Flex)`
  min-height: 50vh;
  max-width: 80%;
  padding: 2em 5em;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 1rem;
  backdrop-filter: blur(0.5rem);
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  width: fit-content;
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.dark};
  letter-spacing: 1.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 1rem;
  }
`;

const StyledFlex = styled(Flex)`
  height: 90vh;
  background: linear-gradient(0deg, rgba(24, 24, 25, 0.3), rgba(24, 24, 25, 0.3)),
    url(/static/brushes.jpg) no-repeat center center fixed;
`;

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.mediumForm};
  font-weight: 200;
  color: ${({ theme }) => theme.color.dark};
  background-color: white;
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1.25rem;
  margin: 2rem auto;
  position: relative;
  border-bottom: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 1rem;
  width: fill-available;
`;

function Login() {
  return (
    <StyledFlex flexProps={{ align: 'center', justify: 'center' }}>
      <StyledCard flexProps={{ direction: 'column', align: 'center', justify: 'space-evenly' }}>
        <StyledTitle>Sign In</StyledTitle>
        <StyledInput type="email" placeholder="E-mail" />
        <StyledInput type="password" placeholder="Password" />
        <Button>Login</Button>
      </StyledCard>
    </StyledFlex>
  );
}

export default Login;
