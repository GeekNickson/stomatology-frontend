import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import Uploader from './Uploader';
import * as Yup from 'yup';
import { REGISTER_ROUTE } from '../utils/constants/routes.constants';
import { useAppDispatch } from '../shared/hooks/hooks';
import { login, registerUser } from '../shared/store/slices/auth-slice';
import { Button, Card, Container, FormGroup, FormLabel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import FormikInput from './FormikInput';

export const StyledCard = styled(Card)`
  min-width: 40vw;
`;

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
    console.log(values);
    isRegister
      ? dispatch(registerUser(formRegisterRequest(values as RegisterValues)))
      : dispatch(login({ email: values.email, password: values.password }));
    setSubmitting(false);
  };

  return (
    <Container className="mt-5 d-flex align-items-center justify-content-center">
      <StyledCard>
        <Card.Body>
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
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <FormGroup className="mb-3" controlId="email">
                  <FormLabel>E-mail</FormLabel>
                  <FormikInput type="email" name="email" placeholder="Enter your E-mail address" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormikInput type="password" name="password" placeholder="Enter your password" />
                </FormGroup>
                {isRegister && (
                  <>
                    <FormGroup className="mb-3" controlId="firstName">
                      <FormLabel>First Name</FormLabel>
                      <FormikInput type="text" name="firstName" placeholder="Enter your first name" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <FormikInput type="text" name="lastName" placeholder="Enter your last name" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="phone">
                      <FormLabel>Phone</FormLabel>
                      <FormikInput type="tel" name="phone" placeholder="Enter your phone number" />
                    </FormGroup>
                    <FormGroup controlId="profilePicture">
                      <FormLabel>Drop your profile picture below</FormLabel>
                      <Uploader setFieldValue={setFieldValue} />
                    </FormGroup>
                  </>
                )}
                {!isRegister && (
                  <LinkContainer to={REGISTER_ROUTE}>
                    <Button variant="link">Don't have an account? Register!</Button>
                  </LinkContainer>
                )}
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isRegister ? 'Register' : 'Login'}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </StyledCard>
    </Container>
  );
};

export default Auth;
