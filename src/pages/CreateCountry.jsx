import React, { useState } from "react";
import useConsultCountry from "../hooks/useConsultCountry";

const CreateCountry = () => {
  const [inputValue, setInputValue] = useState("");
  const { country, setCode, setCountry } = useConsultCountry();

  const handleConsult = () => {
      setCode(inputValue.toUpperCase())
  }

  const handleAddCountry = () => {
    fetch("http://localhost:3001/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country)
    })
  }



  return (
    <section>
      <h2>Hello! this the view</h2>
      <input type="text" placeholder="enter the country code" onBlur={(e) => setInputValue(e.target.value)} maxLength={2}/>
      <button onClick={handleConsult}>Consult</button>
      <input type="text" placeholder="code" value={country == null ? "" : country.code}/>
      <input type="text" placeholder="name" value={country == null ? "" : country.name}/>
      <input type="text" placeholder="capital" value={country == null ? "" : country.capital}/>
      <input type="text" placeholder="continent" value={country == null ? "" : country.continent?.name}/>
      <button onClick={() => setCountry(null)}>Clean</button>
      <button onClick={handleAddCountry}>Create</button>
    </section>
  );
};

export default CreateCountry;