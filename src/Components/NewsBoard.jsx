import { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [category]);

  return (
    <div className="bg-dark text-light p-4">
      <h2 className="text-center">
      <span class="badge bg-danger">Latest News</span>
      </h2>
      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available at the moment.</p>
      )}
    </div>
  );
};
