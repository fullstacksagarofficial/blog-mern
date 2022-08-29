import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <>
    <div id="sidebar-nav">
      <ul className="/list-group">
        <Link to="/blogs/business">
          <li className="list-group-item">Business</li>
        </Link>
        <Link to="/blogs/sports">
          <li className="list-group-item">Sports</li>
        </Link>
        <Link to="/blogs/general">
          <li className="list-group-item">General</li>
        </Link>
        <Link to="/blogs/technology">
          <li className="list-group-item">Technology</li>
        </Link>
       
      </ul>
      </div>
    </>
  );
};

export default BlogSidebar;
