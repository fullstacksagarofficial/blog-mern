import React from "react";

const BlogCard = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="card mt-2 ">
      <div className="row">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </p>
            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={
              !imageUrl
                ? "https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
