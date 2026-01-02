import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  if (!coinHistory?.history?.length) return <p>No history data available</p>;

  const coinPrice = coinHistory.history.map((h) => Number(h.price));
  const coinTimestamp = coinHistory.history.map((h) =>
    new Date(h.timestamp).toLocaleDateString()
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: `${coinName} Price Chart` },
    },
    scales: {
      y: { beginAtZero: false },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Col>
          <Title level={5}>Change: {coinHistory.change || 0}%</Title>
          <Title level={5}>
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
