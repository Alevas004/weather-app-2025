import React, { useState } from "react";
import LocationBtn from "./LocationBtn";

const Search = ({ setLocation, setCity, setError }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation({ lat: 0, lon: 0 });
    setCity(searchCity);
    setSearchCity("");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="
        border-1 p-2"
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Search city.."
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <LocationBtn setLocation={setLocation} setError={setError} />
    </div>
  );
};

export default Search;
