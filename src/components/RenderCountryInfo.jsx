import React, { useContext } from "react";
import { ContextRenderCountryInfo } from "../context/ContextRenderCountryInfo.jsx";
import useGetImageCountry from "../hooks/useGetImageCountry.jsx";

const RenderCountryInfo = () => {
  const { country, setRender } = useContext(ContextRenderCountryInfo);
  const { imageUrl } = useGetImageCountry(country.name);

  return (
    <aside className="renderCountryInfo">
      <div className="close">
        <span onClick={() => setRender(false)}>X</span>
      </div>
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
      <div className="countryInfo2">
        <h3 className="h3Info"><span>Capital:</span> {country?.capital}</h3>
        <h3 className="h3Info">
          <span>Languages:</span> {country?.languages?.[0]?.name}
        </h3>
        <h3 className="h3Info"><span>Currency:</span> {country?.currency}</h3>
        <h3 className="h3Info"><span>Native:</span> {country?.native}</h3>
        <h3 className="h3Info"><span>Phone:</span> +{country?.phone}</h3>
      </div>
      <div className="countryInfo3">
        <h3 className="h3Info"><span>States:</span></h3>
        <div className="states">
       {country?.states?.map((state) => <p>{state.name}</p>)}
        </div>
      </div>
    </aside>
  );
};

export default RenderCountryInfo;
