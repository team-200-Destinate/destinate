import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.scss";
import ButtonRM from "../../../../components/ButtonRM/ButtonRM";
import ButtonMN from "../../../../components/ButtonMN/ButtonMN";
import { Link } from "react-router-dom";

function News() {
  const [newsData, setNewsData] = useState([]);

  const newsApiUrl = process.env.REACT_APP_NEWS_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(newsApiUrl);
        setNewsData(response.data.data.slice(1, 4));
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const getDefaultImageUrl = () => {
    return "https://images.pexels.com/photos/2792025/pexels-photo-2792025.jpeg?auto=compress&cs=tinysrgb&w=600";
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <section className="news-section">
      <div className="container mx-auto p-1">
        <h2 className="news-heading text-3xl">News</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-14">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="max-w-lg mx-auto shadow-lg flex flex-col bg-slate-50 rounded-lg"
            >
              <img
                src={news.image || getDefaultImageUrl()}
                alt={news.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="flex-grow flex flex-col justify-between">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{news.title}</div>
                  <p className="text-gray-700 text-base">
                    {truncateDescription(news.description, 50)}
                  </p>
                </div>
                <div className="px-6 pb-4">
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 rounded-full"
                  >
                    <ButtonRM />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="button-more">
        <Link to="/news" className="link">
          <ButtonMN />
        </Link>
      </div>
    </section>
  );
}

export default News;
