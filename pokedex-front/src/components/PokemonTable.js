import { useState } from "react";
import usePokemonLinks from '../hooks/usePokemonLinks';
import { alterPosition, displayPokemonNumber, displayCapitalizedName, displayPokemonTypes } from "../helpers/PokemonTableHelpers";
import Rate from './Rate';

function PokemonTable() {

    const [position, setPosition] = useState(1);
    const [pokemonArray, loading] = usePokemonLinks(position);
   
if (loading) {
    return null;
}
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th>Number</th>
                        <th>Picture</th>
                        <th>Japanese Name</th>
                        <th>English Name</th>
                        <th>Type(s)</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonArray.map(p => (
                        <tr key={p.id} className="align-middle text-center">
                            <td>{displayPokemonNumber(p.id)}</td>
                            <td>
                                <img src={p.sprites.front_default} alt={p.name}></img>
                            </td>
                            <td>{p.japaneseName}</td>
                            <td>{displayCapitalizedName(p.name)}</td>
                            <td>{displayPokemonTypes(p.types)}</td>
                            <td>
                                <Rate id={p.id} rating={p.rating}/>
                            </td>
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