import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Feedback } from '../shared/model/feedback.model';
import { feedbackService } from '../shared/service/feedback.service';
import FeedbackCard from './FeedbackCard';

interface IFeedbacksProps {}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Feedbacks: React.FunctionComponent<IFeedbacksProps> = (props) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    feedbackService
      .findLast()
      .then((res) => res.data)
      .then(setFeedbacks);
  }, []);

  return (
    <Container className="mb-5">
      {feedbacks.length > 0 && (
        <>
          <h1 className="display-5 fw-bold text-center mb-5">Reviews</h1>
          <Row className="gx-5">
            {feedbacks.map((feedback) => (
              <Col key={feedback.id} md={6} className={`py-${randomIntFromInterval(1, 5)}`}>
                <FeedbackCard feedback={feedback} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Feedbacks;
