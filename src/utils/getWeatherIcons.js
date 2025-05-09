import cloudy from "../../public/images/cloudy.jpg";
import snowy from "../../public/images/snowy.jpg";
import stormy from "../../public/images/stormy.jpg";
import sunny from "../../public/images/sunny.jpg";
import clear from "../../public/images/clear.jpg";
import mist from "../../public/images/mist.jpg";

const validCodes = [
  "01d",
  "02d",
  "03d",
  "04d",
  "09d",
  "10d",
  "11d",
  "13d",
  "50d",
  "01n",
  "02n",
  "03n",
  "04n",
  "09n",
  "10n",
  "11n",
  "13n",
  "50n",
];
export const getWeatherIcons = (iconCode) => {
  if (validCodes.includes(iconCode)) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  } else {
    ("Icon not found");
  }
};

const sunnypgn = sunny;
const clearpgn = clear;
const cloudypgn = cloudy;
const stormypgn = stormy;
const snowypgn = snowy;
const mistpgn = mist;

const backgroundByIcon = {
  "01d": sunnypgn,
  "01n": sunnypgn,
  "02d": sunnypgn,
  "02n": sunnypgn,
  "03d": clearpgn,
  "03n": clearpgn,
  "04d": cloudypgn,
  "04n": cloudypgn,
  "09d": stormypgn,
  "09n": stormypgn,
  "10d": stormypgn,
  "10n": stormypgn,
  "11d": stormypgn,
  "11n": stormypgn,
  "13d": snowypgn,
  "13n": snowypgn,
  "50d": mistpgn,
  "50n": mistpgn,
};

export const dynamicBg = (iconCode) => {
  const backgroundUrl = backgroundByIcon[iconCode] || cloudy; // default fallback
  return {
    backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white",
    padding: "2rem",
  };
};
