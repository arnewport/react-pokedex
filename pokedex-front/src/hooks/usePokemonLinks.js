import { useEffect, useState } from "react";

export default function usePokemonLinks(position) {

  // all we need to do is create a hook or something to manipulate position
  // when position changes, call updateLinks
  // updateLinks will update the state and re-render altered components
  // then all of the data presented on the screen will be updated
  // so whatever buttons we create (for pagination or something) will be
  // manipulating position when pressed

  // position will probably have to be turned into an object or state or something

  // variables
  const LIMIT = 10;
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const JP_URL = "http://localhost:8080/api/pokemon/";

  // state
  const [loading, setLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [linkArray, setLinkArray] = useState({ pokeLinks: [], japaneseLinks: [] });

  // creates an array of links
  // array length = "LIMIT"
  // array values range from "position" to "position + LIMIT - 1"
  const createLinks = (baseURL) =>
    Array.from({ length: LIMIT }, (_, i) => baseURL + (position + i));

  // set the initial link arrays
  const updateLinks = () => {
    setLinkArray({
        pokeLinks: createLinks(URL),
        japaneseLinks: createLinks(JP_URL)
      });
  }

  useEffect(() => {
    updateLinks();
  }, []);

  // fetch pokemon data to return
  useEffect(() => {
    const fetchPokemon = async () => {

      // fetch data from link
      const fetchData = async (link) => {
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        return response.json();
      };

      try {
        // fetch data from our link arrays
        const [pokeLinkResponse, japaneseLinkResponse] = await Promise.all([
            Promise.all(linkArray.pokeLinks.map(fetchData)), 
            Promise.all(linkArray.japaneseLinks.map(fetchData))
        ]);

        // add the Japanese names to the primary Pokemon array
        const combinedData = pokeLinkResponse.map((item, index) => ({
          ...item,
          japaneseName: japaneseLinkResponse[index].japaneseName
        }));

        // update the Pokemon array we are returning with the fetched
        setPokemonArray(combinedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [linkArray]);

  // return pokemon data to components
  return [pokemonArray, loading];
}

