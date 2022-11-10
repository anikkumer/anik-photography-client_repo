import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { _id, service_name, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleOrderNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: service_name,
      price,
      email,
      phone,
      message,
      name,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handleOrderNow}>
        <h2 className="text-4xl">{service_name}</h2>
        <h4 className="text-3xl">Price: {price}</h4>
        <div className="grid grid-cols-1 grid-cols-2 gap-4">
          <input
            name="first name"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            name="last name"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your phone"
            required
            className="input input-bordered input-secondary w-full "
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            required
            defaultValue={user?.email}
            className="input input-bordered input-secondary w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Bio"
          required
        ></textarea>
        <input className="btn btn-primary" type="submit" value="Order Now" />
      </form>
    </div>
  );
};

export default MyReviews;
