import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Doctor } from '../shared/model/doctor.model';
import { StyledCard, StyledCardImage } from './Service';

export interface DoctorProps {
  doctor: Doctor;
}

const DoctorCard: FC<DoctorProps> = ({ doctor }) => {
  return (
    <StyledCard>
      <StyledCardImage src={process.env.REACT_APP_API_URL + 'images/' + doctor.profilePictureUrl} alt={doctor.email} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-between">
        <Card.Title className="text-center">{doctor.firstName + ' ' + doctor.lastName}</Card.Title>
        <Card.Text>{doctor.specialty.name}</Card.Text>
        <Button variant="dark">Sign Up</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default DoctorCard;
