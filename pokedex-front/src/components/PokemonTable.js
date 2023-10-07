import usePokemonLinks from '../hooks/usePokemonLinks';
import Rate from './Rate';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
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

    const displayCapitalizedName = (name) => {
        name = name.charAt(0).toUpperCase() + name.substring(1, name.length)
        return name;
    }

    const displayPokemonTypes = (types) => {
        let type1, type2;
        if (types.length === 2) {
            type1 = types[0].type.name;
            type2 = types[1].type.name;
        } else {
            type1 = types[0].type.name;
        }

        if (!type2) {
            return displayCapitalizedName(type1);
        }
        return (
            <div>
              {displayCapitalizedName(type1)}
              <br />
              <br />
              {displayCapitalizedName(type2)}
            </div>
          );
    }
   
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
                                <Rate />
                                <Container>
                                    <span>1.0 &nbsp;</span>
                                    <FaStar 
                                        color={"gold"}
                                    />
                                </Container>
                                {/*                                    font-size={"1.5rem"}  */}
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