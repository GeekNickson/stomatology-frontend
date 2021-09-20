import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Doctor } from '../shared/model/doctor.model';
import { User } from '../shared/model/user.model';
import { doctorService } from '../shared/service/doctor.service';

interface IUserCardProps {
  user: User;
}

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  const [doctor, setDoctor] = useState<Doctor>();

  useEffect(() => {
    doctorService
      .getDoctor(user.id)
      .then((res) => res.data)
      .then(setDoctor);
  }, [user.id]);

  return (
    <Card bg="light" className="shadow rounded">
      <Card.Img variant="top" src={process.env.REACT_APP_API_URL + 'images/' + user?.profilePictureUrl} />
      <Card.Body className="d-flex flex-column align-items-center justify-between">
        <h3 className="fs-3 fw-normal p-2">{user?.firstName + ' ' + user?.lastName}</h3>
        {doctor?.specialty && <h4 className="fs-3 fw-normal p-2">{doctor.specialty.name}</h4>}
      </Card.Body>
    </Card>
  );
};

export default UserCard;
