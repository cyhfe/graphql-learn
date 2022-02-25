/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"

import { ReactComponent as Logo } from "../images/logo.svg"
import { Link } from "react-router-dom"
import { Menu } from "antd"

import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from "@ant-design/icons"

const menus = [
  {
    key: 1,
    icon: <HomeOutlined />,
    to: "/home",
    menu: "Home",
  },
  {
    key: 2,
    icon: <FundOutlined />,
    to: "/cryptocurrencies",
    menu: "Cryptocurrencies",
  },
  {
    key: 3,
    icon: <MoneyCollectOutlined />,
    to: "/exchanges",
    menu: "Exchanges",
  },
  {
    key: 4,
    icon: <BulbOutlined />,
    to: "/news",
    menu: "News",
  },
]

function Navbar({ collapsed }) {
  console.log(collapsed)
  return (
    <div className="navbar">
      <Link
        to="/"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          margin-bottom: 1rem;
        `}
      >
        <Logo width={48} />
        {!collapsed && (
          <h1
            css={css`
              color: white;
              margin-left: 8px;
              margin-bottom: 0;
            `}
          >
            Crypto Currency
          </h1>
        )}
      </Link>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {menus.map((menu) => (
          <Menu.Item icon={menu.icon} key={menu.key}>
            <Link to={menu.to}>{menu.menu}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Navbar
