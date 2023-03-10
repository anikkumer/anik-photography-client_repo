import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(
      `https://anik-photography-server.vercel.app/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl">{Orders.length}</h2>
    </div>
  );
};

export default Orders;
