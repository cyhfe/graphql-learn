/** @jsxImportSource @emotion/react */

import { useState } from "react"
import { Navbar, Main } from "./components"
import { Layout, Typography } from "antd"
import { Link } from "react-router-dom"
import { css } from "@emotion/react"

const { Footer, Sider, Content } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="app">
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed((collapsed) => !collapsed)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Navbar collapsed={collapsed} />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content>
            <Main />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Typography.Text type="secondary">
              Copyright © 2022
              <Link
                to="/"
                css={css`
                  color: #91d5ff;
                  margin-left: 1rem;
                `}
              >
                Crypto Currency Inc.
              </Link>{" "}
              <br />
              All Rights Reserved.
            </Typography.Text>
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
