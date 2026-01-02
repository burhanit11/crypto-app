import React, { useEffect, useState } from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icons from "../assets/logo.PNG";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

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

  const menuPatterns = {
    home: [/^\/$/],
    crypto: [/^\/cryptocurrencies$/, /^\/crypto\/.+/],
    exchanges: [/^\/exchanges$/],
    news: [/^\/news$/],
  };

  const selectedKey =
    Object.keys(menuPatterns).find((key) =>
      menuPatterns[key].some((pattern) => pattern.test(path))
    ) || "home";

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
        <Button
          className="menu-control-container "
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark" items={items} selectedKeys={[selectedKey]} />
      )}
    </div>
  );
}

export default Navbar;
