import { FieldHookConfig, useField, useFormikContext } from 'formik';
import { FC } from 'react';
import { StyledError } from './FormikInput';

import 'react-datepicker/dist/react-datepicker.css';

export const FormikDatepicker: FC<FieldHookConfig<string>> = (props) => {
  const [field, meta] = useField({ ...props });
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <input
        {...field}
        type="datetime-local"
        onChange={(e) => {
          setFieldValue(field.name, e.target.value);
        }}
      />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};

export default FormikDatepicker;
