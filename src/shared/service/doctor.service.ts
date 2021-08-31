import { host } from '../../http/axios';
import { Doctor } from '../model/doctor.model';

class DoctorService {
  getDoctors() {
    return host.get<Doctor[]>(`api/public/doctors`);
  }

  getDoctor(id: number) {
    return host.get<Doctor>(`api/doctors/${id}`);
  }
}

export const doctorService = new DoctorService();
