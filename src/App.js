/** @jsxImportSource @emotion/react */

import React, { useState } from "react"
import { Navbar } from "./components"
import { Layout } from "antd"
const { Header, Footer, Sider, Content } = Layout

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
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
