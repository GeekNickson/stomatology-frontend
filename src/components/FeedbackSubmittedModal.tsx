import * as React from 'react';
import { Alert, Modal } from 'react-bootstrap';

interface IFeedbackSubmittedModalProps {
  show: boolean;
  handleClose: () => void;
  isSuccess: boolean;
}

const FeedbackSubmittedModal: React.FunctionComponent<IFeedbackSubmittedModalProps> = ({
  show,
  handleClose,
  isSuccess,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Feedback Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant={isSuccess ? 'success' : 'danger'}>
          {isSuccess ? 'Your feedback was saved!' : 'There was an error saving your feedback'}
        </Alert>
      </Modal.Body>
    </Modal>
  );
};

export default FeedbackSubmittedModal;
