import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import BlogCard from "./BlogCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import BlogSidebar from "./BlogSidebar";


const Blogs = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  const capatalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // life cycle method (run after render method)
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(20);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedata = await data.json();
    props.setProgress(60);
    setArticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
    // console.log(url)
  };

  useEffect(() => {
    updateNews();

    // to change page title
    document.title = `${capatalizeString(props.category)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.ApiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center mb-4 mt-5 commonPadding">
        Latest News on&nbsp;
        <span className="text-secondary">
          {capatalizeString(props.category)}
        </span>
        {loading && <Spinner />}
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-2">
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
            >
              {articles.map((element) => {
                return (
                  <div className="col-md-12" key={element.url}>
                    <BlogCard
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
          <div className="col-md-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

Blogs.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',

}
Blogs.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default Blogs;
