import { useEffect, useState } from "react";

export default function usePokemonLinks(url) {
    const [pokemonLinks, setPokemonLinks] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    const [pokemonArray, setPokemonArray] = useState([]);

    useEffect(() => {
        const fetchPokemon = () => {
            // Function to fetch data from a single URL
            const fetchData = async (linkObject) => {
                console.log(linkObject.url);
                try {
                  const response = await fetch(linkObject.url);
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  const data = await response.json();
                  return data;
                } catch (error) {
                  console.error('Error fetching data:', error);
                  throw error;
                }
            };
        
            // Use Promise.all to fetch data from all URLs concurrently
            Promise.all(pokemonLinks.map(fetchData))
              .then((data) => {
                // dataArray will be an array of objects fetched from each URL
                setPokemonArray(data);
              })
              .catch((error) => {
                console.error('Error fetching data from one or more URLs:', error);
              }).finally(() => setLoading(false));
            }
        if (pokemonLinks.length > 0) {
            fetchPokemon();
        }
      }, [pokemonLinks]); // Empty dependency array to run this effect only once on component mount


    const fetchPokemonLinks = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setPokemonLinks(data.results);
        } else {
            setPokemonLinks([]);
        }
        setLoading(false); // Set loading to false when API call is complete
    };

    useEffect(() => {
        fetchPokemonLinks();
    }, []);

    return [pokemonArray, loading]

}