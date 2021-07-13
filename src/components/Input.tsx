import { useField } from 'formik';
import styled from 'styled-components';

export interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

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

const StyledError = styled.small`
  color: ${({ theme }) => theme.color.danger};
`;

const Input = (props: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};

export default Input;
