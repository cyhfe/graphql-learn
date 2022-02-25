/** @jsxImportSource @emotion/react */
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, News, Exchanges, CryptoCurrencies } from "../pages"
import { css } from "@emotion/react"
function Main() {
  return (
    <div
      css={css`
        padding: 1rem;
      `}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptoCurrencies" element={<CryptoCurrencies />} />
      </Routes>
    </div>
  )
}

export default Main
