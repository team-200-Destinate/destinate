import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './newsInfo.scss';
import Button from "../../../../components/Button3/Button";


function NewsInfo() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tourism&apiKey=282f8276459c4589aa2119c793f455d9'
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <section className="newsInfo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-14  ">
      {newsData.map((news, index) => (
        <div key={index} className="max-w-sm mx-auto rounded shadow-lg flex flex-col backdrop-blur-lg ">
          <img src={news.urlToImage} alt={news.title} className="w-full h-40 object-cover" />
          <div className="flex-grow flex flex-col justify-between">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{news.title}</div>
              <p className="text-gray-700 text-base">{news.description}</p>
            </div>
            <div className="px-6 pb-4">
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold py-2 px-4 rounded-full"
              >
                <Button />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default NewsInfo;
