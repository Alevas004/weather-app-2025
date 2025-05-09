

const LocationBtn = ({ setError, setLocation }) => {
  const handleLocation = () => {
    if (window.navigator.geolocation) {
      const success = ({ coords }) => {
        setLocation({ lat: coords.latitude, lon: coords.longitude });
      };
      const error = () => {
        setError("Debes permitir el acceso para ver tu clima");
      };
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setError("Tu navegador no soporta la geolocalizacion");
    }
  };
  return (
    <div className="flex">
      <p className="w-60">Wanna see the weather in your current position?</p>
      <button onClick={handleLocation}>Find me!</button>
    </div>
  );
};

export default LocationBtn;
