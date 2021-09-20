import { useField } from 'formik';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
export interface InputProps {
  id?: string;
  name: string;
  placeholder?: string;
}

const StyledError = styled.small`
  color: ${({ theme }) => theme.color.danger};
`;

const FormikTextarea = (props: InputProps) => {
  const [field, meta] = useField({ ...props, type: 'textarea' });

  return (
    <>
      <TextareaAutosize
        className="form-control fw-normal fs-4"
        {...field}
        {...props}
        minRows={5}
        maxRows={15}
        maxLength={1000}
      />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};

export default FormikTextarea;
