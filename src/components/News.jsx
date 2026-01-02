import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import Loader from "./Loader";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;

// Helper function to limit words
const truncateWords = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data, isFetching, error } = useGetCryptoNewsQuery({
    category: newsCategory,
    limit: 5,
  });

  const { data: cryptos } = useGetCryptosQuery();

  if (isFetching) return <Loader />;
  if (error) return <p>Error loading news</p>;

  const newsList = data?.Data;

  console.log(newsList, "news");

  return (
    <Row gutter={[32, 32]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            value={newsCategory}
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>

            {cryptos?.data?.coins?.map((coin, i) => (
              <Select.Option key={i} value={coin.name}>
                {coin.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {newsList?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news?.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>
                  {/* {news?.title > 100
                  ? `${news.title.substing(0, 20)}...`
                  : news.title} */}
                  {truncateWords(news.title, 10)}
                </Title>
                {news?.imageurl && (
                  <img
                    src={news.imageurl}
                    alt="news_img"
                    style={{
                      maxHeight: "100px",
                      maxWidth: "100px",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </div>
              <p>{truncateWords(news?.body, 20)}</p>
              <div
                className="provider-container"
                style={{
                  alignItems: "center",
                }}
              >
                <div>
                  <Avatar src={news?.source_info.img} />
                  <Text style={{ marginLeft: 3, fontSize: 12 }}>
                    {news?.source_info.name}
                  </Text>
                </div>
                <Text style={{ fontSize: 10 }}>
                  {moment(news.published_on).fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
