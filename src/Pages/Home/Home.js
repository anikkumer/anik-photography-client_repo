import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "../About/About";
import ExtraServices from "../ExtraServices/ExtraServices";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <ExtraServices></ExtraServices>
    </div>
  );
};

export default Home;
