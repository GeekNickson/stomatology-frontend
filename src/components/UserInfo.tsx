import { Card, ListGroup } from 'react-bootstrap';
import ListGroupInfo from './ListGroupInfo';
import { faAt, faNotesMedical, faPhone, faUser, faUserNurse, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { User } from '../shared/model/user.model';
import { useEffect, useState } from 'react';
import { Doctor } from '../shared/model/doctor.model';
import { doctorService } from '../shared/service/doctor.service';

interface IUserInfoProps {
  user: User;
}

const UserInfo: React.FunctionComponent<IUserInfoProps> = ({ user }) => {
  const [doctor, setDoctor] = useState<Doctor>();

  useEffect(() => {
    doctorService
      .getDoctor(user.id)
      .then((res) => res.data)
      .then(setDoctor);
  }, [user.id]);

  return (
    <Card bg="light" className="shadow rounded">
      <Card.Header className="display-6 fw-normal p-4 text-center">
        {doctor ? 'Information about Doctor' : 'Information about User'}
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroupInfo text={user?.firstName + ' ' + user?.lastName} icon={doctor ? faUserNurse : faUser} />
          <ListGroupInfo text={user?.email} icon={faAt} />
          {doctor && (
            <>
              <ListGroupInfo text={doctor?.phoneNumber} icon={faPhone} />
              <ListGroupInfo text={doctor?.specialty.name} icon={faNotesMedical} />
              <ListGroupInfo text={doctor?.experience.toString()} icon={faVoteYea} />
            </>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
