import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, News, Exchanges, CryptoCurrencies } from "../pages"
function Main() {
  return (
    <div>
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
