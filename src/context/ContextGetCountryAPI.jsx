import { createContext, useEffect, useState } from "react";

export const ContextGetCountryAPI = createContext();

export const ProviderGetCountryAPI = ({ children }) => {
  const [countryAPI, setCountryAPI] = useState({});
  const [code, setCode] = useState("");
  useEffect(() => {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query Country($code: ID!) {
          country(code: $code) {
            code
            name
            capital
            continent {
              code
              name
            }
            currency
            native
            phone
            languages {
              name
            }
            states {
              name
            }
          }
        }
        `,
        variables: { code: code },
      }),
    })
      .then((res) => res.json())
      .then((data) => setCountryAPI(data.data.country))
      .catch((error) => console.log(error));
  }, [code]);

  const handleResetCountry = () => {
    setCountryAPI(null);
  }

  return (
    <ContextGetCountryAPI.Provider
      value={{
        countryAPI,
        handleResetCountry,
        setCode,
      }}
    >
      {children}
    </ContextGetCountryAPI.Provider>
  );
};
