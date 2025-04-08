import { Fragment } from "react";
import Landing from "../Components/Landing";
import Features from "../Components/Features";
import Porductive from "../Components/Porductive";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <Porductive />
      <Testimonials />
      <GetStarted />
    </Fragment>
  );
};

export default Home;
