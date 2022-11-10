import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Difference between SQL and NoSQL?
      </div>
      <div className="collapse-content">
        <p>
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
