import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../shared/hooks/hooks';
import { fetchServices } from '../shared/store/slices/medical-service-slice';
import Service from './Service';

export interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.servicesReducer);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Container className="mt-5 mb-5">
      <h1 className="display-5 fw-bold text-center mb-5">Our Services</h1>
      <Row className="g-5">
        {services.map((service) => (
          <Col className="d-flex justify-content-center align-items-center">
            <Service {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
