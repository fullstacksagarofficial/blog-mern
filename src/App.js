import React, { createContext, useState, useReducer } from "react";
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes, Navigate
} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Contact from './component/contact/Contact';
import Service from './component/service/Service';
import Faq from './component/faq/Faq';
import Blogs from './component/Blogs';
import NotFound from './component/NotFound';
import LoadingBar from 'react-top-loading-bar'
import Register from "./component/register/Register";
import Profile from "./component/profile/Profile";
import Logout from "./component/logout/Logout";

import { initialState, reducer } from "./reducer/userReducer";
import Mongodb from "./component/service/Mongodb";
import Expressjs from "./component/service/Expressjs";
import ReactJs from "./component/service/ReactJs";
// 1. contextAPI 
export const UserContext = createContext();
function App(props) {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <>

      <UserContext.Provider value={{ state, dispatch }}>

        <Router>
          <LoadingBar
            color='#de854d'
            height={3}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Navbar />
          <Routes>

            <Route exact path='/' element={<Home setProgress={setProgress} />} />
            <Route exact path='/about' element={<About setProgress={setProgress} />} />
            <Route exact path='/contact' element={<Contact setProgress={setProgress} />} />
            <Route exact path='/service' element={<Service setProgress={setProgress} />} />
            <Route exact path='/faq' element={<Faq setProgress={setProgress} />} />
            <Route exact path='/register' element={<Register setProgress={setProgress} />} />
            <Route exact path='/profile' element={<Profile setProgress={setProgress} />} />
            <Route exact path='/logout' element={<Logout setProgress={setProgress} />} />
            <Route exact path='/service/mongodb' element={<Mongodb setProgress={setProgress} />} />
            <Route exact path='/service/expressjs' element={<Expressjs setProgress={setProgress} />} />
            <Route exact path='/service/react' element={<ReactJs setProgress={setProgress} />} />

            <Route exact path='/blogs' element={<Blogs setProgress={setProgress} ApiKey="a4a45956845a4a7aa506f14cc1358955" key="home" pageSize={pageSize} country="in" category="general" />} />

            <Route exact path='/blogs/business' element={<Blogs setProgress={setProgress} ApiKey="a4a45956845a4a7aa506f14cc1358955" key="business" pageSize={pageSize} country="in" category="business" />} />

            <Route exact path='/blogs/general' element={<Blogs setProgress={setProgress} ApiKey="a4a45956845a4a7aa506f14cc1358955" key="general" pageSize={pageSize} country="in" category="general" />} />

            <Route exact path='/blogs/sports' element={<Blogs setProgress={setProgress} ApiKey="a4a45956845a4a7aa506f14cc1358955" key="hsportsome" pageSize={pageSize} country="in" category="sports" />} />

            <Route exact path='/blogs/technology' element={<Blogs setProgress={setProgress} ApiKey="a4a45956845a4a7aa506f14cc1358955" key="technology" pageSize={pageSize} country="in" category="technology" />} />

            <Route exact path='/404' element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>

          <Footer />
        </Router>
      </UserContext.Provider>
    </>

  );
}

export default App;
