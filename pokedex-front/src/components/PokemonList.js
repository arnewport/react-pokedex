import { useEffect, useState } from "react";

import PokemonTable from "./PokemonTable";

function PokemonList() {

    const [pokemonLinks, setPokemonLinks] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchPokemonLinks = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
        if (response.ok) {
            setPokemonLinks(await response.json());
        } else {
            setPokemonLinks([]);
        }
        setLoading(false); // Set loading to false when API call is complete
    };

    useEffect(() => {
        fetchPokemonLinks();
    }, []);

    return (
        <>
            {loading ? (
                <div>
                </div> 
            ) : (
                <PokemonTable pokemonLinks={pokemonLinks.results} />
            )}
        </>
    );
}

export default PokemonList;