// import usePokemonLinks from '../hooks/usePokemonLinks';
// import PaginatedItems from './PaginatedItems';  

function PokemonTable({pokemonArray}) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Picture</th>
                        <th>Japanese Name</th>
                        <th>English Name</th>
                        <th>Type(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonArray.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>
                                <img src={p.sprites.front_default} alt={p.name}></img>
                            </td>
                            <td>{p.japaneseName}</td>
                            <td>{p.name.charAt(0).toUpperCase() + p.name.substring(1, p.name.length)}</td>
                            <td>{p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.substring(1, p.name.length)}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
            {/* <PaginatedItems/> */}
        </div>
    );
}

export default PokemonTable;