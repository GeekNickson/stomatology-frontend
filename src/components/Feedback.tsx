import * as React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { StyledContainer } from './Auth';
import FeedbackForm from './FeedbackForm';

interface IFeedbackProps {}

const Feedback: React.FunctionComponent<IFeedbackProps> = (props) => {
  return (
    <StyledContainer className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card className="shadow">
            <Card.Header className="fw-normal display-6 text-center p-3">Leave your Feedback</Card.Header>
            <Card.Body className="px-5 my-3">
              <FeedbackForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Feedback;
