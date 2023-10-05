import usePokemonLinks from '../hooks/usePokemonLinks';

function PokemonTable() {

    const [pokemonArray, loading] = usePokemonLinks("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
   
if (loading) {
    return null;
}
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
                    {pokemonArray.map(p => (
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

export default PokemonTable;