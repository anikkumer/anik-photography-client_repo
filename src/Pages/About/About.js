import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-1/2">
        <img
          src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-42 h-42"
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Anik Kumer is one of the most influential fashion photographers in
            the world. <br /> In addition to photographing famous faces, I'm the
            founder of a museum, a creative director, and more. <br />I became a
            powerful influencer in the photography community. I worked with
            renowned companies like Harper’s BAZAAR.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
