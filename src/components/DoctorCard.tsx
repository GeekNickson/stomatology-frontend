import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAppSelector } from '../shared/hooks/hooks';
import { Doctor } from '../shared/model/doctor.model';
import { StyledCardImage } from './Service';
import styled from 'styled-components';

export interface DoctorProps {
  doctor: Doctor;
}

export const StyledButton = styled(Button)`
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledCard = styled(Card)`
  width: 14rem;
  min-height: 23.5rem;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;

const DoctorCard: FC<DoctorProps> = ({ doctor }) => {
  const history = useHistory();
  const { user } = useAppSelector((state) => state.authReducer);

  return (
    <StyledCard bg="light" className="shadow rounded">
      <StyledCardImage src={process.env.REACT_APP_API_URL + 'images/' + doctor.profilePictureUrl} alt={doctor.email} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-around">
        <Card.Title className="text-center mb-0">{doctor.firstName + ' ' + doctor.lastName}</Card.Title>
        <Card.Text className="mb-0">{doctor.specialty.name}</Card.Text>
        <StyledButton variant="success" onClick={() => history.push(`/doctor/${doctor.id}`)}>
          Profile
        </StyledButton>
        {user?.roleName === 'USER' && (
          <StyledButton variant="dark" onClick={() => history.push(`/sign-up/doctor/${doctor.id}`)}>
            Appointment
          </StyledButton>
        )}
      </Card.Body>
    </StyledCard>
  );
};

export default DoctorCard;
