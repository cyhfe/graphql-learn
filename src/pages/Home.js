import React from "react"
import { Typography, Row, Col, Statistic } from "antd"
const { Title } = Typography
function Home() {
  return (
    <div className="home">
      <Title level={2}>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap:" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={5} />
        </Col>
      </Row>
    </div>
  )
}

export default Home
