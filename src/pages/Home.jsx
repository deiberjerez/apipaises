import { useState } from "react"
import HeaderHome from "../components/HeaderHome"
import MainHome from "../components/MainHome"

const Home = () => {

  const [inputValue, setInputValue] = useState("")


  return (
    <main className="Home">
      <HeaderHome setInputValue={setInputValue}/>
      <MainHome inputValue={inputValue}/>
    </main>
  )
}

export default Home
