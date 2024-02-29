import React, { useContext, useEffect } from "react";
import { usePostCountryBD } from "../hooks/usePostCountryBD";
import { useDeleteCountryDB } from "../hooks/useDeleteCountryDB";
import { ContextGetCountryAPI } from "../context/ContextGetCountryAPI";
import { ContextGetCountryDB } from "../context/ContextGetCountryDB";
import useUpdateCountryDB from "./../hooks/useUpdateCountryDB";

const FormInputs = ({ typeRender }) => {
  const { countryAPI, handleResetCountry } = useContext(ContextGetCountryAPI);
  const { countryDB, handleResetCountryDB } = useContext(ContextGetCountryDB);

  useEffect(() => {
    handleResetCountry();
    handleResetCountryDB();
  }, []);

  const { handlePostCountry } = usePostCountryBD();
  const { handleDeleteCountry } = useDeleteCountryDB();
  const { handleUpdateCountry } = useUpdateCountryDB();

  const handleSubmit = (e) => {
    if (typeRender === "create") {
      handlePostCountry(countryAPI);
    } else {
      handleUpdateCountry(countryDB, {
        code: e.target[0].value,
        name: e.target[1].value,
        capital: e.target[2].value,
        continent: {
          code: countryDB.continent?.code,
          name: e.target[3].value,
        },
        currency: e.target[5].value,
        native: countryDB.native,
        phone: countryDB.phone,
        languages: [
          {
            name: e.target[4].value,
          },
        ],
        states: [
          {
            name: countryDB.states?.[0]?.name,
          },
        ],
      });
    }
    e.preventDefault();
  };

  return (
    <form className="formInputs" onSubmit={(e) => handleSubmit(e)}>
      {typeRender === "create" ? (
        <section className="inputsFile">
          <div className="inputs">
            <label htmlFor="codeCountry">Code</label>
            <input
              id="codeCountry"
              type="text"
              value={countryAPI === null ? "" : countryAPI.code}
              disabled
            />
            <label htmlFor="nameCountry">Name</label>
            <input
              id="nameCountry"
              type="text"
              value={countryAPI === null ? "" : countryAPI.name}
              disabled
            />
          </div>
          <div className="inputs">
            <label htmlFor="capitalCountry">Capital</label>
            <input
              id="capitalCountry"
              type="text"
              value={countryAPI === null ? "" : countryAPI.capital}
              disabled
            />
            <label htmlFor="continentCountry">Continent</label>
            <input
              id="continentCountry"
              type="text"
              value={countryAPI === null ? "" : countryAPI.continent?.name}
              disabled
            />
          </div>
        </section>
      ) : (
        <section className="inputsFile">
          <div className="inputs">
            <label htmlFor="codeCountry">Code</label>
            <input
              id="codeCountry"
              type="text"
              defaultValue={countryDB.error ? "" : countryDB.code}
            />
            <label htmlFor="nameCountry">Name</label>
            <input
              id="nameCountry"
              type="text"
              defaultValue={countryDB.error ? "" : countryDB.name}
            />
          </div>
          <div className="inputs">
            <label htmlFor="capitalCountry">Capital</label>
            <input
              id="capitalCountry"
              type="text"
              defaultValue={countryDB.error ? "" : countryDB.capital}
            />
            <label htmlFor="continentCountry">Continent</label>
            <input
              id="continentCountry"
              type="text"
              defaultValue={countryDB.error ? "" : countryDB.continent?.name}
            />
          </div>
          <div className="inputs">
            <label htmlFor="languageCountry">Language</label>
            <input
              id="languageCountry"
              type="text"
              defaultValue={
                countryDB.error ? "" : countryDB.languages?.[0]?.name
              }
            />
            <label htmlFor="currencyCountry">Currency</label>
            <input
              id="currencyCountry"
              type="text"
              defaultValue={countryDB.error ? "" : countryDB.currency}
            />
          </div>
        </section>
      )}
      <section className="buttons">
        <button
          type="reset"
          className="btnSearch btn1"
          onClick={
            typeRender === "create"
              ? handleResetCountry
              : () => {
                  handleDeleteCountry(countryDB), handleResetCountryDB();
                }
          }
        >
          {typeRender === "create" ? "Reset" : "Delete"}
        </button>
        <button type="submit" className="btnSearch btn2">
          {typeRender === "create" ? "Add" : "Update"}
        </button>
      </section>
    </form>
  );
};

export default FormInputs;
