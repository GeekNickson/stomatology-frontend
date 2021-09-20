import { Patient } from './patient.model';

export interface Feedback {
  id: number;
  text: string;
  rating: number;
  patient: Patient;
}
