import usePokemonLinks from '../hooks/usePokemonLinks';
import { useState } from "react";

function PokemonTable() {

    const [position, setPosition] = useState(1);
    const [pokemonArray, loading] = usePokemonLinks(position);

    const alterPosition = (position, incrementor) => {
        position = position + incrementor;
        position = (position > 142) ? 142 : (position < 1) ? 1 : position;
        console.log(position);
        return position;
    }

    const displayPokemonNumber = (number) => {
        number = (number < 10) ? "#00" + number : (number < 100) ? "#0" + number : "#" + number;
        return number;
    }

    const displayEnglishName = (name) => {
        name = name.charAt(0).toUpperCase() + name.substring(1, name.length)
        return name;
    }
   
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
                        <th>Japanese Name</th>
                        <th>English Name</th>
                        <th>Type(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonArray.map(p => (
                        <tr key={p.id}>
                            <td>{displayPokemonNumber(p.id)}</td>
                            <td>
                                <img src={p.sprites.front_default} alt={p.name}></img>
                            </td>
                            <td>{p.japaneseName}</td>
                            <td>{displayEnglishName(p.name)}</td>
                            <td>{p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.substring(1, p.name.length)}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
            <div className="position-fixed bottom-0 end-0 p-3">
                <button className="btn btn-primary me-2" onClick={() => {setPosition(alterPosition(position, -10))}}>{'<'}</button>
                <button className="btn btn-primary" onClick={() => {setPosition(alterPosition(position, 10))}}>{'>'}</button>
            </div>
        </div>
    );
}

export default PokemonTable;