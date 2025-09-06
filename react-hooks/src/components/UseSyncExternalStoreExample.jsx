import { useEffect, useState, useSyncExternalStore } from "react";
import { getState, subscribe, fetchPokeons } from "./states/pokemonStore";

export default function UseSyncExternalStoreExample() {
    // const [pokemons, setPokemon] = useState([]);
    // useEffect(() => {
    //     const fetchPokeons = async () => {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    //         const data = await response.json();
    //         setPokemon(data.results);
    //     }

    //     fetchPokeons();
    // }, []);

    const { pokemons } = useSyncExternalStore(subscribe, getState)

    useEffect(() => {
        fetchPokeons()
    }, [])
    
    return (
        <div>
            <h1>useSyncExternalStore() Example</h1>
            <div>
                <h2>Pokemon List</h2>
                <ul>
                    {pokemons.length === 0 ? (<div>Loading...</div>) : (
                        pokemons.map((pokemon) => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))   
                    )}
                </ul>
            </div>
        </div>
    )
}