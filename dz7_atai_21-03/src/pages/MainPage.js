import React from 'react'
import { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import List from "../components/List/List";
import Pogination from "../components/Pogination/Pogination";
function MainPage() {
    const [ theme, setTheme ] = useState('dark');
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ offset, setOffset ] = useState(5);
    const [ limit, setLimit ] = useState(5);
    const [ page, setPage ] = useState(1);
    const [ pageCount, setPageCount ] = useState();
    const toogleTheme  = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
    }
    const changePage = (type) => {
      if (type === 'next'){
        if(page >= pageCount) return
          setOffset(value => value+=limit);
          setPage(value => value+=1);
          console.log(page)
      }else{
        if (offset <= limit) return
          setOffset(value => value-=limit);
          setPage(value => value-=1);
      }
    }
  
    useEffect(() => {
      fetchPokemons(limit,offset).then((data) => {setPokemonList(data.results); setPageCount(Math.ceil(data.count / limit))})
    }, [offset,limit]);
    useEffect(()=> console.log(limit), [limit])
    return (
      <div className={`app`}>
        <div className='header'></div>
        <h2>Pokemons</h2>
        {/* <button
        onClick={toogleTheme}
        className="button">
          Change Theme
        </button> */}
        <div className='showCount'>
            <div>Show</div>
            <select value={limit} onChange={(event) => {setLimit(parseInt(event.target.value)); setOffset(5); setPage(1)}}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            </select>
        </div>
        <div className="pokemonCardContainer">
          <List list={pokemonList}/>
        </div>
        <Pogination changePage={changePage} page={page} pageCount={pageCount}/>
      </div>
    );
}

export default MainPage