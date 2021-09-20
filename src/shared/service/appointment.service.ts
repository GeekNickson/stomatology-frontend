import { authHost } from '../../http/axios';
import { Appointment } from '../model/appointment.model';

export interface AppointmentRequest {
  dateTime: Date;
  doctorId: number;
  patientId: number;
  serviceId: number;
}

class AppointmentService {
  public signUp(data: AppointmentRequest) {
    return authHost.post<AppointmentRequest>(`api/appointments`, data);
  }
  public findByPatient(id: number) {
    return authHost.get<Appointment[]>(`api/appointments/patient/${id}`);
  }
  public findByDoctor(id: number) {
    return authHost.get<Appointment[]>(`api/appointments/doctor/${id}`);
  }
}

export const appointmentService = new AppointmentService();
