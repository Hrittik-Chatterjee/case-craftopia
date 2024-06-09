import CaseDemos from "../component/CaseDemos/CaseDemos";
import LandingPage from "../component/LandingPage";
import Testimonial from "../component/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Testimonial />
      <CaseDemos />
    </div>
  );
};

export default Home;
