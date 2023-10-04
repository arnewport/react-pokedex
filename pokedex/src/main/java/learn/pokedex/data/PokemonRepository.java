package learn.pokedex.data;

import learn.pokedex.models.Pokemon;

import java.util.List;

public interface PokemonRepository {
    List<Pokemon> findAll();
    Pokemon findById(int id);

}
