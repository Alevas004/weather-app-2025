import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import { Loader } from "./components/Loader";
import WeatherCard from "./components/WeatherCard";
import { dynamicBg } from "./utils/getWeatherIcons";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "60dc8241ae26478a97c4f4b138b5e5b5";
const options = "&units=metric&lang=es";
``;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("bogota");
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeatherByCities();
  }, [city, location]);
  const getWeatherByCities = async () => {
    try {
      const { lat, lon } = location;
      setError(null);
      const res = await axios.get(
        `${BASE_URL}${
          lat !== 0 && lon !== 0 ? `lat=${lat}&lon=${lon}` : `q=${city}`
        }&appid=${API_KEY}${options}`
      );
      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };
      setWeather({
        name: res.data.name,
        country: res.data.sys.country,
        temp: Math.ceil(res.data.main.temp),
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        pressure: res.data.main.pressure,
        visibility: res.data.visibility,
        feels_like: res.data.main.feels_like,
        clouds: res.data.clouds.all,
        sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(
          [],
          timeOptions
        ),
        sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(
          [],
          timeOptions
        ),
      });
      setLoading(false);
    } catch (error) {
      if (error.response?.data?.message || error.message) {
        setError("Ciudad no encontrada");
      }
    }
  };

  return (
    <div style={dynamicBg(weather.icon)}>
      <div className="text-center text-4xl m-10">Weather App</div>

      {/* BUSCADOR POR PAIS */}
      <Search setLocation={setLocation} setCity={setCity} setError={setError} />

      {/* INFO DEL CLIMA EN LA CIUDAD */}
      {loading ? (
        <Loader />
      ) : (
        weather && (
          <>
            <WeatherCard weather={weather} />
          </>
        )
      )}

      {error && { error }}
    </div>
  );
}

export default App;
