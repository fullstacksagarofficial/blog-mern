import React, {useEffect} from "react";
import ServiceData from "../../Api/service";
import { Link } from "react-router-dom";

const Service = (props) => {
  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
  useEffect(() => {
    topLoadingBar();
    // to change page title
    document.title = "Services";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="we-offer-area text-center bg-gray mt-5 commonPadding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h4>
                What we <span>Offer</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row our-offer-items less-carousel">
          {ServiceData.map((curElem) => {
            const { id, slug, name, icon, description } = curElem;
            return (
              <React.Fragment key={id}>
                <div className="col-md-4 col-sm-6 equal-height">
                  <Link to={slug}>
                    <div className="item">
                      <i className={icon}></i>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
