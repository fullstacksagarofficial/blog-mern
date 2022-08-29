import React, { useState } from "react";

const AccordationCard = ({ q, a }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item py-3 px-3">
          <h6 className="accordion-header" id="headingOne">
            {q}{" "}
            <button type="button" className="float-end btn btn-sm btn-outline-dark shadow-none d-flex justify-content-center" onClick={() => setshow(!show)}>
              {show ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
            </button>
          </h6>

          {show &&   <div className="my-3">{a}</div>}
        </div>
      </div>
    </>
  );
};

export default AccordationCard;
