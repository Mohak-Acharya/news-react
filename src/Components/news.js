import React from "react";
import newsApi from "../api/newsApi";
import NewsCard from "./newsCard";

class News extends React.Component 
{
  state = { news: [] };
  componentDidMount() 
  {
    this.fetchNews();
  }
  newsRendered = () => 
  {
    const newsRenderer = this.state.news.map(
      ({ title, author, publishedAt, urlToImage, description }) => {
        return (
          <NewsCard
            title={title}
            author={author}
            publishedAt={publishedAt}
            img={urlToImage}
            description={description}
          />
        );
      }
    );

    return newsRenderer;
  };
  fetchNews = async () => {
    const data = await newsApi.get("/top-headlines", {
      params: {
        country: "in",
        // API Key Here!
        apiKey: "3c6422e2ed82402487937f5d5356e7b4",
      },
    });
    const news = data.data.articles;
    this.setState({ news });
    console.log(news);
  };
  render() {
    return (
      <div className="container bcontent my-5">
        <h2 className="mb-5">
          <center>News Displayer</center>
        </h2>
        {this.newsRendered()}
      </div>
    );
  }
}

export default News;
