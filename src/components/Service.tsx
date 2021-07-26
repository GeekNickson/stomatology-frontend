import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

export interface ServiceProps {
  name: string;
  price: number;
  imageUrl: string;
}

const StyledCardImage = styled(Card.Img)`
  object-fit: cover;
  height: 6rem;
`;

const StyledCard = styled(Card)`
  width: 10rem;
`;

const Service: FC<ServiceProps> = ({ name, price, imageUrl }) => {
  return (
    <StyledCard>
      <StyledCardImage src={process.env.REACT_APP_API_URL + 'images/' + imageUrl} alt={name} />
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        <Button variant="success">Sign Up</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default Service;
