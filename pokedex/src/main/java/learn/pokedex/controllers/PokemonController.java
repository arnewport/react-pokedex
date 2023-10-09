package learn.pokedex.controllers;

import learn.pokedex.domain.PokemonService;
import learn.pokedex.models.Pokemon;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonController {

    private final PokemonService service;

    public PokemonController(PokemonService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Pokemon findById(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping("/add")
    public void addRating(@RequestParam("id") int id, @RequestParam("rating") int rating) {
        service.addRating(id, rating);
    }

}
