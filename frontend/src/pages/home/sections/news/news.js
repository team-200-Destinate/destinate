import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./news.scss";
import Button from "../../../../components/Button3/Button";
import ButtonMore from "../../../../components/ButtonMore/ButtonMore";
import { Link } from "react-router-dom";

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tourism&apiKey=282f8276459c4589aa2119c793f455d9"
        );
        setNewsData(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news-heading">News</h2>
        <div className="card-grid">
          {newsData.map((article, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="card-inner">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className=" card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    className="align-self-end mt-auto"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      {/*         <Link to="/news" className="link">News</Link>
 */}
      </div>
        <div className="button-more"><Link to="/news" className="link"><ButtonMore/> </Link></div>
    </section>
  );
}

export default News;
