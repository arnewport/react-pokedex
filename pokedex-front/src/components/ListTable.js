import { useEffect, useState } from "react";

function ListTable() {

    // variables
    const LIMIT = 10;
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    const JP_URL = "http://localhost:8080/api/pokemon/";
    let position = 1;
    let [pokeLinks, japaneseLinks, linkArray] = [[], [], []];
    const createPokeLinks = () => Array.from({ length: LIMIT }, (_, i) => URL + (position + i));
    const createJapaneseLinks = () => Array.from({ length: LIMIT }, (_, i) => JP_URL + (position + i));
    // let pokeLinks = createPokeLinks();
    // let japaneseLinks = createJapaneseLinks();
    // let linkArray = [pokeLinks, japaneseLinks];
    
    // state
    const [loading, setLoading] = useState(true);
    const [pokemonArray, setPokemonArray] = useState([]);
    
    // update link arrays based on value of "position"
    // this may need to be turned into state...
    const updateLinks = () => {
        pokeLinks = createPokeLinks();
        japaneseLinks = createJapaneseLinks();
        linkArray = [pokeLinks, japaneseLinks];
    }

    // create initial values on first render
    useEffect(() => {
        updateLinks();
    }, []);

    // fetch pokemon data to return
    useEffect(() => {
        const fetchPokemon = async () => {

        // fetch data from link
        const fetchData = async (link) => {
            const response = await fetch(link)
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(
                    new Error(`Unexpected 
                    status code: ${response.status}`)
                );
            }
        }

        // fetch data from our link arrays
        const [pokeLinkResponse, japaneseLinkResponse] = await Promise.all([
                Promise.all(pokeLinks.map(fetchData)), 
                Promise.all(japaneseLinks.map(fetchData))
            ])

        // process the responses into a usable format
        const pokeArr = await Promise.all(pokeLinkResponse.map(r => r.json()));
        const japaneseArr = await Promise.all(japaneseLinkResponse.map(r => r.json()));

        // add the Japanese names to the primary Pokemon array
        pokeArr.forEach((item, index) => item.japaneseName = japaneseArr[index].japaneseName);

        // update the Pokemon array we are returning with the fetched and processed data
        setPokemonArray(pokeArr)

        setLoading(false);
    }

    // may or may not be required
    // if (pokeLinks.length > 0 && japaneseLinks.length > 0) {
        fetchPokemon();
    // }

    }, [linkArray]);

    // return pokemon data to components
    return [pokemonArray, loading];

}

export default ListTable();
