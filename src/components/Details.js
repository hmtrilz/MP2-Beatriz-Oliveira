import { useSelector } from "react-redux";

function Details() {
  //select state from store

  const state = useSelector((state) => state);

  const { weather, loading, error } = state;

  return (
    <div>
      {/* content */}
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="/"
        />
        {/* actually weather */}
        <h2> {weather?.weather[0].main} </h2>
        {/* temperatura */}
        <h2>{Math.ceil(Number(weather?.main.temp))}º C</h2>

        <button>Celcius</button>
        <button>Fahrenheit</button>
        <button>Kelvin</button>

        {/* country */}
        <h2>
          {weather?.name} {weather?.sys?.country}{" "}
        </h2>
        <p>
          The weather condition in {weather?.name}, {weather?.sys.country} is
          described as : {weather?.weather[0].description} with a temperature of
          : {Math.ceil(Number(weather?.main.temp))} ºC and a humidity of :{" "}
          {weather?.main?.humidity} %
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Details;
