import { FC } from 'react';
import { Doctor } from '../shared/model/doctor.model';
import { MedicalService } from '../shared/model/medical-service.model';
import { FormGroup, FormLabel, Card } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import FormikDatepicker from './FormikDatepicker';
import FormikSelect from './FormikSelect';
import * as Yup from 'yup';
import { StyledContainer, StyledCard } from './Auth';
import { StyledButton } from './DoctorCard';
import { useAppSelector } from '../shared/hooks/hooks';
import { AppointmentRequest, appointmentService } from '../shared/service/appointment.service';
import { useHistory } from 'react-router';
export interface SignUpProps {
  currentDoctor: Doctor | null;
  currentService: MedicalService | null;
  doctors: Doctor[];
  services: MedicalService[];
}

interface SignUpFormValues {
  doctor?: number;
  service?: number;
  time: Date;
}

const signUpValidation = Yup.object({
  doctor: Yup.number().required('This field is required'),
  service: Yup.number().required('This field is required'),
  time: Yup.date().min(new Date(), 'Date must be greater than today').required('This field is required'),
});
const SignUp: FC<SignUpProps> = ({ currentDoctor, currentService, doctors, services }) => {
  const { user } = useAppSelector((state) => state.authReducer);

  const history = useHistory();

  const handleSubmit = (values: SignUpFormValues, setSubmitting: (isSubmitting: boolean) => void) => {
    setTimeout(() => {
      const data: AppointmentRequest = {
        dateTime: values.time,
        doctorId: values.doctor!,
        serviceId: values.service!,
        patientId: user?.id!,
      };

      appointmentService.signUp(data).then(() => history.push(`/profile/${user?.id}`));

      setSubmitting(false);
    }, 100);
  };

  return (
    <>
      <StyledContainer className="d-flex align-items-center justify-content-center">
        <StyledCard>
          <Card.Body>
            <Formik
              initialValues={{
                time: new Date(),
                doctor: currentService ? doctors[0]?.id : currentDoctor?.id,
                service: currentDoctor ? services[0]?.id : currentService?.id,
              }}
              validationSchema={signUpValidation}
              enableReinitialize
              onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
            >
              {({ isSubmitting }) => (
                <>
                  <Form>
                    <FormGroup className="mb-3" controlId="time">
                      <FormLabel>Time</FormLabel>
                      <FormikDatepicker name="time" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="doctor">
                      <FormLabel>Doctor</FormLabel>
                      <FormikSelect id="doctor" name="doctor" disabled={!!currentDoctor}>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.firstName + ' ' + doctor.lastName}
                          </option>
                        ))}
                      </FormikSelect>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="service">
                      <FormLabel>Service</FormLabel>
                      <FormikSelect id="service" name="service" disabled={!!currentService}>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </FormikSelect>
                    </FormGroup>
                    <StyledButton type="submit" variant="primary" disabled={isSubmitting}>
                      Sign up
                    </StyledButton>
                  </Form>
                </>
              )}
            </Formik>
          </Card.Body>
        </StyledCard>
      </StyledContainer>
    </>
  );
};

export default SignUp;
