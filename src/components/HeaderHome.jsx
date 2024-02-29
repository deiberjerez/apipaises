import React, { useContext, useState } from "react";
import { ContextGetCountriesDB } from "../context/ContextGetCountriesDB.jsx";
import ContinentFilter from "./ContinentFilter.jsx";

const HeaderHome = () => {
  const [active, setActive] = useState(false);
  const { setFilter, setCodeContinent } = useContext(ContextGetCountriesDB);

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="headerHome">
        <section className="sectionSearch">
          <h1>Countries</h1>
          <input
            type="text"
            placeholder="Write the country you want to see"
            onChange={handleSearch}
          />
        </section>
        <button className="btnSearch" onClick={handleActive}>
          🔍 <span>Search</span>
        </button>

        {active && (
          <ContinentFilter setCodeContinent={setCodeContinent} handleActive={handleActive}/>
        )}
      </header>
    </>
  );
};

export default HeaderHome;
