import { FormGroup, FormLabel } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import FormikTextarea from './FormikTextarea';
import { Rating } from 'react-simple-star-rating';
import { StyledButton } from './DoctorCard';
import { feedbackService } from '../shared/service/feedback.service';
import { useAppSelector } from '../shared/hooks/hooks';
import { useState } from 'react';
import FeedbackSubmittedModal from './FeedbackSubmittedModal';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface IFeedbackFormProps {}

interface FeedbackValues {
  text: string;
  rating: number;
}

const validation = Yup.object({
  text: Yup.string()
    .required('This field is required')
    .min(10, 'Feedback must be at least 10 characters')
    .max(1000, 'Feedback must be less than 1000 characters'),
  rating: Yup.number().required('This field is required').min(1).max(5),
});
const FeedbackForm: React.FunctionComponent<IFeedbackFormProps> = (props) => {
  const [show, setShow] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const { user } = useAppSelector((state) => state.authReducer);

  const handleSubmit = (values: FeedbackValues, setSubmitting: (isSubmitting: boolean) => void) => {
    feedbackService
      .create({ patientId: user?.id!, ...values })
      .then(() => {
        setSuccess(true);
        handleShow();
        setTimeout(() => {
          handleClose();
          history.push('/home');
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        handleShow();
        setTimeout(() => {
          handleClose();
        }, 1000);
      });
    setSubmitting(false);
  };

  return (
    <>
      <FeedbackSubmittedModal show={show} handleClose={handleClose} isSuccess={isSuccess} />
      <Formik
        initialValues={{ text: '', rating: 1 }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form>
            <FormGroup className="mb-3" controlId="text">
              <FormLabel>Write here</FormLabel>
              <FormikTextarea name="text" placeholder="Enter your feedback..." />
            </FormGroup>
            <FormGroup controlId="rating" className="mb-3 ">
              <FormLabel>Rate us</FormLabel>
              <Rating
                className="d-flex align-items-center justify-content-center pt-2 form-control"
                size={65}
                transition
                onClick={(rate) => setFieldValue('rating', rate)}
                ratingValue={values.rating}
              >
                <FontAwesomeIcon icon={faStar} style={{ fontSize: '3.3rem' }} />
              </Rating>
            </FormGroup>
            <StyledButton type="submit" variant="primary" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FeedbackForm;
