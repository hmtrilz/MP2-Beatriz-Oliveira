import React from "react"
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Details from "./components/Details"
import Home from "./components/Home"
import StaticPage from "./components/StaticPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Can I dry my clothes outside? </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/staticpage">StaticPage</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="staticpage" element={<StaticPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
