import { faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export interface FooterProps {}

const StyledContainer = styled(Container)`
  min-height: 10vh;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: #f8f9fa;
  transition: all 0.3s ease-in-out;
`;

const VkIcon = styled(StyledIcon)`
  &:hover {
    transform: scale(1.1);
    color: #45668e;
  }
`;

const InstaIcon = styled(StyledIcon)`
  &:hover {
    transform: scale(1.1);
    color: #f46a3f;
  }
`;

const TwitterIcon = styled(StyledIcon)`
  &:hover {
    transform: scale(1.1);
    color: #5da9dd;
  }
`;

const Footer: FC<FooterProps> = () => {
  return (
    <StyledContainer fluid className="bg-dark sticky-bottom">
      <Container className="py-3">
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <VkIcon icon={faVk} className="mx-4" />
          </a>
          <a href="https://www.instagram.com/?hl=ru" target="_blank" rel="noopener noreferrer">
            <InstaIcon icon={faInstagram} className="mx-4" />
          </a>
          <a href="https://twitter.com/?lang=ru" target="_blank" rel="noopener noreferrer">
            <TwitterIcon icon={faTwitter} className="mx-4" />
          </a>
        </div>
        <p className="text-center mt-4 text-white">
          Toothy &copy; <strong>All Rights Reserved</strong>
        </p>
      </Container>
    </StyledContainer>
  );
};

export default Footer;
