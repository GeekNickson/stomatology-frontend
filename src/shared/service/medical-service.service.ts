import { authHost, host } from '../../http/axios';
import { MedicalService } from '../model/medical-service.model';

class MedicalServiceService {
  public getServices() {
    return host.get<MedicalService[]>('api/public/services');
  }

  public getService(id: number) {
    return authHost.get<MedicalService>(`api/services/${id}`);
  }

  public getByDoctor(doctorId: number) {
    return authHost.get<MedicalService[]>(`api/services/doctors/${doctorId}`);
  }
}

export const medicalServiceService = new MedicalServiceService();
