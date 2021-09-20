import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Doctors from './Doctors';
import Feedbacks from './Feedbacks';
import Promo from './Promo';
import Services from './Services';
import ServicesMeta from './ServicesMeta';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const el = hash && document.getElementById(hash.substr(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Promo />
      <Services />
      <Doctors />
      <Feedbacks />
      <ServicesMeta />
    </>
  );
};

export default Home;
