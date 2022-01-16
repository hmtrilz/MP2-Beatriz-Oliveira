import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherAction } from "../redux/slices/weatherSlices"
import Countries from "../countries.json"
import ReactPaginate from "react-paginate"
import {
  CountryContainer,
  Container,
  SearchBar,
  SearchContainer,
  SearchButton,
  WeatherSide,
  InfoSide,
  TopContainer,
  WeatherContent,
  WeatherContainer,
  InfoContent,
} from "./styles/Details.styled"

function Details() {
  //pagination
  const [countries /*setCountries*/] = useState(Countries.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const countriesPerPage = 10
  const pagesVisited = pageNumber * countriesPerPage
  //arrendondar as paginas
  const pageCount = Math.ceil(countries.length / countriesPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayCountries = countries
    .slice(pagesVisited, pagesVisited + countriesPerPage)
    .map((item) => {
      return (
        <div key={item.country}>
          <h5> {item.city}</h5>
        </div>
      )
    })

  //select state from store
  const state = useSelector((state) => state)

  //search city
  const [city, setCity] = useState("Aveiro")

  //select metric system
  const [unit, setUnit] = useState("metric")

  //dispatch action

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeatherAction({ city, unit }))
  }, [unit])
  // console.log(process.env.REACT_APP_API_KEY)

  const { weather, loading, error } = state

  return (
    <div>
      {/* search bar */}
      <TopContainer>
        <h2>Can I put my clothes outside?</h2>
        <SearchContainer>
          <SearchBar
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Procura a tua cidade"
          />
          <SearchButton
            onClick={() => dispatch(fetchWeatherAction({ city }))}
            type="button"
          >
            Search
          </SearchButton>
        </SearchContainer>
      </TopContainer>
      {/* content */}
      {loading ? (
        <h1> Loading.. </h1>
      ) : error ? (
        <h1>{error?.message}</h1>
      ) : (
        !loading && (
          <Container>
            <WeatherContainer>
              <WeatherSide>
                <WeatherContent>
                  <h>
                    {weather?.name}, {weather?.sys?.country}
                  </h>
                  {/* actually weather */}
                  <img
                    src={
                      !loading &&
                      `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
                    }
                    alt="/"
                  />
                  <h2> {weather?.weather[0].main} </h2>

                  {/* temperatura */}
                  <h2>
                    {Math.ceil(Number(weather?.main.temp))}{" "}
                    {unit === "metric"
                      ? "º C"
                      : unit === "imperial"
                      ? "F"
                      : "K"}
                  </h2>
                  <button onClick={() => setUnit("metric")}>Celcius</button>
                  <button onClick={() => setUnit("imperial")}>
                    Fahrenheit
                  </button>
                  <button onClick={() => setUnit("standard")}>Kelvin</button>
                </WeatherContent>
              </WeatherSide>
              <InfoSide>
                <InfoContent>
                  <p>{weather?.name}</p> {/* weather name */}
                  <p>{weather?.sys.country}</p> {/* weather country*/}
                  <p>{weather?.weather[0].description}</p>{" "}
                  {/* weather description */}
                  <p>{Math.ceil(Number(weather?.main.temp))}</p>{" "}
                  {/* weather temp */}
                  <p>{weather?.main?.humidity} % </p> {/* weather humidity */}
                  <p>{weather?.wind?.speed} </p> {/* weather humidity */}
                </InfoContent>
              </InfoSide>
            </WeatherContainer>
          </Container>
        )
      )}
      {/* contries list */}
      <CountryContainer>
        {displayCountries}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButton"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </CountryContainer>
    </div>
  )
}

export default Details
