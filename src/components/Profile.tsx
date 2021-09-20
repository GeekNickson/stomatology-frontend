import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppSelector } from '../shared/hooks/hooks';
import { Appointment } from '../shared/model/appointment.model';
import { appointmentService } from '../shared/service/appointment.service';
import Appointments from './Appointments';
import UserCard from './UserCard';
import UserInfo from './UserInfo';

export interface ProfileProps {}

const StyledContainer = styled(Container)`
  min-height: 92vh;
`;

const Profile: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    user?.roleName === 'USER'
      ? appointmentService
          .findByPatient(user?.id!)
          .then((res) => res.data)
          .then(setAppointments)
      : appointmentService
          .findByDoctor(user?.id!)
          .then((res) => res.data)
          .then(setAppointments);
  }, [user?.roleName, user?.id]);

  return (
    <StyledContainer className="mt-5">
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <UserCard user={user!} />
        </Col>
        <Col className="mb-4">
          <UserInfo user={user!} />
        </Col>
      </Row>
      {appointments.length > 0 && (
        <Row>
          <Col>
            <Appointments appointments={appointments} isDoctor={user?.roleName === 'DOCTOR'} />
          </Col>
        </Row>
      )}
    </StyledContainer>
  );
};

export default Profile;
