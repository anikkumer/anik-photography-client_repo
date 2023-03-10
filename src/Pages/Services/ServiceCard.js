import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceCard = () => {
  const { _id, service_name, image, description, price, rating } =
    useLoaderData();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${price}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
        <div>
          <Link to={`/myReview/${_id}`}>
            <button className="btn btn-primary">My Reviews</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
