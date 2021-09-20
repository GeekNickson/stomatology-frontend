import { faAt, faNotesMedical, faPhone, faUserNurse, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Col, Row, Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Doctor } from '../shared/model/doctor.model';
import { doctorService } from '../shared/service/doctor.service';
import { StyledContainer } from './Auth';
import styled from 'styled-components';
import { StyledButton } from './DoctorCard';

interface IDoctorProfileProps {}

interface RouteParams {
  id: string;
}

const StyledCardImage = styled(Card.Img)`
  object-fit: cover;
  height: 15rem;
`;

const StyledCard = styled(Card)`
  flex: 0 0 25%;
`;

const DoctorProfile: React.FunctionComponent<IDoctorProfileProps> = (props) => {
  const [doctor, setDoctor] = useState<Doctor>();
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    doctorService.getDoctor(+id).then((response) => setDoctor(response.data));
  }, [id]);

  return (
    <StyledContainer>
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card bg="light" className="shadow rounded">
            <Card.Img variant="top" src={process.env.REACT_APP_API_URL + 'images/' + doctor?.profilePictureUrl} />
            <Card.Body className="d-flex flex-column align-items-center justify-between">
              <h3 className="fs-3 fw-normal p-2">{doctor?.firstName + ' ' + doctor?.lastName}</h3>
              <h4 className="fs-3 fw-normal p-2">{doctor?.specialty.name}</h4>
              <StyledButton variant="success" className="fs-4 my-2">
                Make an appointment
              </StyledButton>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card bg="light" className="shadow rounded">
            <Card.Header className="display-6 fw-normal p-4 text-center">Information about Doctor</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-light">
                  <Row>
                    <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
                      <p className="me-3 mb-0">
                        <FontAwesomeIcon icon={faUserNurse} />
                      </p>
                      <p className="mb-0">{doctor?.firstName + ' ' + doctor?.lastName}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Row>
                    <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
                      <p className="me-3 mb-0">
                        <FontAwesomeIcon icon={faNotesMedical} />
                      </p>
                      <p className="mb-0">{doctor?.specialty.name}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Row>
                    <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
                      <p className="me-3 mb-0">
                        <FontAwesomeIcon icon={faAt} />
                      </p>
                      <p className="mb-0">{doctor?.email}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Row>
                    <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
                      <p className="me-3 mb-0">
                        <FontAwesomeIcon icon={faPhone} />
                      </p>
                      <p className="mb-0">{doctor?.phoneNumber}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="bg-light">
                  <Row>
                    <Col className="d-flex fs-3 fw-light mb-0 justify-content-center align-items-center py-2">
                      <p className="me-3 mb-0">
                        <FontAwesomeIcon icon={faVoteYea} />
                      </p>
                      <p className="mb-0">{doctor?.experience + ' Years'}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card bg="light" className="shadow rounded">
            <Card.Header className="display-6 fw-normal p-4 text-center">Provided Services</Card.Header>
            <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
              {doctor?.services.map((service) => (
                <StyledCard key={service.id} className="m-3 shadow flex-grow-1 flex-md-grow-0" bg="light">
                  <Card.Header className="fs-5 fw-normal text-center">{service.name}</Card.Header>
                  <StyledCardImage
                    variant="bottom"
                    src={process.env.REACT_APP_API_URL + 'images/' + service.imageUrl}
                  ></StyledCardImage>
                </StyledCard>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default DoctorProfile;
