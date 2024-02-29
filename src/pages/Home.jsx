import React, { useContext, useEffect }  from 'react'
import '../styles/Home.css'
import HeaderHome from '../components/HeaderHome.jsx'
import ContainerCountries from '../containers/ContainerCountries.jsx'
import { ContextGetCountryDB } from '../context/ContextGetCountryDB.jsx'

const Home = () => {
  const { handleResetCountryDB } = useContext(ContextGetCountryDB);

  useEffect(() => {
    handleResetCountryDB();
  }, [])

  return (
    <main className='home'>
      <HeaderHome />
      <ContainerCountries />
    </main>
  )
}

export default Home