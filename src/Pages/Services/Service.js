import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = (props) => {
  const { _id, service_name, image, description, price, rating } =
    props.service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        {/* <p>{description}</p> */}
        {description.length > 200 ? (
          <p>
            {description.slice(0, 100) + "..."}
            <Link className="text-sky-500" to={`/services/${_id}`}>
              Read More
            </Link>
          </p>
        ) : (
          <p>{description}</p>
        )}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${price}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
