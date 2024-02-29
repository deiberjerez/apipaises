import React, { useContext } from "react";
import { ContextRenderCountryInfo } from "../context/ContextRenderCountryInfo.jsx";
import useGetImageCountry from "../hooks/useGetImageCountry.jsx";

const CountryCard = ({ country }) => {
  const { setRender, setCountry } = useContext(ContextRenderCountryInfo);
  const {imageUrl} = useGetImageCountry(country.name)

  return (
    <article
      className="countryCard"
      onClick={() => {
        setRender(true), setCountry(country);
      }}
    >
      <img
        className="countryImg"
        src={imageUrl}
        alt=""
      />
      <div className="countryInfo">
        <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="" />
        <div className="countryText">
          <h3>{country?.name}</h3>
          <p>{country?.continent?.name}</p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
