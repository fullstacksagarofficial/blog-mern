import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="container my-5 commonPadding">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="w-100 " alt="front" width="100%"
              src={window.location.origin + '/images/website-design.png'}
            />
          </div>
          <div className="col-lg-6">
            <div className="p-5 mt-4">
              <h1 className="display-4">LEARN MERN STACK</h1>
              <p className="lead">
                Crow's nest schooner ho scallywag hail-shot gabion salmagundi.
                Doubloon careen code of conduct lugsail hulk ye long clothes.{" "}
              </p>
              <Link to="/contact" className="heroBtn mt-1">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
