import { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Doctor } from '../shared/model/doctor.model';
import { MedicalService } from '../shared/model/medical-service.model';
import { doctorService } from '../shared/service/doctor.service';
import { medicalServiceService } from '../shared/service/medical-service.service';
import SignUp from './SignUp';

interface SignUpWrapperProps {}

interface RouteParams {
  id: string;
}

interface LocationProps {
  isService?: boolean;
}

const SignUpWrapper: FunctionComponent<SignUpWrapperProps> = () => {
  const [service, setService] = useState<MedicalService | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [services, setServices] = useState<MedicalService[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const { state } = useLocation<LocationProps>();
  const params = useParams<RouteParams>();

  useEffect(() => {
    async function fetchData() {
      if (state?.isService) {
        const responseServices = await medicalServiceService.getServices();
        setServices(responseServices.data);
        const responseService = await medicalServiceService.getService(+params.id);
        setService(responseService.data);
        const responseDoctors = await doctorService.getByService(responseService.data.id);
        setDoctors(responseDoctors.data);
      } else {
        const responseDoctors = await doctorService.getDoctors();
        setDoctors(responseDoctors.data);
        const responseDoctor = await doctorService.getDoctor(+params.id);
        setDoctor(responseDoctor.data);
        const responseServices = await medicalServiceService.getByDoctor(responseDoctor.data.id);
        setServices(responseServices.data);
      }
    }

    fetchData();
  }, [params.id, state?.isService]);

  return <SignUp currentDoctor={doctor} currentService={service} doctors={doctors} services={services} />;
};

export default SignUpWrapper;
