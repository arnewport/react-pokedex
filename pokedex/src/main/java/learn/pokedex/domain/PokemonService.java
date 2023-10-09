package learn.pokedex.domain;

import learn.pokedex.data.PokemonRepository;
import learn.pokedex.models.Pokemon;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {
    private final PokemonRepository repository;

    public PokemonService(PokemonRepository repository) {
        this.repository = repository;
    }

    public Pokemon findById(int id) {
        return repository.findById(id);
    }

    public void addRating(int id, int rating) {
        repository.addRating(id, rating);
    }
}
