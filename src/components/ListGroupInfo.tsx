import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';

interface IListGroupProps {
  text: string;
  icon: IconDefinition;
}

const ListGroupInfo: React.FunctionComponent<IListGroupProps> = ({ text, icon }) => {
  return (
    <ListGroup.Item className="bg-light">
      <Row>
        <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
          <p className="me-3 mb-0">
            <FontAwesomeIcon icon={icon} />
          </p>
          <p className="mb-0">{text}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ListGroupInfo;
