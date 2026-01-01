import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";

function News({ simplified }) {
  const {
    data: cryptoNews,
    isFetching,
    error,
  } = useGetCryptosNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews, "data", error);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <h2>News</h2>
    </div>
  );
}

export default News;
