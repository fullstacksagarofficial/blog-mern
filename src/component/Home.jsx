import React, {useEffect} from "react";
import Hero from './Hero';

const Home = (props) => {
  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
  useEffect(() => {
    topLoadingBar();
    // to change page title
    document.title = "Mern App";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
  
    
      <Hero />
    </>
  );
};

export default Home;
