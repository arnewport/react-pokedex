package learn.pokedex.controllers;

import learn.pokedex.domain.PokemonService;
import learn.pokedex.models.Pokemon;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonController {

    private final PokemonService service;

    public PokemonController(PokemonService service) {
        this.service = service;
    }

    @GetMapping
    public List<Pokemon> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Pokemon findById(@PathVariable int id) {
        return service.findById(id);
    }
}
