import React from "react";
import "../style/icons.css";

const Weather = props => {
  if (!props.city) {
    return (
      <div className="location-size">
        No weather. Please enter city and country.
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="column">
          <div className={`${props.icon}`}></div>
        </div>
        <div className="column">
          {props.city && props.country && (
            <p className="location-size">
              <span style={{ color: "#fccc7e" }}>Location:</span> {props.city},{" "}
              {props.country}
            </p>
          )}
          {props.temperature && (
            <p className="degree-size">
              {Math.trunc(props.temperature - 273.15)} &#176;C
            </p>
          )}
          {props.humidity && (
            <p className="other-size">Humidity: {props.humidity}%</p>
          )}
          {props.description && (
            <p className="other-size" style={{ textTransform: "capitalize" }}>
              Conditions: {props.description}
            </p>
          )}
        </div>
      </div>
    );
  }
};

export default Weather;
