import React, {useEffect} from "react";
import FaqData from "../../Api/faq";
import Accordation from "../accordation/Accordation";

const Faq = (props) => {
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
    <section className="mt-5 mb-5 commonPadding">
      <div className="container">
        <div className="row faq">
          <div className="col-md-4">
            <img
              src={window.location.origin + "/images/faq.svg"}
              alt="FAQ"
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 faq-right mt-4">
            <div className="row">
              <div className="faq-body">
                {FaqData.map((curElem) => {
                  const { id, q, a } = curElem;
                  return (
                    <React.Fragment key={id}>
                      <details>
                        <summary>{q}</summary>
                        <p>{a}</p>
                      </details>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* //accordation */}
              <Accordation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
