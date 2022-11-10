import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/226/158/non_2x/moonlit-dock-on-water-free-photo.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className="text-5xl font-bold text-center text-white">
            Creative Photography & <br />
            Designer
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 w-2/5 top-1/2">
          <p className=" text-2xl text-center text-white">
            Photography in design can be more impactful than graphics or
            illustration.
          </p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://media.istockphoto.com/id/1141458658/photo/an-old-man-throws-out-a-weed-that-was-harvested-from-his-garden.jpg?s=612x612&w=0&k=20&c=8XlYNwbpg1W1PYRKF1R3Apyce_J5SdYbnJEAv8cUZhk="
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
            <h1 className="text-5xl font-bold text-center text-white">
              Creative Photography & <br />
              Designer
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 w-2/5 top-1/2">
            <p className=" text-2xl text-center text-white">
              Photography in design can be more impactful than graphics or
              illustration.
            </p>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://media.istockphoto.com/id/1124826836/photo/newlyweds-on-the-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=uxB3llYeczLczznWDt-mJdxlo483NV0FNV0N48Y1E48="
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className="text-5xl font-bold text-center text-white">
            Creative Photography & <br />
            Designer
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 w-2/5 top-1/2">
          <p className=" text-2xl text-center text-white">
            Photography in design can be more impactful than graphics or
            illustration.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className="text-5xl font-bold text-center text-white">
            Creative Photography & <br />
            Designer
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 w-2/5 top-1/2">
          <p className=" text-2xl text-center text-white">
            Photography in design can be more impactful than graphics or
            illustration.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
