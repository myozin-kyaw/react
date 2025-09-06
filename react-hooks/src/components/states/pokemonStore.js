let state = {pokemons: []} // initial state
let listeners = [] // List of subscribers

// function to fetch data and update the state
export const fetchPokeons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    state = {pokemons: data.results};
    listeners.forEach((listener) => listener()) // Notify all of the subscribers
}

export const getState = () => state;

export const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
        listeners = listeners.filter((l) => l !== listener);
    }
}