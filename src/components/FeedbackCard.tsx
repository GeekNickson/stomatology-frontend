import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating';
import styled from 'styled-components';
import { Feedback } from '../shared/model/feedback.model';

interface IFeedbackCardProps {
  feedback: Feedback;
}
const StyledImage = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledCard = styled(Card)`
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
`;
const FeedbackCard: React.FunctionComponent<IFeedbackCardProps> = ({ feedback }) => {
  const patient = feedback.patient;

  return (
    <StyledCard className="shadow" bg="light" text="dark">
      <Card.Header className="fw-normal fs-3 text-center d-flex justify-content-between align-items-center">
        <p className="mb-0">{patient.firstName + ' ' + patient.lastName}</p>
        <div style={{ justifySelf: 'flex-end' }}>
          <RatingView ratingValue={feedback.rating}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.3rem' }} />
          </RatingView>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3} className="border-end border-secondary border-2 d-flex justify-content-center align-items-center">
            <StyledImage
              src={process.env.REACT_APP_API_URL + 'images/' + patient.profilePictureUrl}
              className="shadow"
            />
          </Col>
          <Col>
            <p className="fw-normal fs-4 text-break">{feedback.text}</p>
          </Col>
        </Row>
      </Card.Body>
    </StyledCard>
  );
};

export default FeedbackCard;
