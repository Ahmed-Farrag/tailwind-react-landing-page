import { Fragment } from "react";
import Landing from "../Components/Landing";
import Features from "../Components/Features";
import StayProductive from "../Components/StayProductive";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
    </Fragment>
  );
};

export default Home;
