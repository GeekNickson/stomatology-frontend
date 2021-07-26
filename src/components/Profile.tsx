import { FC, useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../shared/hooks/hooks';
import { fetchUserdata } from '../shared/store/slices/profile-slice';

export interface ProfileProps {}

interface ProfileParams {
  id: string;
}

const StyledAvatar = styled(Image)`
  width: 8rem;
  height: 8rem;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  &::after {
    content: ':';
  }
`;

const Profile: FC<ProfileProps> = () => {
  const params = useParams<ProfileParams>();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);

  useEffect(() => {
    dispatch(fetchUserdata(Number(params.id)));
  }, [dispatch, params.id]);

  return (
    <Container className="mt-5 d-flex align-items-center justify-content-center">
      <Card>
        <Card.Header as="h3" className="text-center">
          Profile
        </Card.Header>
        <Card.Body>
          <Row className="g-5">
            <Col>
              <StyledAvatar
                src={process.env.REACT_APP_API_URL + 'images/' + user?.profilePictureUrl}
                roundedCircle
                thumbnail
              />
              <div className="d-flex flex-column justify-content-center">
                <p className="text-center mb-3">
                  {user?.firstName} {user?.lastName}
                </p>
                <Button variant="success" className="mb-3">
                  Contact
                </Button>
              </div>
            </Col>
            <Col>
              <StyledLabel>E-mail</StyledLabel>
              <p>{user?.email}</p>
              <StyledLabel>First Name</StyledLabel>
              <p>{user?.firstName}</p>
              <StyledLabel>Last Name</StyledLabel>
              <p>{user?.lastName}</p>
              <StyledLabel>Phone Number</StyledLabel>
              <p>{user?.phoneNumber}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
