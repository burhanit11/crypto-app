import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import Loader from "./Loader";
import { useGetExchangesQuery } from "../services/cryptoExchangeApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  return (
    <>
      <Row style={{ fontWeight: "bold", marginBottom: 10 }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h BTC Volume</Col>
        <Col span={6}>Trust Rank</Col>
        <Col span={6}>Country</Col>
      </Row>

      {data?.map((exchange) => (
        <Col span={24} key={exchange.id}>
          <Collapse>
            <Panel
              showArrow={false}
              header={
                <Row align="middle">
                  <Col span={6}>
                    <Avatar src={exchange.image} />
                    <Text strong style={{ marginLeft: 10 }}>
                      {exchange.name}
                    </Text>
                  </Col>
                  <Col span={6}>{millify(exchange.trade_volume_24h_btc)}</Col>
                  <Col span={6}>{exchange.trust_score_rank ?? "N/A"}</Col>
                  <Col span={6}>{exchange.country || "N/A"}</Col>
                </Row>
              }
            >
              <a href={exchange.url} target="_blank" rel="noreferrer">
                Visit Exchange Website
              </a>
            </Panel>
          </Collapse>
        </Col>
      ))}
    </>
  );
};

export default Exchanges;
