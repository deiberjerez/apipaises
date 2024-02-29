import React from 'react'

const ContinentFilter = ({ setCodeContinent, handleActive }) => {
  return (
    <aside className="filterContainer">
            <div className="filterHeader">
              <h3>Filter by continent</h3>
              <h3 className="clear" onClick={() => {setCodeContinent("All"), handleActive()}}>Clear</h3>
            </div>
            <div className="filterBody">
              <article className="filterItem" onClick={() => {setCodeContinent("EU"), handleActive()}}>
                <img src="https://i.postimg.cc/LscTrZzX/Europe.png" alt="europe" />
                <h4>Europe</h4>
              </article>
              <article className="filterItem" onClick={() => {setCodeContinent("SA"), handleActive()}}>
                <img src="https://i.postimg.cc/SxKD84Sy/South-America.png" alt="south america" />
                <h4>South America</h4>
              </article>
              <article className="filterItem" onClick={() => {setCodeContinent("NA"), handleActive()}}>
                <img src="https://i.postimg.cc/L6Dxn5MC/North-America.png" alt="north america" />
                <h4>Nort America</h4>
              </article>
              <article className="filterItem" onClick={() => {setCodeContinent("AS"), handleActive()}}>
                <img src="https://i.postimg.cc/jjwcghnm/Asia.png" alt="asia" />
                <h4>Asia</h4>
              </article>
              <article className="filterItem" onClick={() => {setCodeContinent("OC"), handleActive()}}>
                <img src="https://i.postimg.cc/VkH4WhvX/Oceania.png" alt="oceania" />
                <h4>Oceania</h4>
              </article>
              <article className="filterItem" onClick={() => {setCodeContinent("AF"), handleActive()}}>
                <img src="https://i.postimg.cc/XqcQK7Bv/Africa.png" alt="africa" />
                <h4>Africa</h4>
              </article>
            </div>
          </aside>
  )
}

export default ContinentFilter