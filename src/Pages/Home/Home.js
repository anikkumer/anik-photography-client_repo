import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "../About/About";
import MyReviews from "../MyReviews/MyReviews";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <MyReviews></MyReviews>
    </div>
  );
};

export default Home;
