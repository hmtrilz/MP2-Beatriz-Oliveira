import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherAction } from "../redux/slices/weatherSlices"

function Home() {
  //search city
  const [city, setCity] = useState("aveiro")
  //dispatch action
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeatherAction("new york"))
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
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="/"
          />
          <h2> {weather?.weather[0].main} </h2> {""} {/* actually weather */}
          <h2>
            {" "}
            {Math.ceil(Number(weather?.main.temp))} {""}
          </h2>
          {/* temperatura */}
          <h2>
            {weather?.name} {weather?.sys?.country}{" "}
          </h2>
          {/* country */}
          <p>
            The weather condition in {weather?.name}, {weather?.sys.country} is
            described as : {weather?.weather[0].description} with a temperature
            of : {Math.ceil(Number(weather?.main.temp))} ºC and a humidity of :{" "}
            {weather?.main?.humidity} %
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
            alt="/"
          />
        </div>
      )}
    </div>
  )
}

export default Home
