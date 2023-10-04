package learn.pokedex.domain;

import learn.pokedex.data.PokemonRepository;
import learn.pokedex.models.Pokemon;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService {
    private final PokemonRepository repository;

    public PokemonService(PokemonRepository repository) {
        this.repository = repository;
    }

    public List<Pokemon> findAll() {
        return repository.findAll();
    }

    public Pokemon findById(int id) {
        return repository.findById(id);
    }
}
