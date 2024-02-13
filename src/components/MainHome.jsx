import { useEffect, useState } from "react"

const MainHome = () => {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/countries")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, [])

  console.log(countries);

  return (
    
    <section className="MainHome">
      {countries.map((country)=>{
        return <h2>{country.name}</h2>
      })}
    </section>
  )
}

export default MainHome
