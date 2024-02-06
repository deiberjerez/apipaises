import React, { useState } from "react";
import useConsultCountry from "../hooks/useConsultCountry";

const CreateCountry = () => {
  const [inputValue, setInputValue] = useState("");
  const { country, setCode } = useConsultCountry();

  const handleConsult = () => {
      setCode(inputValue.toUpperCase())
  }

  return (
    <section>
      <h2>Hello! this the view</h2>
      <input type="text" placeholder="enter the country code" onBlur={(e) => setInputValue(e.target.value)} maxLength={2}/>
      <button onClick={handleConsult}>Consult</button>
      <input type="text" placeholder="code" value={country?.code}/>
      <input type="text" placeholder="name" value={country?.name}/>
      <input type="text" placeholder="capital" value={country?.capital}/>
      <input type="text" placeholder="continent" value={country?.continent?.name}/>
      <button>Clean</button>
      <button>Create</button>
    </section>
  );
};

export default CreateCountry;
