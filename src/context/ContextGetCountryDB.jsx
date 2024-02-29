import { toast } from "react-toastify";
import { createContext, useState } from "react";

export const ContextGetCountryDB = createContext();

export const ProviderGetCountryDB = ({ children }) => {
  const [countryDB, setCountryDB] = useState({});

  function handleResetCountryDB() {
    setCountryDB({});
  }

  function handleConsult(codeCountry) {
    fetch(`https://server-express-one.vercel.app/countries/country/${codeCountry}`)
      .then((response) => {
        if (!response.ok) {
          toast.error("The country is not found in the database");
        }
        return response.json();
      })
      .then((data) => setCountryDB(data));
  }

  return (
    <ContextGetCountryDB.Provider
      value={{
        countryDB,
        handleConsult,
        handleResetCountryDB,
      }}
    >
      {children}
    </ContextGetCountryDB.Provider>
  );
};
