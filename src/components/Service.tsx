import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

export interface ServiceProps {
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
`;

const Service: FC<ServiceProps> = ({ name, price, imageUrl }) => {
  return (
    <StyledCard>
      <StyledCardImage src={process.env.REACT_APP_API_URL + 'images/' + imageUrl} alt={name} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-between">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        <Button variant="success">Sign Up</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default Service;
