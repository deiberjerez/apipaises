const HeaderHome = ({setInputValue}) => {



  return (
    <header className="Header">
        <input type="text" placeholder="Search a country" onChange={(e) => setInputValue(e.target.value)}/>
        <button>Search</button>
    </header>
  )
}

export default HeaderHome 