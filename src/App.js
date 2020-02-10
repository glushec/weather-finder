import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const App = () => {
  const [temperature, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "7365c610ece7cf388284c5f9d06a5a0b";

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );
    const data = await response.json();
    if (city && country) {
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setHumidity(data.main.humidity);
      setDesc(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setError(null);
    } else {
      setTemp(undefined);
      setCity(undefined);
      setCountry(undefined);
      setHumidity(undefined);
      setDesc(undefined);
      setIcon(undefined);
      setError("Please enter city and country.");
    }
  };

  return (
    <React.Fragment>
      <div className="main">
        <div className="row">
          <div>
            <Title />
          </div>
          <div className="forma">
            <Form getWeather={getWeather} />
            <Weather
              temperature={temperature}
              city={city}
              country={country}
              humidity={humidity}
              description={description}
              icon={icon}
              error={error}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
