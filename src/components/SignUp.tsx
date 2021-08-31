import { FC } from 'react';
import { Doctor } from '../shared/model/doctor.model';
import { MedicalService } from '../shared/model/medical-service.model';
export interface SignUpProps {
  doctor?: Doctor;
  service?: MedicalService;
}

const SignUp: FC<SignUpProps> = () => {
  return <></>;
};

export default SignUp;
