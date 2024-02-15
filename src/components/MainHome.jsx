import { useEffect, useState } from "react"

const MainHome = ({inputValue}) => {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/countries")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, [])

  console.log(inputValue);

  return (
    <section className="MainHome">
      {countries.map((country)=>{
        if (country.name.toLowerCase().startsWith(inputValue.toLowerCase())) {
          return <h2 key={country.code}>{country.name}</h2>
        }else {
          return null
        }
      })}
    </section>
  )
}

export default MainHome
