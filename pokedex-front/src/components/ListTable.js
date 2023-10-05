import { useEffect, useState } from "react";

function ListTable() {

    const LIMIT = 10;
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    let position = 1;
    const urlArray = () => Array.from({ length: LIMIT }, (_, i) => URL + (position + i));

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        const fetchPokemon = async (link) => {
            const response = await fetch(link)
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(
                    new Error(`Unexpected status code: ${response.status}`)
                );
            }
        }

        Promise.all(urlArray().map(fetchPokemon))
        .then((data) => {
            setPokemon(data)
            .catch((error) => {
                console.error('Error fetching data from one or more URLs:', error);
              });
        });

    }, []); // May or may not need the dependency array

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map(p => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.id}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    );

}

export default ListTable();
