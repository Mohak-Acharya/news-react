import React from "react";

const NewsCard = ({ img, title, description, publishedAt, author }) => {
  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="row no-gutters my-4">
          <div className="col-sm-5">
            <img className="card-img" src={img} height="230px" width="200px"></img>
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <a href="https://www.india.com/">{author}</a> <b>|</b>{" "}
              <div style={{ display: "inline-block" }}>{publishedAt} IST</div>
              <p className="card-text">{description}...</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NewsCard;
