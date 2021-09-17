import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../shared/hooks/hooks';
import { StyledButton } from './DoctorCard';

export interface ServiceProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const StyledCardImage = styled(Card.Img)`
  object-fit: cover;
  height: 10rem;
`;

export const StyledCard = styled(Card)`
  width: 14rem;
  min-height: 20.5rem;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.15);
  }
`;

const Service: FC<ServiceProps> = ({ id, name, price, imageUrl }) => {
  const history = useHistory();
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  return (
    <StyledCard bg="light" className="shadow rounded">
      <StyledCardImage src={process.env.REACT_APP_API_URL + 'images/' + imageUrl} alt={name} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-around">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        {isAuthenticated && (
          <StyledButton variant="success" onClick={() => history.push(`/sign-up/service/${id}`, { isService: true })}>
            Sign Up
          </StyledButton>
        )}
      </Card.Body>
    </StyledCard>
  );
};

export default Service;
