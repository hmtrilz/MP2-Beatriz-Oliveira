import React from "react"
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./components/Details"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
