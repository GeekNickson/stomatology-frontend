import { useField } from 'formik';
import { FunctionComponent } from 'react';
import { FormSelect } from 'react-bootstrap';
import { StyledError } from './FormikInput';

interface SelectProps {
  id?: string;
  disabled?: boolean;
  name: string;
}
const FormikSelect: FunctionComponent<SelectProps> = (props) => {
  const [field, meta] = useField<string>({ ...props, type: 'select' });
  return (
    <>
      <FormSelect {...field} {...props}>
        {props.children}
      </FormSelect>
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};

export default FormikSelect;
