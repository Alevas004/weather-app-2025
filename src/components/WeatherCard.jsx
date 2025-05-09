import { useEffect, useState } from "react";
import { getWeatherIcons } from "../utils/getWeatherIcons";

const URL_ICONS = "https://openweathermap.org/img/wn/";
const URL_END = "@2x.png";

const WeatherCard = ({ weather }) => {
  const [icon, setIcon] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    setIcon(getWeatherIcons(weather.icon));
  }, [weather]);

  const celsius = weather.temp;
  const feels = weather.feels_like;
  const toFahrenheit = (celsius * 9) / 5 + 32;
  const toFahrenheit2 = (feels * 9) / 5 + 32;

  const temperature = isCelsius
    ? `${celsius.toFixed(1)} °C`
    : `${toFahrenheit.toFixed(1)} °F`;
  const btnGradesCorF = isCelsius ? "°F" : "°C";

  const temperature2 = isCelsius
    ? `${feels.toFixed(1)} °C`
    : `${toFahrenheit2.toFixed(1)} °F`;

  const visibility = (weather.visibility / 1000).toFixed(1);

  return (
    <div className="flex items-center justify-center h-full m-10 ">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/clear-day.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          border: "1px solid white",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div>
          <h2 className="text-[2rem] ">
            <div className="flex">
              <h2>
                {weather.name}{" "}
                <span className="text-[2rem]">{weather.country}</span>
              </h2>
              <img className="w-15 h-15" src={icon} alt={weather.icon} />
            </div>
          </h2>
        </div>
        <div className="flex justify-center w-40 border-1 rounded-lg">
          <q className="text-[1.4rem]">{weather.description}</q>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <div className="flex flex-col ">
            <img
              className="w-32 h-32 md:w-40 md:h-40"
              src={icon}
              alt={weather.icon}
            />
          </div>
          <div>
            <p className="text-white">
              <span className="text-gray-400">Wind Speed </span>
              {weather.wind} m/h
            </p>
            <p className="text-white">
              <span className="text-gray-400">Clouds </span> {weather.clouds}%
            </p>
            <p className="text-white">
              <span className="text-gray-400">Pressure </span>{" "}
              {weather.pressure} hPa
            </p>
            <p className="text-white">
              <span className="text-gray-400">Humidity </span>{" "}
              {weather.humidity}%
            </p>
            <p className="text-white">
              <span className="text-gray-400">Feels like </span> {temperature2}
            </p>
            <p className="text-white">
              <span className="text-gray-400">Visibility</span> {visibility} km
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-5">
          <h3 className="text-center text-xl ">
            <strong>{temperature}</strong>
          </h3>
          <button className="mt-3" onClick={() => setIsCelsius(!isCelsius)}>
            Change to {btnGradesCorF}
          </button>
        </div>
        <div className="flex items-center justify-center flex-row gap-5">
          <p className="text-white">
            {" "}
            <span className="text-gray-400">Sunrise</span> {weather.sunrise}
          </p>
          <p className="text-white">
            <span className="text-gray-400">Sunset</span> {weather.sunset}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WeatherCard;
