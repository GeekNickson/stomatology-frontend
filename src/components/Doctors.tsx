import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Doctor } from '../shared/model/doctor.model';
import { doctorService } from '../shared/service/doctor.service';
import DoctorCard from './DoctorCard';

export interface DoctorsProps {}

const Doctors: FC<DoctorsProps> = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    async function fetchDoctors() {
      const response = await doctorService.getDoctors();
      setDoctors(response.data);
    }
    fetchDoctors();
  }, []);

  return (
    <Container className="mt-5 mb-5" id="specialists">
      <h1 className="display-5 fw-bold text-center mb-5">Our Doctors</h1>
      <Row className="g-5">
        {doctors.map((doctor, idx) => (
          <Col key={idx} className="d-flex justify-content-evenly align-items-center">
            <DoctorCard doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
