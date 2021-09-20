export interface Appointment {
  id: number;
  doctorFirstName: string;
  doctorLastName: string;
  patientFirstName: string;
  patientLastName: string;
  service: string;
  dateTime: string;
}
