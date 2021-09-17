import { authHost, host } from '../../http/axios';
import { Doctor } from '../model/doctor.model';

class DoctorService {
  public getDoctors() {
    return host.get<Doctor[]>('api/public/doctors');
  }

  public getDoctor(id: number) {
    return authHost.get<Doctor>(`api/public/doctors/${id}`);
  }

  public getByService(serviceId: number) {
    return authHost.get<Doctor[]>(`api/doctors/services/${serviceId}`);
  }
}

export const doctorService = new DoctorService();
