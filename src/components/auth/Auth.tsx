import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import Flex from '../layout/Flex';
import Uploader from '../Uploader';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from '../../utils/constants/routes.constants';
import { useAppDispatch } from '../../shared/hooks/hooks';
import { login, registerUser } from '../../shared/store/slices/auth-slice';

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues extends LoginValues {
  firstName: string;
  lastName: string;
  phone: string;
  profilePicture: File;
}

interface AuthProps {
  register: boolean;
}

const StyledCard = styled(Flex)`
  margin: 6rem auto;
  min-height: 50vh;
  max-width: 80%;
  padding: 2em 5em;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  border-radius: 1rem;
  backdrop-filter: blur(0.5rem);
`;

const StyledTitle = styled.h1`
  margin: 2rem auto;
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
  min-height: 90vh;
  background: linear-gradient(0deg, rgba(24, 24, 25, 0.3), rgba(24, 24, 25, 0.3)),
    url(/static/brushes.jpg) no-repeat center center fixed;
`;

const StyledButton = styled(Button)`
  margin: 2rem auto;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.mediumForm};
  font-weight: 200;
  flex: 2 1 66%;
`;

const StyledContainer = styled(Flex)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const loginValidation = Yup.object({
  email: Yup.string().email('Invalid E-mail').required('This field is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters long')
    .max(16, 'Password must be less than 16 characters')
    .required('This field is required'),
});

const registerValidation = loginValidation.concat(
  Yup.object({
    firstName: Yup.string().max(50, "First name can't be more than 50 characters").required('This field is required'),
    lastName: Yup.string().max(50, "Last name can't be more than 50 characters").required('This field is required'),
  })
);

const formRegisterRequest = (data: RegisterValues): FormData => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  return formData;
};

const Auth: FC<AuthProps> = ({ register }) => {
  const [isRegister] = useState(register);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: LoginValues | RegisterValues, setSubmitting: (isSubmitting: boolean) => void) => {
    isRegister
      ? dispatch(registerUser(formRegisterRequest(values as RegisterValues)))
      : dispatch(login({ email: values.email, password: values.password }));
    setSubmitting(false);
  };

  return (
    <StyledFlex flexProps={{ align: 'center', justify: 'center' }}>
      <StyledCard flexProps={{ direction: 'column', align: 'center', justify: 'space-evenly' }}>
        <StyledTitle>{isRegister ? 'Sign Up' : 'Sign In'}</StyledTitle>
        <Formik
          initialValues={
            isRegister
              ? {
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                  phone: '',
                  profilePicture: null,
                }
              : { email: '', password: '' }
          }
          validationSchema={isRegister ? registerValidation : loginValidation}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        >
          {({ setFieldValue }) => (
            <Form>
              <Flex flexProps={{ direction: 'column', align: 'center', justify: 'space-evenly' }}>
                <Input id="email" name="email" type="email" placeholder="E-mail" />
                <Input id="password" name="password" type="password" placeholder="Password" />
                {isRegister && (
                  <>
                    <Input id="firstName" name="firstName" type="text" placeholder="First Name" />
                    <Input id="lastName" name="lastName" type="text" placeholder="Last Name" />
                    <Input id="phone" name="phone" type="tel" placeholder="Phone" />
                    <StyledContainer flexProps={{ align: 'center', justify: 'space-between' }}>
                      <StyledLabel>Drop your profile picture below</StyledLabel>
                      <Uploader setFieldValue={setFieldValue} />
                    </StyledContainer>
                  </>
                )}
                {!isRegister && <StyledLink to={REGISTER_ROUTE}>Don't have an account? Register!</StyledLink>}
                <StyledButton type="submit">{isRegister ? 'Register' : 'Login'}</StyledButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </StyledCard>
    </StyledFlex>
  );
};

export default Auth;
