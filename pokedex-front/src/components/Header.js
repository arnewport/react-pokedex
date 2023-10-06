import React from 'react';
import './styles.css';

export default function Header(){
    
    return <header className="header">
        
        <h1 className="header-title">---------------- Pokemon ----------------</h1>
        <h6>Andrew Newport ・Rachel Lin ・ Jessica Link</h6>
        <img className="header-image" src={process.env.PUBLIC_URL + "/pokemon_banner/StarterPokemon.png"} alt="Starter Pokemon"></img>
        
        </header>;
}
