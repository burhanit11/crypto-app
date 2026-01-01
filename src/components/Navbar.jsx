import React from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icons from "../assets/logo.PNG";

function Navbar() {
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "crypto",
      icon: <FundOutlined />,
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: "exchanges",
      icon: <MoneyCollectOutlined />,
      label: <Link to="/exchanges">Exchanges</Link>,
    },
    {
      key: "news",
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];
  return (
    // <div className="nav-container">
    //   <div className="logo-container">
    //     <Avatar src={icons} size={"large"} />
    //     <Typography.Title level={2} className="logo">
    //       <Link to={"/"}>Cryptoverse</Link>
    //     </Typography.Title>
    //   </div>
    //   <Menu theme="dark">
    //     <Menu.Item icon={<HomeOutlined />}>
    //       <Link to={"/"}>Home</Link>
    //     </Menu.Item>
    //     <Menu.Item icon={<FundOutlined />}>
    //       <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
    //     </Menu.Item>
    //     <Menu.Item icon={<MoneyCollectOutlined />}>
    //       <Link to={"/exchanges"}>Exchanges</Link>
    //     </Menu.Item>
    //     <Menu.Item icon={<BulbOutlined />}>
    //       <Link to={"/news"}>News</Link>
    //     </Menu.Item>
    //   </Menu>
    // </div>
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icons} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>

      <Menu theme="dark" items={items} />
    </div>
  );
}

export default Navbar;
