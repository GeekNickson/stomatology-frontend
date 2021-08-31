import Doctors from './Doctors';
import Promo from './Promo';
import Services from './Services';
import ServicesMeta from './ServicesMeta';

const Home = () => {
  return (
    <>
      <Promo />
      <Services />
      <Doctors />
      <ServicesMeta />
    </>
  );
};

export default Home;

