import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-black">Service</p>
        <h2 className="text-5xl font-semibold">Services Area</h2>
        <p>
          I'm a pro photography website developer and my work is all about
          distinctive quality and long-term thinking, through an array of
          web-design & services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
