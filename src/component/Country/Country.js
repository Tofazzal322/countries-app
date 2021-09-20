import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, region, capital, population } = props.country;
  return (
    <div className="country">
      <h1>Country Name: {name}</h1>
      <img src={flag} alt="flag" />
      <p>Region: {region} </p>
      <p>
        {" "}
        Capital: {capital} Population: {population}{" "}
      </p>
    </div>
  );
};

export default Country;
