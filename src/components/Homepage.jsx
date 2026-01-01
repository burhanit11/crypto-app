import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";

const Homrpage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  if (isFetching) return <p>Loading...</p>;
  const stats = data?.data?.stats;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={stats?.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(stats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cap" value={millify(stats?.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(stats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(stats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show More </Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={10} />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto Currencies News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">Show More </Link>
        </Typography.Title>
      </div>
      <News simplified={10} />
    </>
  );
};

export default Homrpage;
