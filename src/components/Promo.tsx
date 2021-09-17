import { FC } from 'react';
import { Button, Carousel, CarouselItem, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledButton } from './DoctorCard';
export interface PromoProps {}

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 92vh;
`;

const StyledCarouselItem = styled(CarouselItem)`
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(24, 24, 25, 0.3), rgba(24, 24, 25, 0.3));
  }
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  z-index: 1;
`;

const StyledCenteredCarouselCaption = styled(StyledCarouselCaption)`
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
`;

const Promo: FC<PromoProps> = () => {
  return (
    <Carousel>
      <StyledCarouselItem>
        <StyledImage className="d-block w-100" src="/static/carousel-1.jpg" alt="stomatology" />
        <StyledCenteredCarouselCaption>
          <h3 className="display-2">Our Doctors care about you and deliever the very best possible results</h3>
        </StyledCenteredCarouselCaption>
        <StyledCarouselCaption>
          <StyledButton variant="primary" className="me-1">
            About Us
          </StyledButton>
          <StyledButton variant="dark" className="ms-1">
            Our Doctors
          </StyledButton>
        </StyledCarouselCaption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <StyledImage className="d-block w-100" src="/static/carousel-2.jpg" alt="toothbrushes" />
        <StyledCenteredCarouselCaption>
          <h3 className="display-2">We offer and use only professional toothbrushes</h3>
        </StyledCenteredCarouselCaption>
        <StyledCarouselCaption>
          <StyledButton variant="primary" className="me-1">
            About Us
          </StyledButton>
          <StyledButton variant="dark" className="ms-1">
            Our Doctors
          </StyledButton>
        </StyledCarouselCaption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <StyledImage className="d-block w-100" src="/static/carousel-3.jpg" alt="happy" />
        <StyledCenteredCarouselCaption>
          <h3 className="display-2">Our clients are happy with their teeth</h3>
        </StyledCenteredCarouselCaption>
        <StyledCarouselCaption>
          <Button variant="primary" className="me-1">
            About Us
          </Button>
          <Button variant="dark" className="ms-1">
            Our Doctors
          </Button>
        </StyledCarouselCaption>
      </StyledCarouselItem>
    </Carousel>
  );
};

export default Promo;
