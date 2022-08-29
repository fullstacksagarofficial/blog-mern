import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../App";
const Navbar = () => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
// eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    console.log(state);
    if (state) {
      return (
        <>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "about" ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "faq" ? "nav-link active" : "nav-link"
              }
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "blogs" ? "nav-link active" : "nav-link"
              }
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "service" ? "nav-link active" : "nav-link"
              }
              to="/service"
            >
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "contact" ? "nav-link active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "profile" ? "nav-link active" : "nav-link"
              }
              to="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "logout" ? "nav-link active" : "nav-link"
              }
              to="/logout"
            >
              Logout
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "about" ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "faq" ? "nav-link active" : "nav-link"
              }
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "blogs" ? "nav-link active" : "nav-link"
              }
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "service" ? "nav-link active" : "nav-link"
              }
              to="/service"
            >
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "contact" ? "nav-link active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={
                splitLocation[1] === "register" ? "nav-link active" : "nav-link"
              }
              to="/register"
            >
              Register
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bgtheme shadow fixed-top mb-20">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MERN
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <div className="hamburger-toggle">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <RenderMenu />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
