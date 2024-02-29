import { createContext, useEffect, useState } from "react";

export const ContextGetCountriesDB = createContext();

export function ProviderGetCountriesDB({ children }) {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [codeContinent, setCodeContinent] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (codeContinent === "All") {
      fetch("https://server-express-one.vercel.app/countries")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    } else {
      fetch(`https://server-express-one.vercel.app/countries/continent/${codeContinent}`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }
  }, [codeContinent, update]);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [filter, countries]);

  const contextValues = {
    countries: filteredCountries,
    setFilter,
    setCodeContinent,
    update,
    setUpdate
  };

  return (
    <ContextGetCountriesDB.Provider value={contextValues}>
      {children}
    </ContextGetCountriesDB.Provider>
  );
}
