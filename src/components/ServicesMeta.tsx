import { FC } from 'react';
import { Container } from 'react-bootstrap';

export interface ServicesMetaProps {}

const ServicesMeta: FC<ServicesMetaProps> = () => {
  return (
    <Container fluid className="bg-light">
      <div className="p-5 bg-light rounded-3">
        <Container className="py-5">
          <h1 className="display-5 fw-bold">Our services are the best you can find</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque sit, officia dicta doloremque
            inventore a amet distinctio mollitia. Temporibus dolorem eveniet harum voluptatum nulla ipsum ipsam iusto
            accusantium fuga?
          </p>
        </Container>
      </div>
    </Container>
  );
};

export default ServicesMeta;
