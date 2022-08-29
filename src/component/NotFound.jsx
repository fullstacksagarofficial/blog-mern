import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404  my-5 commonPadding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-7 justify-content-center m-auto text-center">
              <div className="four_zero_four_bg"></div>

              <div className="contant_box_404">
                <h3 className="h2 mt-5">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
