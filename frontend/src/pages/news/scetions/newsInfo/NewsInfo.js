import React, { useEffect, useState } from "react";
import axios from "axios";
import "./newsInfo.scss";
import ButtonRM from "../../../../components/ButtonRM/ButtonRM";

function NewsInfo() {
  const [newsData, setNewsData] = useState([]);

const newsApiUrl = process.env.REACT_APP_NEWS_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(newsApiUrl);
        setNewsData(response.data.data.slice(1));
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const getDefaultImageUrl = () => {
    return "https://images.pexels.com/photos/2792025/pexels-photo-2792025.jpeg?auto=compress&cs=tinysrgb&w=600";
  };

  return (
    <section className="newsInfo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-14 px-4 pb-14 ">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="max-w-md mx-auto shadow-lg flex flex-col bg-slate-50 rounded-lg"
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
                {news.description.slice(0, 200)}...
              </p>
            </div>
            <div className="px-6 pb-4">
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold py-2 px-4 rounded-full"
              >
                <ButtonRM />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default NewsInfo;
