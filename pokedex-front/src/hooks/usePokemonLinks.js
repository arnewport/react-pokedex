import { useEffect, useState } from "react";

export default function usePokemonLinks() {
  const LIMIT = 10;
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const JP_URL = "http://localhost:8080/api/pokemon/";
  let position = 1;

  const [loading, setLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState([]);
  const [linkArray, setLinkArray] = useState({ pokeLinks: [], japaneseLinks: [] });

  const createLinks = (baseURL) =>
    Array.from({ length: LIMIT }, (_, i) => baseURL + (position + i));

  useEffect(() => {
    // Set the initial link arrays
    setLinkArray({
      pokeLinks: createLinks(URL),
      japaneseLinks: createLinks(JP_URL)
    });
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      const fetchData = async (link) => {
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        return response.json();
      };

      try {
        const [pokeLinkResponse, japaneseLinkResponse] = await Promise.all([
            Promise.all(linkArray.pokeLinks.map(fetchData)), 
            Promise.all(linkArray.japaneseLinks.map(fetchData))
        ]);

        const combinedData = pokeLinkResponse.map((item, index) => ({
          ...item,
          japaneseName: japaneseLinkResponse[index].japaneseName
        }));

        setPokemonArray(combinedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [linkArray]);

  return [pokemonArray, loading];
}
