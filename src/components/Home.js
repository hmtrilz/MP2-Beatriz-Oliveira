import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherAction } from "../redux/slices/weatherSlices"
import Details from "./Details"

function Home() {
  //search city
  const [city, setCity] = useState("Aveiro")
  //dispatch action
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeatherAction("Aveiro"))
  }, [])
  // console.log(process.env.REACT_APP_API_KEY)

  //select state from store

  const state = useSelector((state) => state)
  // console.log(state)

  const { weather, loading, error } = state

  return (
    <div>
      {/* search bar */}
      <div>
        <h2>Home</h2>
        <h2>Posso meter a roupa a secar lá fora?</h2>
        <input
          onClick={() => dispatch(fetchWeatherAction(city))}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Procura a tua cidade"
        ></input>
        <button
          onClick={() => dispatch(fetchWeatherAction(city))}
          type="button"
        >
          Search
        </button>
      </div>
      {/* content */}
      {loading ? (
        <h1> Calma aí campeão que está a carregar </h1>
      ) : error ? (
        <h1>{error?.message}</h1>
      ) : (
        <Details></Details>
      )}
    </div>
  )
}

export default Home
