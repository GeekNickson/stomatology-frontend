import { host } from '../../http/axios';
import { MedicalService } from '../model/medical-service.model';

class MedicalServiceService {
  public getServices() {
    return host.get<MedicalService[]>('api/public/services');
  }
}

export const medicalServiceService = new MedicalServiceService();
