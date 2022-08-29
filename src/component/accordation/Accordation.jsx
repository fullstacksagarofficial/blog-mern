import React, { useState } from "react";
import AccordationCard from "./AccordationCard";
import FaqData from "../../Api/faq";
const Accordation = () => {
  // eslint-disable-next-line
  const [faq, setfaq] = useState(FaqData);
  return (
    <>
      <h4 className="my-4">Accordation</h4>
      {faq.map((curElem) => {
           const { id} = curElem;
        return (
            <AccordationCard key={id} {...curElem} />
        );
      })}
    </>
  );
};

export default Accordation;
