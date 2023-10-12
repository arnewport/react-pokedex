package learn.pokedex.controllers;

import learn.pokedex.domain.PokemonService;
import learn.pokedex.models.Pokemon;
import learn.pokedex.models.Rating;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Object> addRating(@RequestBody Rating response) {
        service.addRating(response.getId(), response.getRating());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
