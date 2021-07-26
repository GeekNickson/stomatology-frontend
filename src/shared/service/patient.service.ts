import { authHost } from '../../http/axios';
import { Patient } from '../model/patient.model';

class PatienService {
  public getPatient(id: number) {
    return authHost.get<Patient>(`api/patients/${id}`);
  }
}

export const patientService = new PatienService();
