import React from "react";

const Weather = props => {
  return (
    <div>
      {props.city}
      {props.country}
      {props.temperature}
      {props.humidity}
      {props.description}
    </div>
  );
};

export default Weather;
