import moment from 'moment';
import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Appointment } from '../shared/model/appointment.model';

interface IAppointmentProps {
  appointments: Appointment[];
  isDoctor: boolean;
}

const Appointments: React.FunctionComponent<IAppointmentProps> = ({ appointments, isDoctor }) => {
  return (
    <>
      <h1 className="display-5 fw-bold text-center mb-5">Appointments</h1>
      <Table bordered hover className="shadow mb-5">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Time</td>
            <td>Service</td>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{isDoctor ? appointment.patientFirstName : appointment.doctorFirstName}</td>
              <td>{isDoctor ? appointment.patientLastName : appointment.doctorLastName}</td>
              <td>{moment(appointment.dateTime).format('YYYY.MM.DD HH:mm')}</td>
              <td>{appointment.service}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Appointments;
