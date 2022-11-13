import React, { useState } from "react";
import { searchPokemon} from "../../api";
import styles from "./SearchBar.css"

const SearchBar = () => {
    const [search, setSearch] = useState("dito")
    const [pokemon, setPokemon] = useState()
    

    const onChangeHandler = (e) => {
        console.log("pokemon ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
       
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }

    return (
        <div className="searchBar-container">
            <div className="searchBar">
                <input placeholder="Buscar Pokémon" onChange={onChangeHandler} />
            </div>
            <div>
                <button className="searchBar-btn" onClick={onButtonClickHandler} >Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Tipo:
                    {pokemon.types.map((t, index) =>
                    <span key={index}> { t.type.name } </span>
                    )}
                    </div>
                    <div>Peso: {pokemon.weight} Kg</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>

    )
}

export default SearchBar;