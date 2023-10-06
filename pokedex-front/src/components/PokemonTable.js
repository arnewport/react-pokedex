import usePokemonLinks from '../hooks/usePokemonLinks';

function PokemonTable() {

    const [pokemonArray, loading] = usePokemonLinks();
   
if (loading) {
    return null;
}
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Picture</th>
                        <th>Japanese</th>
                        <th>English</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonArray.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>
                                <img src={p.sprites.front_default} alt={p.name}></img>
                            </td>
                            <td>{p.name}</td>
                            <td>{p.name}</td>
                            <td>{p.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    );
}

export default PokemonTable;