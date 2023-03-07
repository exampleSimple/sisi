import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import List from "./components/List/List";
const App = () =>  {
  const [ theme, setTheme ] = useState('dark');
  const [ list, setList ] = useState([]);

  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    fetchPokemons(setList)
  }, [])

console.log(list, 'list');
  return (
    <div className={`app ${theme}`}>
      <h2>Pokemons</h2>
      <button
      onClick={toogleTheme}
      className="button">
        Change Theme
      </button>
      <div className="pokemonCardContainer">
        <List list={list}/>
      </div>
    </div>
  );
}

export default App;