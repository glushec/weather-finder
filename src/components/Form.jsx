import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City" required />
      <input type="text" name="country" placeholder="Country" required />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
