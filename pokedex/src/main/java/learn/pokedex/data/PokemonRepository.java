package learn.pokedex.data;

import learn.pokedex.models.Pokemon;

import java.util.List;

public interface PokemonRepository {
    Pokemon findById(int id);

    int addRating(int id, int rating);
}
