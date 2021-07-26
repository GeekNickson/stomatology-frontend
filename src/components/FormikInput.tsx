import { useField } from 'formik';
import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export interface InputProps {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
}
const StyledError = styled.small`
  color: ${({ theme }) => theme.color.danger};
`;

const FormikInput = (props: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl {...field} {...props} />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};

export default FormikInput;
