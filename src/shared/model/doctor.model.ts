import { MedicalService } from './medical-service.model';
import { Schedule } from './schedule.model';
import { Specialty } from './specialty.model';
import { User } from './user.model';

export interface Doctor extends User {
  experience: number;
  phoneNumber: string;
  specialty: Specialty;
  services: MedicalService[];
  schedules: Schedule[];
}
