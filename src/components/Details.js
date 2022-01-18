import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherAction } from "../redux/slices/weatherSlices"
import Countries from "../countries.json"
import ReactPaginate from "react-paginate"
import "./styles/Pagination.css"
import GlobalStyles from "./styles/Global.styles"
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
  WeatherIcon,
  UnitButton,
  CityTitle,
  Temp,
  WeatherText,
  FaceCard,
  Title,
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
        <div key={item.city}>
          <div>
            <FaceCard onClick={() => setCity(item.city)}>
              <div>{item.city}</div>
            </FaceCard>
          </div>
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
  }, [city, unit])
  // console.log(process.env.REACT_APP_API_KEY)

  const { weather, loading, error } = state

  return (
    <div>
      <GlobalStyles />
      {/* search bar */}
      <TopContainer>
        <Title>Can I dry my clothes outside?</Title>
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
                  <CityTitle>
                    {weather?.name} {weather?.sys?.country}{" "}
                  </CityTitle>
                  {/* actually weather */}
                  <WeatherIcon
                    src={
                      !loading &&
                      `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
                    }
                    alt="/"
                  />
                  <Temp>
                    {Math.ceil(Number(weather?.main.temp))}{" "}
                    {unit === "metric"
                      ? "º C"
                      : unit === "imperial"
                      ? "F"
                      : "K"}
                  </Temp>
                  <WeatherText> {weather?.weather[0].main} </WeatherText>

                  {/* temperatura */}

                  <UnitButton onClick={() => setUnit("metric")}>
                    Celcius
                  </UnitButton>
                  <UnitButton onClick={() => setUnit("imperial")}>
                    {" "}
                    Fahrenheit
                  </UnitButton>
                  <UnitButton onClick={() => setUnit("standard")}>
                    Kelvin
                  </UnitButton>
                </WeatherContent>
              </WeatherSide>

              <InfoSide>
                <InfoContent>
                  <p>Description: {weather?.weather[0].description}</p>
                  <p>Low: {weather?.main?.temp_min} % </p>
                  <p>High: {weather?.main?.temp_max} % </p>
                  {/* weather temp */}
                  <p>Humidity: {weather?.main?.humidity} % </p>
                  <p>Pressure: {weather?.main?.pressure} % </p>
                  {/* weather humidity */}
                  <p> Wind: {weather?.wind?.speed} mph </p>{" "}
                  {/* weather humidity */}
                </InfoContent>
              </InfoSide>
            </WeatherContainer>
          </Container>
        )
      )}
      {/* contries list */}
      <CountryContainer>{displayCountries}</CountryContainer>

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
    </div>
  )
}

export default Details
