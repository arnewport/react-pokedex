package learn.pokedex.controllers;

import learn.pokedex.domain.RatingService;
import learn.pokedex.models.Rating;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pokemon/rating")
public class RatingController {

    private final RatingService service;

    public RatingController(RatingService service) { this.service = service; }

    @GetMapping("/{id}")
    public double findById(@PathVariable int id) {
        return service.findById(id);
    }

}
