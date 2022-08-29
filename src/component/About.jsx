import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
  useEffect(() => {
    topLoadingBar();
    // to change page title
    document.title = "About";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container my-5 commonPadding">
      <div className="row">
        <div className="col-lg-6">
          <div className="p-5 mt-4">
            <h1 className="display-4">ABOUT MERN STACK</h1>
            <p className="lead">
              Crow's nest schooner ho scallywag hail-shot gabion salmagundi.
              Doubloon careen code of conduct lugsail hulk ye long clothes.{" "}
            </p>
            <Link to="/" className="btn btn-outline-dark">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="w-100 "
            alt="website"
            src={window.location.origin + "/images/about.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
