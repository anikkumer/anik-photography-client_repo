import React from "react";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("ErrorPage");
  return (
    <div>
      <h1>Sorry Page not Found</h1>
    </div>
  );
};

export default ErrorPage;
